<script setup>
  // style
  import './assets/main.css'
  // components
  import { RouterLink, RouterView } from 'vue-router'
  import Navbar from './components/Navbar.vue'
  import Button from './components/Button.vue'

</script>

<template>
  <header>
    <nav>
      <RouterLink id="homeLogo" to="/"><img src="./assets/images/Vinted_logo.png"></img></RouterLink>
      <Navbar />
      <div id="buttons">
        <Button class="white" content="S'inscrire | Se connecter" link="/Connexion" />
        <Button content="Vends tes articles" link="/Connexion" />
      </div>
    </nav>
  </header>
  <div id="view">
    <RouterView />
  </div>
  <footer>

  </footer>
</template>

<style scoped>

  nav {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;
  }

  nav > * {
      margin: 0 20px;
      align-items: center;
      display: flex;
      height: 70%;
  }

  #homeLogo > img {
    height: 100%;
  }



</style>