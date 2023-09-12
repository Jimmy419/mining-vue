import { createRouter, createWebHistory } from 'vue-router'
import MinersView from '../views/MinersView.vue'
// import Mining from '../views/mining/Mining.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MinersView',
      component: MinersView
    },
    {
      path: '/asteroids',
      name: 'AsteroidsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AsteroidsView.vue')
    },
    {
      path: '/planets',
      name: 'PlanetsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PlanetsView.vue')
    }
  ]
})

export default router
