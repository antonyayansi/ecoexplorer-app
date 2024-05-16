import  { createRouter, createWebHistory } from 'vue-router'
import homeRouter from '../modules/home/router'

const routes = [
    {
      name: 'home',
      path: '/',
      ...homeRouter
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(){
    return { top: 0 }
  }
})

export default router
