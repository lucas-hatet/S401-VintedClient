<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="container">
        <h2>Centre d'aide</h2>
        <div id="lien">
            <RouterLink to="/InfoCompte">Mon Compte</RouterLink>
            <RouterLink to="/InfoVendre">Vendre</RouterLink>
            <RouterLink to="/InfoPaiement">Paiement et transfert</RouterLink>
            <RouterLink to="/InfoEnvoi">Envoi et Retour</RouterLink>
            <RouterLink to="/InfoRecherche">Rechercher</RouterLink>
            <RouterLink to="/InfoArticle">Articles</RouterLink>
            <RouterLink to="/InfoCookies"></RouterLink>
            <RouterLink to="/InfoUsers">Autre utilisateurs</RouterLink>
            <RouterLink to="/InfoDonnees">Données personnelles et sécurité</RouterLink>
        </div>
    </div>
</template>

<style scoped>

h2{
    text-decoration: underline;
}

a{
    margin: 10px;
    text-decoration: none;
    color: grey;
    display: flex;
    
}

.container{

    margin-top: 40px ;
    margin-bottom: 40px;
    font-size: 20px;
    
}
</style>