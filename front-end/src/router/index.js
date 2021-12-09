import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import films from '../views/films.vue'
import Agregar from "../views/Agregar.vue"
import Editar from "../views/Editar.vue"
import Detalle from "../views/Detalle.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/films',
    name: 'films',
    component: films
  },
  {
    path:"/Agregar",
    name:"Agregar",
    component:Agregar
  },
  {
    path:"/editar/:id",
    name:"Editar",
    component:Editar
  },
  {
    path:"/detalle/:id",
    name:"Detalle",
    component:Detalle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router