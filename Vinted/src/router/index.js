/* Routes Vue */
import { createRouter, createWebHistory } from 'vue-router'

/* Import des views */
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: "/:catchAll(.*)",
      name: "Error404",
      component: ErrorView,
      meta: {
        requiresAuth: false
      }
    },
  ],
})

export default router
