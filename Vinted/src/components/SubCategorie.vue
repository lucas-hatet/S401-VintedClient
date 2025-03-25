<script setup>
const props = defineProps({
    data: {
        required: true
    }
})

</script>

<template>
    <ul id="subcategorie-list">
        <RouterLink :to="'/categorie/' + subcategorie.idCategorie" class="subCategorie" v-if="data.categoriesEnfants" v-for="subcategorie in data.categoriesEnfants">
            {{subcategorie.libelleCategorie }}
        </RouterLink>
    </ul>
</template>

<style scoped>
#subcategorie-list {
    position: absolute;
    top: 100%;  
    left: 0;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
}

#subcategorie-list > .subCategorie {
    list-style: none;
    padding: 0.5em;
}
</style>