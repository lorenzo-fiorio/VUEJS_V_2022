<template>
  <div class="text-center" style="margin-top: 20px;">
    <h4>Corse</h4>
  </div>
  <div v-for="(corsa, index) in corse" :key="index" class="row">
    <button class="btn btn-primary" @click="selectCorsa(corsa)" style="margin-top: 20px;">
      Corsa {{index + 1}}: {{corsa.date}}</button>
  </div>
  <div class="row">
    <button class="btn btn-secondary" @click="addCorsa()" style="margin-top: 20px;">Aggiungi una nuova corsa</button>
  </div>
  <div class="row">
    <Running :corsa="selectedCorsa" :newCorsa="newCorsa" :corse="corse" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import logs from '../assets/runningLogs.json';
import { Corsa } from './Corsa';
import Running from './Running.vue'

const corse = ref(logs.corse);

const selectedCorsa = ref<Corsa>();
const newCorsa = ref();

function selectCorsa(corsa: Corsa) {
  selectedCorsa.value = corsa;
  newCorsa.value = false;
}

function addCorsa() {
  newCorsa.value = true;
}

</script>