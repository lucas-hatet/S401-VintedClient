<script setup>
import ArticleCard from '../components/ArticleCard.vue'
import { useRouter, useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import Chargement from '../components/Chargement.vue'


import { useArticleStore } from '../stores/articles.js'
const route = useRoute()


const articles = useArticleStore()

const loadArticles = () => {
    if (route.fullPath.includes("categorie")){
        articles.GetByIdCategorie(route.params.id)
    }
    else {
        articles.GetAll()
    }    

}
loadArticles()

watch(
    () => route.path, 
    () => {
        // Recharger les articles chaque fois que la route change
        loadArticles()
    }
)
</script>



<template>
    <article v-if="!articles.isLoading" id="articleList">
        <ArticleCard v-if="articles.filteredArticles()" v-for="article in articles.filteredArticles()" :data="article" :vendeur="article.vendeur">
        </ArticleCard>
    </article>
    <div v-else><Chargement></Chargement></div>
</template>

<style scoped>
#articleList {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    justify-content: center;
    color: var(--gray-text);
    font-size: .8rem;
    margin-top: 20px;
}
</style>