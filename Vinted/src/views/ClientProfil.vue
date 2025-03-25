<script setup>
const props = defineProps(['id'])
import { useClientStore } from '../stores/clients.js'
import ArticleCard from '../components/ArticleCard.vue'
import AvisCard from '@/components/AvisCard.vue'
import Chargement from '../components/Chargement.vue'
import { ref } from 'vue'

const clients = useClientStore()

const data = clients.GetById(props.id)
const nav = ref(true)

</script>

<template>
    <div v-if="data">
        <p>{{ console.log(data) }}</p>
        <h1>pseudo : {{ data.pseudo }}</h1>
        <h1>{{ data.avisSur.length }} évaluations</h1>
        <h1>{{ data.adresseFacturation.ville.nomVille }}</h1>
        <h1>description : {{ data.description }}</h1>
        <h1>Connecté(e) il y a {{ Math.round((new Date() - new Date(data.dateDerniereConnexion)) / (1000 * 60 * 60 * 24)) }}
            jours</h1>

        <button @click="nav = true">Articles</button>

        <button @click="nav = false">Avis</button>


        <div v-if="nav">
            <article id="articleList">
                <ArticleCard v-for="article in data.articles" :data="article" :vendeur="data">
                </ArticleCard>
            </article>
        </div>
        <div v-else>
            <article id="avisList">
                <AvisCard v-for="avis in data.avisSur" :data="avis">

                </AvisCard>
            </article>
        </div>

    </div>
    <div v-else>
        <Chargement />
    </div>
</template>

<style scoped>
h1 {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>