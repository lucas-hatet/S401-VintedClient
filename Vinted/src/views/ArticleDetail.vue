<script setup>
    import { RouterLink } from 'vue-router';
    import Button from '../components/Button.vue'
    import { useArticleStore} from '../stores/articles.js'
    import Chargement from '../components/Chargement.vue'

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
        <div id="column-1" class="column">
            <div>la photo !</div>
        </div>

        <div id="column-2" class="column">
          <h4 id="nomarticle">{{ data.nomArticle }}</h4>
          <RouterLink>{{ data.marque.nomMarque }}</RouterLink>

          <bloc></bloc>
          <p>{{ data.prix.toFixed(2) }} €</p>
          
          <bloc></bloc>
          <border></border>
          <bloc></bloc>

          <div id="list-button">
            <Button class="big" :link="'.'" :content="'Acheter'"></Button>
            <Button class="big white" :link="'.'" :content="'Faire une offre'"></Button>
            <Button class="big white" :link="'.'" :content="'Message'"></Button>
          </div>

          <div id="caracteristique">
            <p>{{ data.description }}</p>
          </div>

          <div id="vendeur">
              <div id="photo"><img src="" alt=""></div>
              <div id="pseudo"><a href=""></a></div>
          </div>
          
        </div>
                
    </div>
    <div v-else>
        <Chargement/>
    </div> 

        
    

    
</template>

<style>

    body {
        background-color: var(--gray-bg);
    }

    #view > * {
        display: flex;
    }

</style>

<style scoped>

    :has(#column-1, #column-2) {
        margin-top: 50px;
        width: 80vw;
        gap: 5%;
    }

    #column-1 {
        width: 65%;
    }

    #column-2 {
        background-color: white;
        width: 30%;
        padding: 20px;
    }


    #list-button {
        width: 100%;
        justify-content: center;
    }

</style>