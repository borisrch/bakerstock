<template>
    <div>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="item in pending">
                    <td>{{ item.name }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>${{ item.price * item.quantity }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    computed: {
        pending() {
            return this.$store.getters.getPending;
        }
    }
}
</script>