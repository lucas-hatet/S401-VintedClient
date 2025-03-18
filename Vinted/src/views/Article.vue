<script setup>
import ArticleCard from '../components/ArticleCard.vue'
import { useArticleStore} from '../stores/articles.js'
const articles = useArticleStore()
</script>



<template>
    <article id="articleList">
        <ArticleCard 
            v-for="article in articles.list" 
            :data="article">
        </ArticleCard>
    </article>
</template>

<style scoped>
#articleList {
    display: flex;
    flex-wrap: wrap;
    width: 1200px;
    justify-content: center;    
    color: gray;
    font-size: .8rem;
    margin-top: 20px;
}
</style>