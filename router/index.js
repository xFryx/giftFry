import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        name: 'login.vue',
        component: () => import(/* webpackChunkName: "login" */ '../src/views/login.vue')
    },
    {
      path: '/home',
      name: 'home.vue',
      component: () => import(/* webpackChunkName: "login" */ '../src/views/home.vue'),
    },    
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router