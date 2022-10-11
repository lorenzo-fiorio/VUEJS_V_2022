<template>
	<div class="container">
		<h3>Libreria</h3>
		<ul class="list-group">
			<a v-for="book in books" :key="book.isin" class="list-group-item" @click="navToBook(book)"
				style="cursor: pointer;">
				"{{book.name}}" - {{book.author}}
			</a>
		</ul>
	</div>
</template>

<script>
import booksJson from '../assets/books.json'

export default ({
	name: "library",
	data() {
		return {
			books: booksJson.books
		}
	},
	methods: {
		navToBook(book) {
			this.$router.push({ name: 'book', params: { isin: book.isin } });
		}
	}
});
</script>