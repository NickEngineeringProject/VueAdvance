import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/form',
    name: 'index',
    component: () => import('@/pages/UserSettingsForm/index')
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: () => import('@/pages/Tickets/index')
  },
  {
    path: '/flights',
    name: 'Flights',
    component: () => import('@/pages/Flights/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
