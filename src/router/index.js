import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import LoginPage from 'pages/LoginPage'
import Contact from 'pages/Contact'
import otherpg from 'pages/otherpg'
import photocollection from 'pages/photocollection'

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
    path: '/photocollection',
    component: photocollection
  }
]

export default new Router({
  routes
})
