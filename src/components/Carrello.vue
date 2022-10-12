<template>
  <div style="margin-bottom: 20px;">
    <div>
      <span>Totale oggetti nel carrello: {{store.cart.length}}</span><br>
    </div>
    <div style="margin-top: 10px;">
      <span>Prezzo totale: €{{store.totalPrice}}</span>
      <button class="btn btn-warning" style="margin-left: 10px;" @click="resetStore">Svuota carrello</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/App.store';

const store = useStore()

function resetStore() {
  store.$patch({
    cart: [],
    totalPrice: 0,
    selectedItem: {}
  });
}
</script>