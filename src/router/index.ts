import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
