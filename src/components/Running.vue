<template>
  <div class="row" v-if="!newCorsa && corsa">
    <div class="col-sm text-center"><b>Data:</b> {{corsa?.date}}</div>
    <div class="col-sm text-center">
      <img :src="getCorsaImage(corsa?.map)" alt="" style="width: 100%;">
    </div>
    <div class="col-sm text-center"><b>Tempo totale:</b> {{corsa?.total}}</div>
  </div>
  <Timer v-if="newCorsa" />
</template>

<script setup lang="ts">
import { Corsa } from './Corsa';
import Timer from './Timer.vue';

defineProps({ corsa: Corsa, newCorsa: Boolean, corse: Array<Corsa> });

const getCorsaImage = (map: string | undefined) => {
  return `./src/assets/maps/${map}`;
};

</script>