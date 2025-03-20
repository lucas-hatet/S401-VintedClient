<script setup>
import ArticleCard from '../components/ArticleCard.vue'
import Chargement from '../components/Chargement.vue'

import { useArticleStore} from '../stores/articles.js'

const articles = useArticleStore()
</script>

<template>
    <h1>Fil d'actu</h1>
    <article id="articleList">
        <ArticleCard 
            v-for="article in articles.filteredArticles().slice(0,10)" 
            :data="article" :vendeur="article.vendeur">
        </ArticleCard>
    </article>
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