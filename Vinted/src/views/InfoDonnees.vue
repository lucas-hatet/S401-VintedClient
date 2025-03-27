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
            <li>
                <h3>Quels sont les données collectées, et pourquoi ?</h3>
                <div>
                    <h4>Pour en savoir plus sur les cookies</h4>
                    <p>
                        Consultez notre page d' <RouterLink to="/Info/InfoCookies">informations relatives aux cookies</RouterLink>
                    </p>
                    <h4>Pour en savoir plus sur la collecte et l'utilisation de vos données</h4>
                    <p>
                        Consultez notre page de <RouterLink to="/Info/PolitiqueConfidentialite">politique de confidentialité</RouterLink>
                    </p>
                </div>
            </li>
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