import { createRouter, createWebHistory } from 'vue-router'
import threeD from '../views/3D.vue'
import twoD from '../views/2D.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '2D',
      component: twoD
    },
    {
      path: '/3D',
      name: 'threeD',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/3D.vue')
    }
  ]
})

export default router
