<script setup>


const props = defineProps({
  data: {
    required : true
  },
  vendeur: {
    required : true
  }
})
console.log(props.data)
import Prix from '../components/Prix.vue'

</script>

<template>
    <div class="articleBox">
        <RouterLink class="vendeurArticle" :to="'/client/' + vendeur.idClient">
            <img v-lazy="" alt="">
            <p>{{vendeur.pseudo}}</p>
        </RouterLink>
        <div class="photoArticle">
            <RouterLink :to="'/article/' + data.idArticle /*+ '?nbPhotos=' + data.photos.length*/">
                    <img v-lazy="'/src/assets/' + data.photos[0].photo.urlPhoto" v-if="data.photos[0]" alt="">
            </RouterLink>
        </div>
        <div class="infosArticle">
            <p class="nomArticle">{{data.nomArticle}}</p>
            <p>{{data.marque.nomMarque}}</p>
            <Prix :price="data.prix" />
        </div>
    </div>

</template>

<style scoped>

    .articleBox {
        display: flex;
        flex-direction: column;
        width: 250px;
        position: relative;
        word-wrap: break-word;
    }
    .articleBox > *:not(.photoArticle) {
        padding: .8em;
    }
    .vendeurArticle {
        display: flex;
        gap: .5em;
        flex-direction: row;
        align-items: center;

    }
    .vendeurArticle img {
        height: 28px;
        width: 28px;
        border-radius: 50%;
    }
    .vendeurArticle p {
        vertical-align: middle;
    }

    .photoArticle {
        position: relative;
        margin: 0 auto 0 auto;
        width: 95%;
    }
    .photoArticle img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    .infosArticle *:nth-child(3){
        margin-top: 10px;
    }

    .nomArticle {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: normal;
        white-space: nowrap;
    }

</style>