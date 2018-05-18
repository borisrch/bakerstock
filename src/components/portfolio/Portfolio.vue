<template>
  <div id="content">
      <h3>Current Inventory</h3>
      <hr>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
      <div v-if="isEmpty" class="empty">
          <h3><ion-icon name="cube" style="font-size: 3em;"></ion-icon></h3>
          <h3>Inventory is currently empty. Add products from the order tab.</h3>
      </div>
      <h3>Pending Items</h3>
      <hr>
      <p>Items added from the Order page will appear here.
          Once the items have been purchased, and have arrived, press <strong>Arrived</strong> to add
      items into the inventory.</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Stock from './Stock.vue'

export default {
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    }),
      isEmpty() {
          if(this.$store.getters.stockPortfolio.length == 0) {
              return true
          } else {
              return false
          }
      }
  },
  components: {
    appStock: Stock
  }
}
</script>

<style scoped>
    .empty {
        color: #bebebe;
        text-align: center;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    #content {
        font-family: 'Muli', sans-serif;
    }

</style>
