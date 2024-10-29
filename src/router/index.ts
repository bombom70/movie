import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name: 'popular', component: () => import('../pages/Popular.vue') },
  { path: '/search', name: 'search', component: () => import('../pages/SearchPage.vue') },
  { path: '/login', name: 'login', component: () => import('../pages/Login.vue') },
  { path: '/registration', name: 'registration', component: () => import('../pages/Registration.vue') },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})