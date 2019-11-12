import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import LoginPage from 'pages/LoginPage'
import Contact from 'pages/Contact'
import otherpg from 'pages/otherpg'
import otherpg2 from 'pages/otherpg2'

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
    path: '/loginpage',
    component: LoginPage
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/otherpg',
    component: otherpg
  },
  {
    path: '/otherpg2',
    component: otherpg2
  }
]

export default new Router({
  routes
})
