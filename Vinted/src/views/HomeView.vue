<script setup>
import Button from '@/components/Button.vue'
import ArticleCard from '../components/ArticleCard.vue'
import Chargement from '../components/Chargement.vue'

import { useArticleStore } from '../stores/articles.js'
import { RouterLink } from 'vue-router'

const articles = useArticleStore()
articles.GetAll()
</script>

<template>
    <div id="banner">
        <div id="banner-bg">
            <img src="../assets//images/banner.jpg" />
        </div>
        <div id="overlay">
            <h1 class="web_ui__Text__text web_ui__Text__heading-xl web_ui__Text__left web_ui__Text__parent">Prêts à
                faire du tri dans vos placards ?</h1>
            <div id="button-container">
                <Button class="big" content="Vends tes articles" link="/Connexion"></Button>
                <h4>
                    <RouterLink to="/info">Comment ça marche ?</RouterLink>
                </h4>
            </div>
        </div>

    </div>
    <article v-if="articles.filteredArticles()" id="articleList">
        <h1>Fil d'actu</h1>
        <ArticleCard v-for="article in articles.filteredArticles().slice(0, 10)" :data="article"
            :vendeur="article.vendeur">
        </ArticleCard>
    </article>
</template>

<style scoped>
    #articleList {
        display: flex;
        flex-wrap: wrap;
        width: 1250px;
        justify-content: center;
        font-size: .8rem;
        margin-top: 20px;
    }
    
    #articleList > h1 {
        display: block;
    }

    #articleList > *:first-child {
        width: 100%;
        flex: 0 0 auto;
        margin: 20px 0 20px 10px;
    }

    #banner {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        min-height: 65vh;
        justify-content: center;
        flex-direction: column;
        position: relative;
        overflow: hidden;
    }

    #banner-bg {
        position: absolute;
        left: 0;
        transform-origin: -50%;
        width: 100%;
    }

    img {
        width: 100%;
        align-self: center;
    }

    #overlay {
        position: absolute;
        padding: 40px 40px 20px 40px;
        z-index: 5;
        background-color: white;
        border-radius: 5px;
        width: 300px;
        border: 0.5px solid var(--gray-thinborder);
        left: 150px;
    }

    #button-container {
        margin: 20px;
    }

    #button-container>h4 {
        margin-top: 10px;
        height: 35px;
        text-align: center;
        align-content: center;
    }

</style>