import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout'
import login from '@/view/login'
import home from '@/view/home'
import websocket from '@/view/websocket'
import websocket2 from '@/view/websocket/index2'

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
    },
    {
      path: '/websocket',
      name: 'websocket',
      component: websocket
    },
    {
      path: '/websocket2',
      name: 'websocket2',
      component: websocket2
    }
  ]
})
