<template>
    <div id="content">
        <h3>Welcome to the BakerStock Dashboard.</h3>
        <hr>

        <div class="container">
            <div class="row">
                <h4 class="tag"><strong>FUNDS</strong></h4>
                    <p class="info">{{ funds | currency }}</p>
                <br>
                <h4 class="tag"><strong>CURRENT SESSION</strong></h4>
                    <p class="info">{{ currentTime }}</p>
                <br>
            </div>
            <div class="row" id="table">
                <h4 class="tag"><strong>NOTICE BOARD</strong></h4>
                <app-notes-table></app-notes-table>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import NotesTable from './notes/NotesTable.vue'

    export default {
        data() {
            return {
                currentTime: null
            }
        },
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        },
        methods: {
            updateCurrentTime() {
                this.currentTime = moment().format('LLLL')
            }
        },
        created() {
            this.currentTime = moment().format('LLLL')
            setInterval(() => this.updateCurrentTime(), 1 * 1000);
        },
        components: {
            appNotesTable: NotesTable
        }
    }
</script>

<style>
    #content {
        color: #333;
        font-family: 'Muli', sans-serif;
    }
    .info {
        font-size: 2em;
        color: #333;
    }
    .tag {
        color: #333;
    }

    #table {
        max-width: 920px;
    }
</style>