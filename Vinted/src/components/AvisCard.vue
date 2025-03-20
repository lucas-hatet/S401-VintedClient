<script setup>
defineProps({
  data: {
    required : true
  },
})
</script>

<template>
    <div class="avisBox">
        <RouterLink class="acheteurAvis" :to="'/client/' + data.acheteur.idClient">
            <img src="" alt="">
            <div>{{data.acheteur.pseudo}}</div>
        </RouterLink>
        <div class="contenuAvis">
            <div class="avis">{{data.description}} €</div>
        </div>
    </div>

</template>

<style scoped>

    .avisBox {
        display: flex;
        flex-direction: column;
        width: 20%;
        position: relative;
        word-wrap: break-word;
    }
    .avisBox > *:not(.photoArticle) {
        padding: .8em;
    }
    .acheteurAvis {
        display: flex;
        gap: .5em;
        flex-direction: row;
        align-items: center;

    }
    .acheteurAvis div{
        color: var(--gray-text);
    }
    .acheteurAvis img {
        height: 28px;
        width: 28px;
        border-radius: 50%;
    }
    .acheteurAvis div {
        vertical-align: middle;
    }

    
</style>