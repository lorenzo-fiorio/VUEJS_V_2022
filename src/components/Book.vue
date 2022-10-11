<template>
	<div class="container" v-if="selectedBook">
		<div class="row">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">"{{selectedBook.name}}"</h5>
					<h6 class="card-subtitle text-muted">{{selectedBook.author}}</h6>
					<p class="card-text">{{selectedBook.plot}}</p>
					<router-link :to="{name: 'library'}" class="btn btn-primary">Torna all'elenco</router-link>
					<router-link v-if="route == 'comments'" @click="route = 'history'" :to="{name: 'history'}"
						class="btn btn-primary">
						Mostra storico
					</router-link>
					<router-link v-if="route == 'history'" @click="route = 'comments'" :to="{name: 'comments'}"
						class="btn btn-primary">
						Mostra commenti
					</router-link>

				</div>
			</div>
		</div>
	</div>
	<router-view></router-view>
</template>

<script>
import booksJson from '../assets/books.json'

export default ({
	name: "book",
	props: ['isin'],
	data() {
		return {
			books: booksJson.books,
			selectedBook: {},
			route: 'history'
		}
	},
	mounted() {
		this.show = false;
		this.selectedBook = this.books.filter((item) => item.isin === this.isin)[0];
		this.$router.push({ name: 'history' });
		this.route = 'history';
	}
});
</script>