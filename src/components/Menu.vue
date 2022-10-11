<template>
	<div class="container" style="max-width: 80%; margin-top: 20px;">
		<div class="row">
			<h3>Le nostre pizze:</h3>
			<ul>
				<li style="margin-top: 10px; padding: 10px;" v-for="pizza in pizze">
					<span style="cursor: pointer;" @click="selectPizza(pizza)"><b>{{pizza.name.toUpperCase()}}</b>:
						€{{pizza.price}}</span>
				</li>
			</ul>
		</div>
		<div v-if="selectedPizza" class="row" style="margin-top: 30px;">
			<Pizza :pizza="selectedPizza" />
		</div>
		<div v-else style="margin-top: 30px;">
			Nessuna pizza selezionata.
		</div>
	</div>
</template>

<script>
import { defineComponent } from 'vue';
import json from '../assets/pizze.json';
import Pizza from './Pizza.vue';

export default defineComponent({
	name: 'menu',
	components: {
		Pizza
	},
	data() {
		return {
			pizze: [],
			selectedPizza: null
		}
	},
	mounted() {
		this.pizze = json.pizze;
	},
	methods: {
		selectPizza(pizza) {
			this.selectedPizza = pizza;
		}
	}
});
</script>