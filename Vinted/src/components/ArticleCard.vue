<script setup>
defineProps({
  data: {
    required : true
  },
})
</script>

<template>
    <div class="articleBox">
        <RouterLink class="vendeurArticle" >
            <img src="" alt="">
            <div>{{data.vendeur.pseudo}}</div>
        </RouterLink>
        <div class="photoArticle">
            <RouterLink :to="'/article/' + data.idArticle">
                <img src="" alt="">
            </RouterLink>
        </div>
        <div class="infosArticle">
            <div class="nomArticle">{{data.nomArticle}}</div>
            <div>{{data.marque.nomMarque}}</div>
            <div class="prix">{{data.prix}} €</div>
        </div>
    </div>

</template>

<style scoped>

.articleBox {
    display: flex;
    flex-direction: column;
    width: 20%;
    position: relative;
    word-wrap: break-word;
}
.articleBox > *:not(.photoArticle) {
    padding: .8em;
}
.vendeurArticle {
    display: flex;
    gap: .5em;
    flex-direction: row;
    align-items: center;

}
.vendeurArticle div{
    color: gray;

}
.vendeurArticle img {
    height: 28px;
    width: 28px;
    border-radius: 50%;
}
.vendeurArticle div {
    vertical-align: middle;
}

.photoArticle {
    position: relative;
    margin: 0 auto 0 auto;
    width: 95%;
}
.photoArticle img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
.infosArticle div:nth-child(3){
    margin-top: .8em;
    margin-bottom: .8em;
}

.nomArticle {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: normal;
    white-space: nowrap;
}

</style>