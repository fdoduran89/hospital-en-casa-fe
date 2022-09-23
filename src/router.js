import { createRouter, createWebHistory } from 'vue-router'
import Registro from './views/Registro.vue'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import consultas from './views/consultas.vue'
const routes = [  {
                    path: '/login',
                    name: 'login',
                    component: Login
                  },
                  {
                    path: '/registro',
                    name: 'registro',
                    component: Registro},
                  {
                    path: '/consultas',
                    name: 'consultas',
                    component: consultas} ]
                  

const router = createRouter({
                            history: createWebHistory(),
                            routes
                            })
export default router
