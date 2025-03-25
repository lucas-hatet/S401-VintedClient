<script setup>
import { RouterLink } from 'vue-router';
import Button from '../components/Button.vue'
import { useArticleStore } from '../stores/articles.js'
import Chargement from '../components/Chargement.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const nbPhotos = route.query.nbPhotos || 0;


const articles = useArticleStore()
const props = defineProps(
    ['id']
)

const idphoto = ref(0)
const data = articles.GetById(props.id)


const dateString = data.dateAjout;
const dateAjout = new Date(dateString);
console.log(dateString)
</script>

<template>
    <!-- on teste si data existe étant donné que l'appel à l'api est asynchrone, on affiche donc chargement... jusqu'à ce que les données arrivent et à ce moment on les affiche. -->
    <div id="container" v-if="data">
        <div id="column-1" class="column">
            <div>la photo !</div>
            <button @click="idphoto++">Suivant</button>
            <button @click="idphoto--">Précédent</button>
            <img :src="'/src/assets/'+data.photos[idphoto % nbPhotos].photo.urlPhoto" alt="">
        </div>

        <div id="column-2" class="column">
            <section>
                <h2 id="nomarticle">{{ data.nomArticle }}</h2>
                <RouterLink>{{ data.marque.nomMarque }}</RouterLink>
                <p>{{ data.prix.toFixed(2) }} €</p>
    
                <border></border>
    
                <div id="list-button">
                    <Button class="big" :link="'.'" :content="'Acheter'"></Button>
                    <Button class="big white" :link="'.'" :content="'Faire une offre'"></Button>
                    <Button class="big white" :link="'.'" :content="'Message'"></Button>
                </div>
    
                <div id="caracteristique">
                    <p>{{ data.description }}</p>
                </div>

            </section>

            <div id="vendeur">
                <div id="photo"><img src="" alt=""></div>
                <div id="pseudo"><a href=""></a></div>
            </div>

        </div>

    </div>
    <div v-else>
        <Chargement />
    </div>





</template>

<style scoped>
    #container {
        margin-top: 80px;
        width: 80vw;
        gap: 5%;
        display: flex;
    }

    #column-1 {
        width: 65%;
    }

    #column-2 {
        background-color: white;
        width: 30%;
    }

    #column-2 > * {
        border-radius: 5px;
        border: 1px solid var(--gray-thinborder);
        padding: 20px;
    }


    #list-button {
        width: 100%;
        justify-content: center;
    }
</style>