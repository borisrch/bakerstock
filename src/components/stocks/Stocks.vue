<template>
  <div class="container">
      <h3>Order Ingredients</h3>
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
          <div class="text-right">
              <button class="btn btn-primary" v-if="!showForm" @click="newItem">
                  <i class="material-icons" style="font-size: 1.25em; vertical-align: middle; margin-top: -0.125em">add_box</i>
                  <strong>New Product</strong>
              </button>
          </div>
      </div>
      <button @click="add">Static Ingredient Add</button>
  </div>
</template>

<script>
import Stock from './Stock.vue'
import Form from './Form.vue'
import data from '../../data/stocks'

export default {
    data() {
        return {
            showForm: false
        }
    },
    components: {
        appStock: Stock,
        appForm: Form
    },
    computed: {
      stocks() {
          return this.$store.getters.stocks;
      }
    },
    methods: {
        add() {
          const id = data.length + 1
          const name = 'name'
          const price = 0
          const test = {
              id: id,
              name: name,
              price: price
          }
          data.push(test)
        },
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
        margin-top: 18px;
        margin-right: 31px;
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
    }
</style>

