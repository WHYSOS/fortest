import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout'
import login from '@/view/login'
import home from '@/view/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
