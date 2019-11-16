import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import LoginPage from 'pages/LoginPage'
import Contact from 'pages/Contact'
import specialtalents from 'pages/specialtalents'
import photocollection from 'pages/photocollection'
import dressin from 'pages/dressin'

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
    path: '/specialtalents',
    component: specialtalents
  },
  {
    path: '/photocollection',
    component: photocollection
  },
  {
    path: '/dressin',
    component: dressin
  }
]

export default new Router({
  routes
})
