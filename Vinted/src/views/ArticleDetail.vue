<script setup>
import { useArticleStore} from '../stores/articles.js'
const articles = useArticleStore()
console.log(route.params)
</script>

<template>
    <p>{{ $route.params.id }}</p>
    <p></p>   

</template>

<style scoped>

</style>