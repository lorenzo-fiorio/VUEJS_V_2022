<template>
	<div style="margin-top: 20px;">
		<h5>Lista articoli</h5>
		<ul class="list-group" style="margin-top: 20px;">
			<a :class="item === store.selectedItem ? 'list-group-item active' : 'list-group-item'"
				style="cursor: pointer;" @click="store.selectedItem = item" v-for="item in items" :key="item.id">
				{{item.name}} - €{{item.price}}
			</a>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useStore } from '@/App.store';
import jsonItems from '@/assets/items.json'
import { ref } from 'vue';

const items = ref(jsonItems.items)

const store = useStore()



</script>