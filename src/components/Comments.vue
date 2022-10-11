<template>
	<div class="container">
		<h5>Commenti</h5>
		<div class="card" v-for="(comment, index) in selectedBook.comments" :key="index">
			<div class="card-body">
				<h5 class="card-title">{{comment.author}}</h5>
				<p class="card-text">{{comment.text}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import booksJson from '../assets/books.json'

export default ({
	name: "comments",
	props: ['isin'],
	data() {
		return {
			books: booksJson.books,
			selectedBook: {}
		}
	},
	mounted() {
		this.selectedBook = this.books.filter((item) => item.isin === this.isin)[0];
	}
});
</script>