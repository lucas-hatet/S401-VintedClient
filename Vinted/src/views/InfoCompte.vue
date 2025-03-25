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
                <h3>Comment se connecter ?</h3>
                <div>
                    <h4>Pour vous connecter à votre compte utilisateur</h4>
                    <p>
                        Vous trouverez dans la barre en haut de votre écran un bouton "S'inscrire | Se connecter" :
                        <img src="../assets/images/aide_connexion1.jpeg" class="redim"></img>
                        en cliquant dessus vous serez redirigé vers une page de connexion.
                        Il vous faudra alors rentrer l'adresse mail et le mot de passe que vous aviez renseignés durant
                        votre inscription.
                    </p>
                    <p>
                        Ex.
                    <ul>
                        <li>Adresse mail : dupont.marie@mail.com</li>
                        <li>Mot de passe : DupontM_2835</li>
                    </ul>
                    <img src="../assets/images/aide_connexion2.png" class="redim"></img>
                    </p>
                    <h4>Si vous n'avez pas de compte</h4>
                    <p>
                        Cliquez sur "Créer un compte" juste en-dessous du bouton "Connexion" (Voir la section "Comment
                        s'inscrire ?" juste en-dessous pour plus de détail)
                    </p>
                </div>
                <div></div>
            </li>
            <li>
                <h3>Comment s'inscrire ?</h3>
                <div>
                    <h4>Si vous ne possédez pas encore de compte</h4>
                    <p>
                        Il vous suffit de vous rendre sur la page de connexion en cliquant sur le bouton "Se connecter |
                        S'inscrire", puis de cliquer sur "Créer un compte".
                        <img src="../assets/images/aide_connexion1.jpeg" class="redim"></img>
                        <img src="../assets/images/aide_connexion3.jpeg" class="redim"></img>
                        Il vous faudra ensuite remplir le formulaire : les champs annotés d'un astérisque sont
                        obligatoires.
                    </p>
                    <p>
                        Enfin vous devrez valider l'adresse mail renseignée : rendez-vous sur votre boîte mail et
                        récupérez le code qui vous aura été envoyé.
                        Après avoir validé la création du compte il faudra vous connecter (Voir "Comment se connecter ?"
                        pour plus d'information").
                    </p>
                    <p>
                        Pour avoir plus d'informations sur l'utilisation de vos données vous pouvez vous référer
                        à notre <RouterLink to="/PolitiqueConfidentialite">politique de confidentialité</RouterLink>.
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