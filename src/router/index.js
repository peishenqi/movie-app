import Vue from 'vue'
import VueRouter from 'vue-router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Index from '../views/Index.vue'

Vue.use(VueRouter)
Vue.use(Vant);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children:[
      {
        path: '/',
        name: 'Movie',
        component: () => import( '../views/Movie.vue')
      },
      {
        path: '/cinema',
        name: 'Cinema',
        component: () => import( '../views/Cinema.vue')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import( '../views/User.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
