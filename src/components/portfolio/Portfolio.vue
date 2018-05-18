<template>
  <div id="content">
      <h3>Current Inventory</h3>
      <hr>
    <app-stock v-for="stock in stocks" :stock="stock"></app-stock>
      <div v-if="isEmpty" class="empty-inventory">
          <h3><ion-icon name="cube" style="font-size: 3em;"></ion-icon></h3>
          <h3>Inventory is currently empty.</h3>
          <h5>Confirm pending items below to add items to inventory.</h5>
      </div>
      <h3>Pending Items</h3>
      <hr>
        <app-pending v-for="pending in pendings" :pending="pending"></app-pending>

      <div class="empty-pending">
          <h3><ion-icon name="cart" style="font-size: 3em;"></ion-icon></h3>
          <h3>No pending items.</h3>
          <h5>Items added from the Order page will appear here.</h5>
      </div>

  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Stock from './Stock.vue'
import Pending from './Pending.vue'

export default {
  computed: {
    ...mapGetters({
        stocks: 'stockPortfolio',
        pendings: 'getPending'
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
        appStock: Stock,
      appPending: Pending
  }
}
</script>

<style scoped>
    .empty-inventory {
        color: #B0BEC5;
        text-align: center;
        padding-top: 25px;
        padding-bottom: 25px;
    }

    .empty-pending {
        color: #B0BEC5;
        text-align: center;
        padding-top: 25px;
        padding-bottom: 25px;
    }

    #content {
        font-family: 'Muli', sans-serif;
    }

</style>
