<template>
    <div>
        <h2>Centre d'aide</h2>
        <div>
            <RouterLink to="/Info/InfoCompte">Mon Compte</RouterLink>
            <RouterLink to="/Info/InfoVendre">Vendre</RouterLink>
            <RouterLink to="/Info/InfoPaiement">Paiement et transfert</RouterLink>
            <RouterLink to="/Info/InfoEnvoi">Envoi et Retour</RouterLink>
            <RouterLink to="/Info/InfoRecherche">Rechercher</RouterLink>
            <RouterLink to="/Info/InfoArticle">Articles</RouterLink>
            <RouterLink to="/Info/InfoCookies"></RouterLink>
            <RouterLink to="/Info/InfoUsers">Autre utilisateurs</RouterLink>
            <RouterLink to="/Info/InfoDonnees">Données personnelles et sécurité</RouterLink>
        </div>
    </div>
    <div>
        <ul>
            <em>Aucune information n'est disponible pour l'instant</em>
        </ul>
    </div>
</template>

<style scoped>
a {
    margin: 10px;
    text-decoration: none;
    color: grey;
    display: flex;
}

h2{
    text-decoration: underline;
}
</style>