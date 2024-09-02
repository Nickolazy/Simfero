import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/components/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/categories',
      name: 'categories',
      component: () => import('@/components/Categories/CategoriesAll.vue')
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('@/components/Sales/Sales.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/components/Search.vue')
    }
  ]
})

export default router
