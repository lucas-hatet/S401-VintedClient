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
    <nav id="search-bar">
      <RouterLink id="homeLogo" to="/"><img src="./assets/images/Vinted_logo.png"></img></RouterLink>
      <Navbar />
      <div id="buttons">
        <Button class="white" content="S'inscrire | Se connecter" link="/Connexion" />
        <Button content="Vends tes articles" link="/Connexion" />
      </div>
      <RouterLink to="/info" id="info">?</RouterLink>
    </nav>
    <nav id="categorie-list">
      <ul>
        <RouterLink to="/" v-for="i in Array(5).map((_, i) => i + 1)">
          <li>Catégorie</li>
        </RouterLink>
      </ul>
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
    border-bottom: 1px solid var(--gray-thinborder);
    background-color: white;
  }
  
  nav > * {
    align-items: center;
    display: flex;
  }
  
  
  
  #search-bar > * {
    margin: 0 20px;
    height: 70%;
  }
  
  #homeLogo > img {
    height: 100%;
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


  
  #categorie-list > ul {
    height: 100%;
  }
  #categorie-list > ul > a {
    height: 100%;
    list-style-type: none;
  }
  #categorie-list > ul > a > li {
    background-color: var(--transparent);
    color: var(--gray-text);
    height: 100%;
    align-content: center;
    padding: 0 20px;
    border-bottom: 2px solid var(--transparent);
  }
  #categorie-list > ul > a > li:hover {
    background-color: var(--gray-bg);
    border-bottom: 2px solid var(--blue);
    color: black;
  }



</style>