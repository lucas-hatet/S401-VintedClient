<template>
    <div>
        <div>
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
    <div>
        <ul>
            <li>
                <h3>Quels sont les données collectées, et pourquoi ?</h3>
                <div>
                    <h4>Pour en savoir plus sur les cookies</h4>
                    <p>
                        Consultez notre page d' <RouterLink to="/InfoCookies">informations relatives aux cookies</RouterLink>
                    </p>
                    <h4>Pour en savoir plus sur la collecte et l'utilisation de vos données</h4>
                    <p>
                        Consultez notre page de <RouterLink to="/PolitiqueConfidentialite">politique de confidentialité</RouterLink>
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
</style>