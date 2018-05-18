<template>
    <div class="col-sm-6 col-md-4">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">
                    {{ pending.name }}
                    <small>(Price: {{ pending.price }} | Quantity: {{ pending.quantity }})</small>
                </h3>
            </div>
            <div class="panel-body">
                <button @click="arrived">Arrived</button>
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