import { createRouter, createWebHistory } from 'vue-router'
import Registro from './views/Registro.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
const routes = [  {
                    path: '/',
                    name: 'home',
                    component: Home
                  },
                  {
                    path: '/registro',
                    name: 'registro',
                    component: Registro},
                  {
                    path: '/login',                  
                    name: 'login',
                    component: Login
                  }]
const router = createRouter({
                            history: createWebHistory(),
                            routes
                            })
export default router
