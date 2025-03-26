<script setup>
import { RouterLink } from 'vue-router';
import Button from '../components/Button.vue'
import Prix from '../components/Prix.vue'
import { useArticleStore } from '../stores/articles.js'
import Chargement from '../components/Chargement.vue'
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import moment from 'moment';


const route = useRoute();
const nbPhotos = route.query.nbPhotos || 0;


const articles = useArticleStore()
const props = defineProps(
    ['id']
)

const idphoto = ref(0)
const data = articles.GetById(props.id)

console.log();

</script>

<template>
    <!-- on teste si data existe étant donné que l'appel à l'api est asynchrone, on affiche donc chargement... jusqu'à ce que les données arrivent et à ce moment on les affiche. -->
    <div id="container" v-if="!articles.isLoading">
        <div id="column-1" class="column">
            <div>
                <button @click="idphoto++">Suivant</button>
                <button @click="idphoto--">Précédent</button>
            </div>
            <img :src="'/src/assets/'+data.photos[Math.abs(idphoto) % nbPhotos].photo.urlPhoto" alt="">
        </div>
        
        <div id="column-2" class="column">
            <section>
                <div>
                    <h2 id="nomarticle">{{ data.nomArticle }}</h2>
                    <RouterLink>{{ data.marque.nomMarque }}</RouterLink>
                </div>
                <div>
                    <Prix :price="data.prix"></Prix>
                </div>
                <div id="caracteristiques" class="border-top">
                    <ul>
                        <li>État</li>
                        <li>Couleur</li>
                        <li>{{ data.caracteristiquesArticle[0].valeur }} </li>
                        <li>{{ data.caracteristiquesArticle[1].valeur }} </li>
                        <li>{{ data.caracteristiquesArticle[2].caracteristique }} </li>
                        <li>Ajouté</li>
                    </ul>
                    <ul>
                        <li>{{ data.etatsArticles }}</li>
                        <li>{{ data.couleursArticle }}</li>
                        <li>{{ data.caracteristiquesArticle[0].valeur }}</li>
                        <li>{{ data.caracteristiquesArticle[1].valeur }}</li>
                        <li>{{ data.caracteristiquesArticle[2].valeur }}</li>
                        <li>{{ moment(data.dateAjout).fromNow() }}</li>
                    </ul>
                    <ul>

                    </ul>
                </div>
                <p class="border-top">{{ data.description }}</p>
                <div class="border-top" style="display: flex;"> <p>Envoi</p> <p style="text-align: right; width: 100%;">À partir de N €</p> </div>
                <div id="list-button">
                    <Button class="big" :link="'.'" :content="'Acheter'"></Button>
                    <Button class="big white" :link="'.'" :content="'Faire une offre'"></Button>
                    <Button class="big white" :link="'.'" :content="'Message'"></Button>
                </div>

            </section>

            <section>
                <div id="photo"><img src="" alt=""></div>
                <div id="pseudo"><a href=""></a></div>
            </section>

        </div>

    </div>
    <div v-else>
        <Chargement />
    </div>





</template>

<style scoped>
    #container {
        margin-top: 50px;
        gap: 5%;
        display: flex;
        font-size: .95em;
        width: 80%;
    }

    .column {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 80%;
    }

    #column-1 {
        width: 120%;
    }

    #column-2 > section {
        border-radius: 5px;
        border: 1px solid var(--gray-thinborder);
        padding: 30px;
    }

    #column-2 > section > div:not(:last-child) {
        margin-bottom: 10px;
    }

    .border-top {
        margin-top: 10px;
        border-top: 1px solid var(--gray-thinborder);
        padding-top: 10px;
    }

    #caracteristiques {
        display: flex;
    }
    #caracteristiques > ul:not(:last-child) {
        width: 48%;
    }
    #caracteristiques > ul:last-child {
        width: 4%;
    }

    #list-button {
        width: 90%;
        justify-content: center;
        padding: 5%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>