<template>
  <div class="row h-100 d-flex align-items-center">
    <div class="col-1 text-center"
      :style="{visibility: store.selectedAlbum && store.selectedIndex > 0 ? 'visible' : 'hidden'}"
      @click="previousCover()">
      <i class="fas fa-backward fa-3x" style="cursor: pointer;"></i>
    </div>
    <div class="col text-center" v-if="store.selectedAlbum">
      <h2><a :href="store.selectedAlbum.link" target="_blank">{{store.selectedAlbum.name}}</a></h2>
      <h3><a :href="store.selectedAlbum.author.link" target="_blank">{{store.selectedAlbum.author.name}}</a></h3>
      <h4>{{store.selectedAlbum.year}}</h4>
      <h5>00:00 / {{calculateTimer(store.selectedAlbum.duration)}}</h5>
    </div>
    <div class="col-1 text-center"
      :style="{visibility: store.selectedAlbum && store.selectedIndex < albums.length - 1 ? 'visible' : 'hidden'}"
      @click="nextCover()">
      <i class="fas fa-forward fa-3x" style="cursor: pointer;"></i>
    </div>
    <div class="col text-center" v-if="!store.selectedAlbum">
      <h3>Seleziona un album per vedere i dettagli</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/Pinia';
import albumJson from '@/assets/album.json'
import { Album } from './Album';
import { ref } from 'vue';

const albums = ref<Array<Album>>(albumJson.album)

const store = useStore()

const calculateTimer = (duration: string | number) => {
  if (typeof duration === 'string') {
    return duration
  }
  duration = Math.floor(parseInt(duration.toString()) / 1000)
  let hours = Math.floor(duration / 3600)
  let minutes = Math.floor((duration - hours) / 60)
  let minSecs = duration - minutes * 60
  return `${minutes.toString().padStart(2, '0')}:${minSecs.toString().padStart(2, '0')}`
}

function previousCover() {
  store.selectedAlbum = albums.value[store.selectedIndex - 1]
  store.selectedIndex--
}

function nextCover() {
  store.selectedAlbum = albums.value[store.selectedIndex + 1]
  store.selectedIndex++
  calculateTimer(store.selectedAlbum.duration)
}

</script>

<style lang="scss" scoped>
.row {
  color: white;

  a {
    color: white;
  }
}
</style>