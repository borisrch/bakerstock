<template>
  <div class="container">
      <h3>Order Ingredients</h3>
      <div class="text-right">
          <button class="btn btn-primary" v-if="!showForm" @click="newItem">
              <i class="material-icons" style="font-size: 1.25em; vertical-align: middle; margin-top: -0.125em">add_box</i>
              <strong class="button-text">New Item</strong>
          </button>
      </div>
      <hr>
      <div class="row">
          <div class="col-xs-9">
              <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
          </div>

          <div class="col-xs-3" v-if="showForm">
              <app-form v-if="showForm" @resetForm="reset"></app-form>
          </div>
      </div>
      <div class="row">

      </div>
      <div class="row" v-if="pending.length != 0">
          <div class="col-xs-12">
              <h3>Order Summary</h3>
              <hr>
              <app-pending-table class="cart"></app-pending-table>
          </div>

      </div>
  </div>
</template>

<script>
import Stock from './Stock.vue'
import Form from './Form.vue'
import PendingTable from './PendingTable.vue';

export default {
    data() {
        return {
            showForm: false
        }
    },
    components: {
        appStock: Stock,
        appForm: Form,
        appPendingTable: PendingTable
    },
    computed: {
        stocks() {
            // Used for each Stock component
            return this.$store.getters.stocks;
        },
        pending() {
            // Used for the pending table.
            return this.$store.getters.getPending;
        }
    },
    methods: {
        newItem() {
            this.showForm = !this.showForm
        },
        reset() {
            this.showForm = false;
        }
    }
}
</script>

<style scoped>

    .text-right {
        display: inline-block;
        float: right;
        margin-top: 12px;
        margin-bottom: 5px;
    }

    .button {
        margin-right: 10px;
    }

    .btn {
        padding-top: 10px;
        padding-bottom: 10px;
        vertical-align: middle;

    }

    .btn-primary {
        background-color: #2196F3;
        border: 0;
        box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    }

    .btn-primary:hover {
        background-color: #64B5F6;
        margin-top: -1px;
    }

    .button-text {
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.20);
    }

    .text-left {
        display: inline-block;
    }

    .form-box {
        margin-left: 15px;
    }

    .col-xs-9 {
        padding-left: 0px;
    }

    .container {
        padding-left: 0px;
        font-family: 'Muli', sans-serif;
    }

    .cart {
        max-width: 920px;
    }

    h3 {
        display: inline-block;
    }

    hr {
        margin-top: 10px;
    }
</style>

