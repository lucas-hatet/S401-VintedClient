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
        <div>
            <ul>
                <li>
                    <h3>Comment mettre en vente ?</h3>
                    <div>
                        <em>Vous devez être connecté à votre compte (Voir <RouterLink to="/InfoCompte">Comment se connecter)</RouterLink> </em>
                        <h4>Vous souhaitez mettre en vente un article</h4>
                        <p>
                            Il faudra vous rendre sur la page de création d'article : après vous être connecté cliquez
                            sur "Vends tes articles" dans la barre en haut de votre écran.
                            <img src="../assets/images/aide_vente1.png" class="redim">
                            Remplissez ensuite le formulaire, en intégrant également des photos.
                            <img src="../assets/images/aide_vente2.png" class="redim">
                        </p>
                        <p>
                            Par défaut, l'article est mis comme "Brouillon" (Pas visible par les autres utilisateurs).
                            Il vous suffit de vous rendre sur la liste de vos articles à vendre (Bouton "Voir profil" en
                            haut de l'écran),
                            <img src="../assets/images/aide_vente3.png" class="redim">
                            puis de cliquer sur "Brouillon / En vente" et changer l'état.
                            <img src="../assets/images/aide_vente4.png" class="redim">
                        </p>
                    </div>
                    <div></div>
                </li>
                <li>
                    <h3>Comment passer mon article à l'état de "Brouillon" / "En vente" ?</h3>
                    <div>
                        <em>Vous devez être connecté à votre compte (Voir <RouterLink to="/InfoCompte">Comment se connecter)</RouterLink> </em>
                        <h4>Vous souhaitez cacher votre article, ou le montrer aux autres utilisateurs</h4>
                        <p>
                            Il vous suffit de vous rendre sur la liste de vos articles à vendre (Bouton "Voir profil" en
                            haut de l'écran),
                            <img src="../assets/images/aide_vente3.png" class="redim">
                            puis de cliquer sur "Brouillon / En vente" et changer l'état de l'article concerné.
                            <img src="../assets/images/aide_vente4.png" class="redim">
                        </p>
                    </div>
                    <div></div>
                </li>
                <li>
                    <h3>Comment modifier un article après signalement ?</h3>
                    <div>
                        <em>Vous devez être connecté à votre compte (Voir <RouterLink to="/InfoCompte">Comment se connecter)</RouterLink> </em>
                        <h4>Vous souhaitez modifier un article déjà en vente</h4>
                        <p>
                            Rendez-vous sur votre profil, dans la section "Articles signalés" :
                            <img src="../assets/images/aide_utilisateur7.png" class="redim">
                            <br>
                            ici vous trouverez la liste de vos articles retirés de la vente. Il vous suffit de cliquer
                            sur le bouton "Modifier la description" en-dessous de l'article concerné.
                            <img src="../assets/images/aide_vente6.png" class="redim">
                            <br>
                            Vous aurez alors à modifier les informations voulues dans le formulaire qui s'affiche.
                            Pour valider les modifications, cliquez sur "Mettre à jour".
                        </p>
                    </div>
                    <div></div>
                </li>
                <li>
                    <h3>Comment supprimer un article ?</h3>
                    <div>
                        <em>Vous devez être connecté à votre compte (Voir <RouterLink to="/InfoCompte">Comment se connecter)</RouterLink> </em>
                        <h4>Vous souhaitez supprimer définitivement un article</h4>
                        <p>
                            Il vous suffit de vous rendre sur la liste de vos articles à vendre (Bouton "Voir profil" en
                            haut de l'écran),
                            <img src="../assets/images/aide_vente3.png" class="redim">
                            puis de cliquer sur l'icône "Poubelle" de l'article concerné.
                            <img src="../assets/images/aide_vente5.png" class="redim">
                        </p>
                        <h4>Vous pouvez également cacher votre article temporairement</h4>
                        <p>
                            Il est également possible de retirer un article de la vente temporairement :
                            il vous suffit de vous rendre sur la liste de vos articles à vendre (Bouton "Voir profil" en
                            haut de l'écran),
                            <img src="../assets/images/aide_vente3.png" class="redim">
                            puis de cliquer sur "En vente", en-dessous de l'article concerné, et de mettre "Brouillon" à
                            la place.
                            <img src="../assets/images/aide_vente4.png" class="redim">
                        </p>
                    </div>
                    <div></div>
                </li>
            </ul>
        </div>
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