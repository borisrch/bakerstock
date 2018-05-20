<template>
    <div class="col-sm-6 col-md-3">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ pending.name }}
                    <div class="prices">
                        Expected Quantity: <span class="badge-quantity">{{ pending.quantity }}</span>
                    </div>
                </h3>
            </div>
            <div class="panel-body">
                <button class="btn btn-success" @click="arrived">Arrived</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['pending'],
        methods: {
            arrived() {
                const order = {
                    stockId: this.pending.id,
                    stockPrice: this.pending.price,
                    quantity: this.pending.quantity
                };
                this.$store.dispatch('buyStock', order)
                this.$store.dispatch('removePending', order)
            }
        }
    }
</script>

<style scoped>

    .panel-info>.panel-heading {
        background-color: rgb(237, 239, 241);
        border-color: rgb(217, 219, 221);
    }

    .panel-info {
        border-color: rgb(217, 219, 221);
    }

    .panel-title {
        color: #3b353e;
    }

    .badge-quantity {
        color: #EDE7F6;
        background-color: #F57C00;
        border-radius: 25px;
        font-size: 12px;
        padding: 3px 3px;
    }

    .btn-success {
        background-color: #2196F3;
        border: 0;
        box-shadow:inset 0 -0.6em 0 -0.35em rgba(0,0,0,0.17);
    }

    .btn-success:hover {
        background-color: #64B5F6;
        margin-top: -1px;
    }
</style>