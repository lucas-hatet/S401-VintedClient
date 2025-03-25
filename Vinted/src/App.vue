<script setup>
  // style
  import './assets/main.css'
  // components
  import { RouterLink, RouterView } from 'vue-router'

  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'


</script>

<template>
  <header>
    <Header></Header>
  </header>
  <div id="view">
    <RouterView />
  </div>
  <footer>
    <Footer></Footer>
  </footer>
</template>

<style scoped>

  #view {
    align-items: center;
    margin-top: 100px;
    width: 100%;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  header {
    top: 0%;
    position: fixed;
    width: 100%;
    z-index: 10;
  }

  footer {
    background-color: var(--gray-bg);
    margin-top: 50px;
    padding: 50px;
  }
  


</style>