<template>
  <div style="margin-top: 20px;">
    <h5>Articolo selezionato:</h5>
    <div style="margin-top: 20px;">
      <span><b>{{store.selectedItem.name}}</b></span><br>
      <span>Descrizione: "{{store.selectedItem.description}}""</span><br>
      <span>Prezzo: €{{store.selectedItem.price}}</span>
      <div style="margin-top: 20px;">
        <button class="btn btn-success" @click="store.addItem(store.selectedItem)">Aggiungi al carrello</button>
        <button class="btn btn-danger" @click="store.removeItem(store.selectedItem)" style="margin-left: 10px;">
          Rimuovi dal carrello
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/App.store';

const store = useStore()

</script>