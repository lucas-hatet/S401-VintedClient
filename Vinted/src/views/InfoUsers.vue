<template>
    <div>
        <h2>Centre d'aide</h2>
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
                <h3>Où trouver des informations sur le vendeurs ?</h3>
                <div>
                    <h4>Vous voulez trouver des informations sur le vendeur</h4>
                    <p>
                        En selectionnant un article vous avez la possibilité de consulter le vendeur : cliquer sur le
                        profil en-dessous
                        des caractéristiques de l'article.
                        <img src="../assets/images/aide_vente1.png" class="redim">
                        <br>Vous arriverez alors sur le profil du vendeur, où vous pourrez consulter :
                    <ul>
                        <li>Son lieu de résidence</li>
                        <li>Sa description</li>
                        <li>La durée depuis sa dernière connexion</li>
                    </ul>
                    <img src="../assets/images/aide_vente1.png" class="redim">
                    </p>
                </div>
            </li>
            <li>
                <h3>Comment voir les autres articles mis en vente par le vendeur ?</h3>
                <div>
                    <h4>Vous voulez voir le dressing du vendeur</h4>
                    <p>
                        Sur la page de profil du vendeur vous trouverez également tous ses autres articles mis en vente
                    </p>
                    <img src="../assets/images/aide_vente1.png" class="redim">
                </div>
            </li>
            <li>
                <h3>Comment voir les avis sur le vendeur ?</h3>
                <div>
                    <h4>Vous souhaitez consulter les avis sur le vendeur</h4>
                    <p>
                        Vous pouvez trouver les avis automatiques et ceux des précédents acheteurs en cliquant sur
                        "Évaluation", au-dessus du dressing du vendeur.
                        <img src="../assets/images/aide_vente1.png" class="redim">
                        <br>Il est possible de filtrer les avis automatiques et ceux des vrais acheteurs.
                        <img src="../assets/images/aide_vente1.png" class="redim">
                    </p>
                </div>
            </li>
            <li>
                <h3>Comment contacter le vendeur ?</h3>
                <div>
                    <h4>Vous souhaitez contacter le vendeur d'un article</h4>
                    <p>
                        Une fois sur un article, vous avez la possibilité de contacter le vendeur : cliquez sur
                        "Message" au-dessus du détail de l'article.
                        <img src="../assets/images/aide_vente1.png" class="redim">
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

.redim{
    max-width: 760px;
    max-height: 500px;
    padding-top: 50px;
    padding-bottom: 50px;
}
</style>