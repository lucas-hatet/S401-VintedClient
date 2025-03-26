// import './assets/main.css' 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

import VueLazyload from 'vue-lazyload'

const app = createApp(App)

app.use(VueLazyload)
app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

app.mount('#app')
