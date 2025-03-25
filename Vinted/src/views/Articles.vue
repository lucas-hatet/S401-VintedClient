<script setup>
import ArticleCard from '../components/ArticleCard.vue'
import { useRouter, useRoute } from 'vue-router'

import { useArticleStore } from '../stores/articles.js'
const route = useRoute()

const props = defineProps(
    ['id']
)

console.log(props.id)
const articles = useArticleStore()
if (route.fullPath.includes("categorie")){
    articles.GetByIdCategorie(props.id)
}
else {
    articles.GetAll()
}
</script>



<template>
    <article v-if="articles.filteredArticles()" id="articleList">
        <ArticleCard v-for="article in articles.filteredArticles()" :data="article" :vendeur="article.vendeur">
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