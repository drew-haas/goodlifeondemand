import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        name: 'home',
        component: Home,
        props: { lightNav: true }
    },
    {
        path: '/work',
        name: 'work',
        props: { lightNav: false },
        component: () => import('./views/Work.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        props: { lightNav: false },
        component: () => import('./views/Contact.vue')
    }
  ]
})
