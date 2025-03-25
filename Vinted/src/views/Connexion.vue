<script setup lang="ts">
import Button from '@/components/Button.vue';

</script>

<template>
    <article>
        <h2>Se connecter</h2>
        <form method="post" action="{{}}">
            <div>
                <input type="text" name="mail" placeholder="Email" required />
            </div>
            <div>
                <input type="password" name="motdepasse" placeholder="Mot de passe" required/>
            </div>
            <Button class="big" content="Connexion" />
            <div>
                <p>Pas de compte ? <a href="/créerClient">Créer un compte</a></p>
                <p><a href="/info/compte">Besoin d'aide ?</a></p>
            </div>

            <p>
                <!-- Ligne erreurs -->
            </p>

        </form>
    </article>
</template>

<style scoped>
    article {
        margin-top: 50px;
        padding: 40px;
        width: fit-content;
        border: var(--gray-thinborder) 1px solid;
        border-radius: 10px;
    }

    form > *:not(:nth-last-child(1)), form > a > * {
        margin-top: 20px;
    }



    input {
        width: 100%;
        height: 40px;
        border: none;
        border-bottom: 1px var(--gray-border) solid;
        transition: ease-in-out 0.2s;
    }
    input:focus {
        outline: none;
        font-size: 1.05rem;
        border-bottom: 2px var(--blue) solid;
        transition: ease-in-out 0.2s;
    }

    form:nth-last-child(1) > * {
        text-align: center;
    }
</style>