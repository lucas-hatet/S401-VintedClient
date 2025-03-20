<script setup>
import ArticleCard from '../components/ArticleCard.vue'

import { useArticleStore} from '../stores/articles.js'

const articles = useArticleStore()
</script>



<template>
    <article id="articleList">
        <ArticleCard 
            v-for="article in articles.filteredArticles()" 
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