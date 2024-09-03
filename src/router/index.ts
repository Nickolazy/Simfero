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
      component: () => import('@/components/Categories/CategoriesAll.vue'),
    },
    {
      path: '/categories/:categoryPath',
      name: 'category-page',
      component: () => import('@/components/Categories/CategoryPage.vue'),
      props: route => ({
        categoryPath: route.params.categoryPath,
        categoryName: route.query.categoryName
      })
    },
    {
      path: '/sales',
      name: 'sales',
      component: () => import('@/components/Sales/SalesAll.vue')
    },
    {
      path: '/businessLunch',
      name: 'businessLunch',
      component: () => import('@/components/BusinessLunch/BusinessLunchAll.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/components/Search.vue')
    },
    {
      path: '/store',
      name: 'store',
      component: () => import('@/components/Store/Store.vue')
    }
  ]
})

export default router
