import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import FavoritesPage from '../views/FavoritesPage'
import WatchPage from '../views/WatchPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites/:userid',
    name: 'FavoritesPage',
    component: FavoritesPage
  },
  {
    path:'/watch',
    name:'WatchPage',
    component: WatchPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
