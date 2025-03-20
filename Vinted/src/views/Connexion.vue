<template>
    <article>
    <h2>Se connecter</h2>
    <form method="post" action="{{}}">
        <div>
        <input class="filltext" type="text" name="mail" placeholder="Email"/>
        </div>
        <div>
        <input class="filltext" type="password" name="motdepasse" placeholder="Mot de passe"/>
        </div>
        <input id="sendbutton" type="submit" value="Connexion"/>
        <p>
        <!-- Ligne erreurs -->
        </p>

        <p>Pas de compte ? <a href="/créerClient/">Créer un compte</a></p>
        <p><a href="/info/compte">Besoin d'aide ?</a></p>
        
    </form>
</article>
</template>

<style scoped>

article {

    padding: 40px;
    width: 15vw;
    border: rgb(240, 240, 240) 1px solid;
    border-radius: 10px;

}

input{
    margin: 10px 0 10px 0;
    width: 90%;
    height: 40px;
}

.filltext{
    border: 0px;
    border-bottom: 1px gray solid;
}

#sendbutton{
    color: white;
    font-size: 1em;
    background-color: rgb(0, 119, 130);
    border: 0px;
    border-radius: 10px;
}
</style>