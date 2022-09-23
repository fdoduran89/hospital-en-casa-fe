import { createRouter, createWebHistory } from 'vue-router'
import Registro from './views/Registro.vue'
import Login from './views/Login.vue'
//import Home from './views/Home.vue'
import Consultas from './views/Consultas.vue'
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
                    component: Consultas} ]
                  

const router = createRouter({
                            history: createWebHistory(),
                            routes
                            })
export default router
