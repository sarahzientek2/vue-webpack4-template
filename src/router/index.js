import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import Menu from 'pages/Menu'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/menu',
    component: Menu
  }
]

export default new Router({
  routes
})
