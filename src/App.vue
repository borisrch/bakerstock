<template>
    <div class="container">
        <div class="row">
            <div class="head">
                <app-header></app-header>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import Header from './components/Header.vue'

    export default {
        components: {
            appHeader: Header
        },
        created() {
            this.$store.dispatch('initStocks')
            this.$store.dispatch('initNotes')
        }
    }
</script>

<style scoped>
    #navigation {
        width: 100%;
        background-color: red;
        margin: 0;
    }

    .head {

    }

</style>
