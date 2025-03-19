<script setup>
import { useArticleStore} from '../stores/articles.js'
const articles = useArticleStore()
const props = defineProps(
  ['id']
)

const data = articles.GetById(props.id) 

const dateString = data.dateAjout;
const dateAjout = new Date(dateString);
console.log(dateString)
</script>

<template>
    <!-- on teste si data existe étant donné que l'appel à l'api est asynchrone, on affiche donc chargement... jusqu'à ce que les données arrivent et à ce moment on les affiche. -->
    <div v-if="data">
        <p>{{ data }}</p>
        <h1 >nom article : {{ data.nomArticle }}</h1>
        <h1>Marque : {{ data.marque.nomMarque }}</h1>
        <h1>prix : {{ data.prix }} €</h1>
        <h1>prix avec protection acheteur : {{ data.prix+0.7+data.prix*0.05 }} €</h1><!-- la protection acheteur c'est 0.70 de cout fixe + 5% du prix de l'article -->
        <h1>taille : {{ data.taille }}</h1>
        <h1>Matière : {{ data.matiere }}</h1>
        <h1>Etat : {{ data.etat }}</h1>
        <h1>Largeur : {{ data.largeur }}</h1>
        <h1>Longueur : {{ data.longueur }}</h1>
        <h1>Option de paiement : {{ data.nomArticle }}</h1>
        <h1>Nombre de vues : {{ data.nbVue }}</h1>
        <h1>Ajouté : il y a {{ Math.round((new Date() - new Date(data.dateAjout)) / (1000 * 60 * 60 * 24)) }} jours</h1>


        
    </div>
    <div v-else>
        <p>Chargement...</p>
    </div> 

        
    

    
</template>

<style scoped>
h1{
    height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>