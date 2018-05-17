<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <br>
                    <small>Price: ${{ stock.price }}</small>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: insufficientFunds}">
                            
                </div>
                <div class="pull-right">
                    <button class="btn btn-success"
                            @click="buyStock"
                            :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger">
                        {{ insufficientFunds ? 'N/A' : 'Buy'}}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['stock'],
  data() {
      return {
          quantity: 0
      }
  },
    computed: {
      funds () {
          return this.$store.getters.funds;
      },
      insufficientFunds() {
          return this.quantity * this.stock.price > this.funds;
      }
    },
  methods: {
      buyStock() {
          let toint = parseInt(this.quantity)
          const order = {
              stockId: this.stock.id,
              stockPrice: this.stock.price,
              quantity: toint
          }
          this.$store.dispatch('buyStock', order)
          this.quantity = 0
      }
  }
}
</script>

<style>
    .danger {
        border: 1px solid red;
    }

    .panel-success>.panel-heading {
        background-color: rgb(237, 239, 241);
        border-color: rgb(217, 219, 221);
    }

    .panel-success {
        border-color: rgb(217, 219, 221);
    }

    .panel-title {
        color: #3b353e;
    }

    .panel-body {
        padding: 10px;
    }

    .form-control {
        width: 50%;
    }
</style>
