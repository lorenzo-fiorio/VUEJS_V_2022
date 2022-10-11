<template>
    <div>
        <h5>Pizza {{pizza.name.toUpperCase()}}</h5>
        <img :src="getPizzaImage">
        <span style="margin-left: 20px;">Ingredienti:
            <span v-for="(ingredient, index) in pizza.ingredients" :key="index">
                {{ingredient}}
                <span v-if="index < pizza.ingredients.length - 1"> - </span>
            </span>
        </span>
        <h6 style="margin-top: 20px;">Commenti</h6>
        <div v-for="(comment, index) in pizza.comments" :key="index"
            style="margin-top: 20px; background-color: snow;">
            <span>Data: {{dateFormatter(comment.date)}}</span><br>
            <span>Autore: <b>{{comment.author}}</b></span><br>
            <span>Voto: <b>{{comment.rating}}/5</b></span><br>
            <span>Recensione: <i>"{{comment.comment}}"</i></span>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Pizza',
    props: ['pizza'],
    methods: {
        dateFormatter(date) {
            date = new Date(date);
            let day = date.getDate().toString().padStart(2, '0');
            let month = (date.getMonth() + 1).toString().padStart(2, '0');
            let hours =  date.getHours().toString().padStart(2, '0');
            let minutes =  date.getMinutes().toString().padStart(2, '0');
            return `${day}/${month}/${date.getFullYear()} ${hours}:${minutes}`;
        }
    },
    computed: {
        getPizzaImage() {
            return `./src/assets/pizze/${this.pizza.label}.png`;
        }
    }
});
</script>