<script setup>
import Button from '@/components/Button.vue';

</script>


<script>
// import { accountService } from '@/_services'
export default {
    name: 'Login',
    data(){
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            accountService.login(this.user)
                .then(res => {
                    accountService.saveToken(res.data.access_token)
                    this.$router.push('/admin/dashboard')
                })
                .catch(err => console.log(err))

            // fetch('http://localhost:8888/auth/login', {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     method: 'POST',
            //     body: JSON.stringify(this.user)
            // })
            //     .then(blob => blob.json())
            //     .then(data => {
            //         console.log(data)
            //         localStorage.setItem('token', data.access_token)
            //         this.$router.push('/admin/dashboard')
            //     })
            //     .catch(err => console.log(err))
        }
    }
}
</script>


<template>
    <article>
        <h2>Se connecter</h2>
        <form @submit.prevent="login">
            <div>
                <input type="text" name="mail" placeholder="Email" spellcheck="false" required v-model="user.email"/>
            </div>
            <div>
                <input type="password" name="motdepasse" placeholder="Mot de passe" spellcheck="false" required v-model="user.password"/>
            </div>
            <Button class="big" content="Connexion" type="submit" noRouter=true />
            <div>
                <p>Pas de compte ? <a href="/CreerClient">Créer un compte</a></p>
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
        border-bottom-color: var(--blue);
        transition: ease-in-out 0.2s;
    }

    form:nth-last-child(1) > * {
        text-align: center;
    }
</style>