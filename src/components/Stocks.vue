<template>
	<canvas id="myChart"></canvas>
</template>

<script setup lang="ts">
import axios from 'axios';
import { Chart, registerables } from 'chart.js'
import { onMounted, ref } from 'vue';

const myChart = ref({});
const acme = ref([]);
const global = ref([]);

onMounted(() => {
	axios.get('/stocks').then(response => {
		acme.value = response.data.acme
		global.value = response.data.global
		Chart.register(...registerables)
		createChart()
	})
});

function returnDays(daysNumber) {
	let days = [...Array(daysNumber)]
	days = days.map((item, index) => {
		return 'Giorno ' + (index + 1)
	})
	return days
}

function createChart() {
	const canvas = document.getElementById('myChart') as HTMLCanvasElement;
	const ctx = canvas?.getContext('2d') as any;
	myChart.value = new Chart(ctx, {
		type: 'line',
		data: {
			labels: returnDays(acme.value.length),
			datasets: [{
				label: 'ACME Inc.',
				backgroundColor: 'rgba(255, 99, 132, 0.2)',
				borderColor: 'rgba(255, 99, 132, 1)',
				data: acme.value,
				borderWidth: 1
			}, {
				label: 'Global Inc.',
				backgroundColor: 'rgba(54, 162, 235, 0.2)',
				borderColor: 'rgba(54, 162, 235, 1)',
				data: global.value,
				borderWidth: 1
			}]
		},
	});
}
</script>