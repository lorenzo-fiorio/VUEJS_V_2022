<template>
  <div class="container">
    <h5>Storico</h5>
    <table>
      <thead>
        <tr>
          <th v-for="(col, index) in cols" :key="index">{{col}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(history, index) in selectedBook.history" :key="index">
          <td v-for="(col, index) in cols" :key="index">{{history[col]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import booksJson from '../assets/books.json'

export default ({
  name: "history",
  props: ['isin'],
  data() {
    return {
      books: booksJson.books,
      selectedBook: {},
      cols: []
    }
  },
  mounted() {
    this.selectedBook = this.books.filter((item) => item.isin === this.isin)[0];
    this.cols = Object.keys(this.selectedBook.history[0]);
  }
});
</script>