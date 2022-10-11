<template>
  <div class="timer">
    <button class="btn btn-success" @click="start()">Start</button>
    <button class="btn btn-danger" @click="saveCorsa()">Stop</button>
    <span>{{ formattedTimer }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Corsa } from './Corsa';

let formattedTimer = ref('00 : 00')

const calculateTimer = (seconds) => {
  let minutes = Math.floor(seconds / 60)
  let minSecs = seconds - minutes * 60
  return `${minutes} : ${minSecs}`
}

const emits = defineEmits(['saveCorsa']);

function start() {
}

function saveCorsa() {
  emits('saveCorsa')
}

</script>

<style>
.timer {
  width: 200px;
  height: 80px;
  border: 2px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer span {
  flex: 1;
  margin: .2rem;
}
</style>