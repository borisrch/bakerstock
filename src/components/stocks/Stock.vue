<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}

                    <div class="prices">
                        Price: <span class="badge-price">${{ stock.price }}</span>
                        <div class="total" v-if="moreThanOne">
                            Total:
                            <span class="badge-total">${{ stock.price * quantity }}</span>
                        </div>
                    </div>
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
      },
        moreThanOne() {
          if(this.quantity > 0) {
              return true;
          } else {
              return false;
          }
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

          const pendingOrder = {
              stockId: this.stock.id,
              stockName: this.stock.name,
              quantity: toint,
              stockPrice: this.stock.price,
          }
          //this.$store.dispatch('buyStock', order)
          this.$store.dispatch('addPending', pendingOrder)

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

    p {
        margin-bottom: 0px;
    }

    .prices {
        padding-top: 5px;
    }

    .badge-price {
        color: #eef0eb;
        background-color: #0288D1;
        border-radius: 25px;
        font-size: 12px;
        padding: 3px 3px;
    }

    .badge-total {
        color: #FFF3E0;
        background-color: #F57C00;
        border-radius: 25px;
        font-size: 12px;
        padding: 3px 3px;
    }

    .total {
        display: inline;
    }

    .btn-success {
        background-color: rgb(0, 182, 85);
        border: 0;
        box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    }

    .btn-success:hover {
        background-color: rgb(0, 205, 91);
        margin-top: -1px;
    }
</style>
