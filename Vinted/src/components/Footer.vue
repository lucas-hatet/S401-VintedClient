<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <div id="columns">
        <div id="column-1">
            <h1>Vinted</h1>
            <p><RouterLink to="/About">À propos de nous</RouterLink></p>
            <p><RouterLink to="/">Carrière</RouterLink></p>
            <p><RouterLink to="/DeveloppementDurable">Agir pour l'environnement</RouterLink></p>
        </div>
        <div id="column-2">
            <h1>Découvrir</h1>
            <p><RouterLink to="/CommentMarche">Comment ça marche</RouterLink></p>
            <p><RouterLink to="/">Vérification de l'article</RouterLink></p>
            <p><RouterLink to="/VintedPro">Vinted Pro</RouterLink></p>
        </div>
        <div id="column-3">
            <h1>Aide</h1>
            <p><RouterLink to="/Info">Centre d'aide</RouterLink></p>
            <p><RouterLink to="/Info/InfoCompte">Mon compte</RouterLink></p>
            <p><RouterLink to="/Info/InfoVendre">Vendre</RouterLink></p>
            <p><RouterLink to="/Info/InfoPaiement">Paiements et transferts</RouterLink></p>
        </div>
    </div>
    <div id="politic">
        <p><RouterLink to="/PolitiqueConfidentialite">Politique de confidentialité</RouterLink></p>
        <p><RouterLink to="/">Informations relatives aux cookies</RouterLink></p>
    </div>

</template>

<style scoped>
    * {
        color: var(--gray-text);
    }

    #columns {
        display: flex;
        margin: 0 50px 0 50px;
        padding: 0 50px 0 50px;
        gap: 200px;
        padding-bottom: 30px;
        border-bottom: 1px solid var(--gray-border);
    }

    #columns > * {
        position: relative;
        bottom: 0;
        top: auto;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    #politic {
        padding: 30px 0 30px 0;
        width: 100%;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }

    a:-webkit-any-link {
        color: var(--gray-text);
    }

    a:-webkit-any-link:hover {
        text-decoration: underline;
    }
</style>