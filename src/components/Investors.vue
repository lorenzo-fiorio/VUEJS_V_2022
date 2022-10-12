<template>
  <h5>Lista degli investitori</h5>
  <ul>
    <li v-for="(investor, index) in investors" :key="index">
      Nome: {{investor.name.toUpperCase()}} - Investimenti: {{investor.investments}}</li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios'

interface Investor {
  name: string,
  investments: number
}

const investors = ref<Investor[]>([]);

onMounted(() => {
  axios.get('/investors').then(response => {
    investors.value = response.data;
  })
});

</script>