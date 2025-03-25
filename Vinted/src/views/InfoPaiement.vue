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
    <h2>Des infos sur les paiements : </h2>

    <div>
        <h2>Paiements et transferts</h2>
        <ul>
            <li>
                <h3>Comment modifier / supprimer une carte ?</h3>
                <div>
                    @if(!(Auth::user()))
                        <em>Vous devez être connecté à votre compte (Voir <RouterLink to="/InfoCompte">Comment se connecter</RouterLink>) </em>
                    @endif
                    <h4>Vous souhaitez modifier une carte de débit enregistrée</h4>
                    <p>Sur votre profil (Bouton "Voir profil" en haut de l'écran),</p>
                         <img  src="../assets/images/aide_vente3.png" class="redim">
                    <p>tout en bas de la page vous trouverez la liste de vos cartes enregistrées pour vos paiements.</p>
                         <img  src="../assets/images/aide_cb1.png" class="redim">
                    <p>Pour modifier il suffit de cliquer sur "Modifier" en dessous de la carte concernée, puis de remplir le formulaire.</p>
                    <h4>Vous souhaitez supprimer une carte de débit enregistrée</h4>
                    <p>
                         Sur votre profil (Bouton "Voir profil" en haut de l'écran),
                         <img  src="../assets/images/aide_vente3.png" class="redim">
                         tout en bas de la page vous trouverez la liste de vos cartes enregistrées pour vos paiements.
                         <img  src="../assets/images/aide_cb1.png" class="redim">
                         Pour supprimer une carte de débit il suffit de cliquer sur "Supprimer" en dessous de la carte concernée.<br>
                         <img  src="../assets/images/aide_cb3.png" class="redim">
                    </p>
                    <p>
                        Pour avoir plus d'informations sur l'utilisation de vos données vous pouvez vous référer
                        à notre <RouterLink to="/PolitiqueConfidentialite">politique de confidentialité</RouterLink>.
                    </p>
                </div>
                <div></div>
            </li>
            <li>
                <h3>Comment acheter un article ?</h3>
                <div>
                    @if(!(Auth::user()))
                        <em>Vous devez être connecté à votre compte (Voir <RouterLink to="/InfoCompte">Comment se connecter</RouterLink>) </em>
                    @endif
                    <h4>Vous souhaitez acheter un article</h4>
                    <p>
                         Allez sur l'article qui vous intéresse et cliquez sur "Acheter". 
                         <img  src="../assets/images/aide_paiement1.png" class="redim">
                        <br>Remplissez le formulaire en renseignant :
                        <ul>
                            <li> Le mode de livraison (À domicile ou en point relais) </li>
                            <li> L'adresse </li>
                        </ul>
                        Puis cliquez sur "Passer au paiement"
                    </p>
                    <img  src="../assets/images/aide_paiement2.png" class="redim">
                    <p>
                        Sélectionnez ensuite le mode de paiement qui vous convient (Pour plus d'aide, voir "Comment régler avec votre porte-monnaie / par carte bancaire ?" ci-dessous)
                    </p>
                </div>
                <div></div>
            </li>
            <li>
                <h3>Comment régler avec votre porte-monnaie / par carte bancaire ?</h3>
                <div>
                    @if(!(Auth::user()))
                        <em>Vous devez être connecté à votre compte (Voir <RouterLink to="/InfoCompte">Comment se connecter</RouterLink>) </em>
                    @endif
                    <h4>Vous souhaitez payer par carte bancaire</h4>
                    <p>
                         <em>Cette méthode de paiement est momentanément indisponible.</em> Il n'est possible de payer des articles que par le porte-monnaie.
                    </p>
                    <h4>Vous souhaitez payer avec votre porte-monnaie</h4>
                    <p>
                         Il vous suffit de vous rendre sur l'article que vous souhaitez acheter, puis de cliquer sur "Acheter".
                         <img  src="../assets/images/aide_paiement1.png" class="redim">
                         Ensuite remplissez le formulaire puis cliquez sur "Passer au paiement". Arrivé là sélectionnez "Porte-monnaie virtuel"
                    </p>
                </div>
                <div></div>
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