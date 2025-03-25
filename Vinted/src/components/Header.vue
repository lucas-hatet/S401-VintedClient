<script setup>
import Navbar from '../components/Navbar.vue'
import Button from '../components/Button.vue'
import FilterCategorie from '../components/FilterCategorie.vue'

</script>

<template>
    <nav id="search-bar">
        <RouterLink id="homeLogo" to="/"><img src="../assets/images/Vinted_logo.png"></img></RouterLink>
        <Navbar />
        <div id="buttons">
            <Button class="white" content="S'inscrire | Se connecter" link="/Connexion" />
            <Button content="Vends tes articles" link="/Connexion" />
        </div>
        <RouterLink to="/info" id="info">?</RouterLink>
    </nav>
    <FilterCategorie></FilterCategorie>
</template>

<style scoped>
nav {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--gray-thinborder);
    background-color: white;
}

nav>* {
    align-items: center;
    display: flex;
}



#search-bar>* {
    margin: 0 20px;
    height: 70%;
}

#homeLogo>img {
    height: 100%;
}

#buttons > *:not(:last-child) {
    margin-right: 10px;
}

#info {
    justify-content: center;
    align-items: center;
    align-self: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid var(--gray-text);
    color: var(--gray-text);
    font-weight: bold;
    margin: 0;
}
</style>