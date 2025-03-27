<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div class="container">
        <h2>Centre d'aide</h2>
        <div id="lien">
            <RouterLink to="/Info/Compte">Mon Compte</RouterLink>
            <RouterLink to="/Info/Vendre">Vendre</RouterLink>
            <RouterLink to="/Info/Paiement">Paiement et transfert</RouterLink>
            <RouterLink to="/Info/Envoi">Envoi et Retour</RouterLink>
            <RouterLink to="/Info/Recherche">Rechercher</RouterLink>
            <RouterLink to="/Info/Article">Articles</RouterLink>
            <RouterLink to="/Info/Cookies"></RouterLink>
            <RouterLink to="/Info/Users">Autre utilisateurs</RouterLink>
            <RouterLink to="/Info/Donnees">Données personnelles et sécurité</RouterLink>
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