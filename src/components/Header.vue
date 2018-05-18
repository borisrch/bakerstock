<template>
    <nav class="navbar navbar-default" id="nav">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/home" class="navbar-brand">
                    <div>
                        <p id="title">
                            <i class="material-icons logo" id="brand">shopping_basket</i>
                            BakerStock</p>
                    </div>
                </router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/home"
                                 activeClass="active"
                                 tag="li">
                        <a><ion-icon class="icon-nav" name="stats"></ion-icon>Dashboard</a></router-link>

                    <router-link to="/inventory"
                                 activeClass="active"
                                 tag="li">
                        <a><ion-icon class="icon-nav" name="cube"></ion-icon>Inventory</a></router-link>

                    <router-link to="/order"
                                 activeClass="
                                 active"
                                 tag="li">
                        <a><ion-icon class="icon-nav" name="clipboard"></ion-icon>Order</a></router-link>

                    <router-link to="/notes"
                                 activeClass="
                                 active"
                                 tag="li">
                        <a><ion-icon class="icon-nav" name="today"></ion-icon>Notes</a></router-link>
                </ul>
                <p class="navbar-text navbar-right">Funds: {{ funds | currency }}</p>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="">End Day</a></li>
                    <li class="dropdown"
                        :class="{open: isDropdownOpen}"
                        @click="isDropdownOpen = !isDropdownOpen">
                        <a href="#"
                            class="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false">Save & Load <span class="caret"></span></a>
                            
                            <ul class="dropdown-menu">
                                <li><a href="#" @click="saveData">Save Data</a></li>
                                <li><a href="#" @click="loadData">Load Data</a></li>
                            </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                isDropdownOpen: false
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            saveData() {
                const data = {
                    funds: this.$store.getters.funds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                }
                this.$http.put('data.json', data)
            },
            loadData() {
                this.$store.dispatch('loadData')
            }
        }
    }
</script>

<style scoped>
    #nav {
        padding-top: 30px;
        margin: auto;
        font-family: 'Muli', sans-serif;
    }

    .navbar-default {
        color: #E3F2FD;
        background-color: rgb(48, 72, 96);
    }

    .navbar-default .navbar-nav>li>a {
        padding-bottom: 11px;
        color: #E3F2FD;
    }

    .navbar-nav>li>a:focus,
    .navbar-nav>li>a:hover {

        border-bottom: 4px solid rgb(0, 182, 85);
        background-color: rgb(61, 96, 126);
    }

    .navbar-default .navbar-nav>.active>a,
    .navbar-default .navbar-nav>.active>a:focus,
    .navbar-default .navbar-nav>.active>a:hover {
        color: #E3F2FD;
        background-color: rgb(32, 50, 68);
        border-bottom: 4px solid rgb(0, 182, 85);
        overflow: hidden;
    }
    .navbar-default .navbar-nav>.active>a>.icon-nav {
        color: rgb(0, 182, 85);
    }

    .navbar-default .navbar-brand {
        color: #ffffff;
        font-size: 1.5em;
        padding-top: 10px;

    }
    .navbar-default .navbar-text {
        color: white;
    }

    .navbar-default .navbar-nav>.open>a,
    .navbar-default .navbar-nav>.open>a:focus,
    .navbar-default .navbar-nav>.open>a:hover {
        background-color: rgb(27, 64, 94);
        color: #e0e0e0;
    }

    #brand {
        vertical-align: text-bottom;
        padding-right: 5px;
        color: rgb(0, 182, 85);
        margin-bottom: 2px;
    }

    #title {
        display: inline;
        margin-bottom: 1px;
        font-size: 24px;
        font-weight: 600;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);
    }

    .navbar-header {
        display: inline;
    }

    .navbar {
            border-radius: 0px 0px 4px 4px;
            border-top: 2px solid rgb(0, 182, 85);
            border: none;
    }

    .icon-nav {
        font-size: 1.25em;
        vertical-align: middle;
        margin-top: -0.125em;
        margin-bottom: 1px;
        margin-right: 4px;
    }

</style>
