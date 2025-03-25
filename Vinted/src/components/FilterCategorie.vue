<script setup>
import { RouterLink } from 'vue-router'
import { useCategorieStore } from '../stores/categories.js'
import SubCategorie from './SubCategorie.vue'
import { ref, computed } from 'vue'

const categories = useCategorieStore()
var active = ref({})


</script>

<template>
    <nav id="categorie-list">
        <ul>
            <RouterLink :to="'/categorie/' + categorie.idCategorie" class="oneCategorie" v-if="categories.list" v-for="categorie in categories.list"
                @mouseover="active[categorie.idCategorie] = true; "
                @mouseleave="active[categorie.idCategorie] = false">
                {{ categorie.libelleCategorie }}
                <SubCategorie v-if="active[categorie.idCategorie]" :data="categorie"></SubCategorie>
            </RouterLink>
        </ul>
    </nav>
</template>

<style scoped>
#categorie-list>ul {
    height: 100%;
    list-style-type: none;
}

#categorie-list>ul>.oneCategorie {
    background-color: var(--transparent);
    color: var(--gray-text);
    height: 100%;
    align-content: center;
    position: relative;

    padding: 0 20px;
}

#categorie-list>ul>.oneCategorie:hover {
    background-color: var(--gray-bg);
    color: black;
}

#categorie-list>ul>.oneCategorie::after {
    content: "";
    background-color: rgb(0, 119, 130);
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;

}

#categorie-list>ul>.oneCategorie:hover::after {
    width: 100%;
}
</style>