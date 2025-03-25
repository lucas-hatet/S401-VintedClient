<script setup>
import { useArticleStore} from '../stores/articles.js'
const articles = useArticleStore()

</script>

<template>
    <div id="navbar">
        <select>
            <option>Articles</option>
        </select>
        <div id="search">
            <svg id="loupe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
                <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z">
                    <path xmlns="http://www.w3.org/2000/svg" d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z"></path>
                </path>
            </svg>
            <input v-model="articles.filter" id="searchBar" type="text" placeholder="Rechercher des articles" name="recherche_texte">
        </div>
    </div>
</template>

<style scoped>
    #navbar {
        width: 40%;
    }

    #navbar > * {
        margin: 0;
        background-color: var(--gray-bg);
        height: 100%;
    }

    select {
        font-size: 1rem;
        padding: 0 32px 0 16px;
        overflow: hidden;
        border: 0;
        border-right: 1px solid var(--gray-border);
        text-align: center;
        color: var(--gray-text);
        width: fit-content;
        border-radius: 5px 0px 0px 5px;
        -webkit-appearance: none;
        background-image: linear-gradient(45deg, transparent 50%, var(--gray-text) 50%), linear-gradient(135deg, var(--gray-text) 50%, transparent 50%);
        background-position: calc(100% - 20px) calc(1em), calc(100% - 15px) calc(1em);
        background-size: 5px 5px, 5px 5px;
        background-repeat: no-repeat;
    }

    #search {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: start;
        padding: 0 10px 0 10px;
        outline: none;
        border-radius: 0px 5px 5px 0px;
    }

    #loupe {
        margin: 0;
        padding: 0;
        height: 50%;
        width: fit-content;
        filter: brightness(0) saturate(100%) invert(63%) sepia(0%) saturate(81%) hue-rotate(174deg) brightness(95%) contrast(92%);
    }

    form {
        margin-left: 10px;
        display: inline;
        width: 100%;
        text-align: start;
    }

    #searchBar {
        background-color: var(--gray-bg);
        border: none;
        font-size: 1rem;
        outline: none;
        width: 90%;
        padding-top: 2px;
        margin-left: 5px;
    }
    
</style>