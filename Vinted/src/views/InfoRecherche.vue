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
        <h2>Rechercher</h2>
        <ul>
            <li>
                <h3>Comment effectuer une recherche ?</h3>
                <div>
                    <h4>Vous souhaitez trouver un article spécifique</h4>
                    <p>
                        Vous pouvez de n'importe où lancer une recherche sur un article spécifique :
                        tapez dans la barre de recherche en haut de l'écran les mots clés de l'article que vous
                        cherchez.
                        <img src="../assets/images/aide_recherche1.png" class="redim">
                    </p>
                    <p>
                        Ex: T-shirt Levis
                    </p>
                    <h4>Vous souhaitez naviguer à travers un certain type d'article</h4>
                    <p>
                        Il est possible en cliquant sur les différentes catégories en-dessous de la barre de recherche
                        de naviguer à travers des articles spécifiques.
                        <img src="../assets/images/aide_recherche2.png" class="redim">
                    </p>
                </div>
            </li>
            <li>
                <h3>Comment filtrer sa recherche ?</h3>
                <div>
                    <h4>Vous souhaitez filtrer votre recherche</h4>
                    <p>
                        Vinted vous met à disposition différents moyens de filtrer votre recherche :
                    <ul>
                        <li>Taille (Longueur & largeur)</li>
                        <li>Matière</li>
                        <li>État</li>
                    </ul>
                    <ul>
                        Ils sont disponibles sur la page de recherche, au-dessus des résultats
                        <img src="../assets/images/aide_recherche3.png" class="redim">
                    </ul>
                    </p>
                </div>
            </li>
            <li>
                <h3>Comment trier les résultats ?</h3>
                <div>
                    <h4>Vous souhaitez trier votre recherche</h4>
                    <p>
                        Au-dessus des résultats vous trouverez un bouton "Trier Par", vous pourrez alors trier les
                        résultats par :
                    <ul>
                        <li>Prix (Croissant & Décroissant)</li>
                        <li>Date de publication</li>
                    </ul>
                    <img src="../assets/images/aide_recherche4.png" class="redim">
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

h2{
    text-decoration: underline;
}
</style>