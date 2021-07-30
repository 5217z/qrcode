import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import QrCode from '../views/QrCode.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'QrCode',
    component: QrCode
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
