import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import Login from 'pages/Login'
import About from 'pages/About'
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
    path: '/login',
    component: Login
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
