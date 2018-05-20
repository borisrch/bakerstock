<template>
    <div class="col-sm-6 col-md-3">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ stock.name }}
                    <div class="prices">
                        Inventory Quantity: <span class="badge-quantity">{{ stock.quantity }}</span>
                    </div>
                </h3>
            </div>
            <div class="panel-body">
                <div class="pull-left">
                    <input
                            type="number"
                            class="form-control"
                            placeholder="Quantity"
                            v-model="quantity"
                            :class="{danger: isDisabled}"
                    >
                </div>
                <div class="pull-right">
                    <button
                            class="btn btn-success"
                            @click="sellStock"
                            :disabled="isDisabled"
                            >{{ isDisabled ? 'Not enough' : 'Remove' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .danger {
        border: 1px solid red;
    }

    .badge-quantity {
        color: #eef0eb;
        background-color: #0288D1;
        border-radius: 25px;
        font-size: 12px;
        padding: 3px 3px;
    }

    .pull-left {
        max-width: 100px;
    }

    .form-control {
        width: 100%;
    }
</style>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            isDisabled() {
                console.log('Quantity: ' + this.quantity)
                console.log('Stock Quantity: ' + this.stock.quantity)

                //return this.quantity > this.stock.quantity
                if (this.quantity > this.stock.quantity || this.quantity <= 0) {
                    return true
                } else {
                    return false
                }
            }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>