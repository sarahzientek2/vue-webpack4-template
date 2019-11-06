import Vue from 'vue'
import Router from 'vue-router'

import Home from 'pages/Home'
import About from 'pages/About'
import Contact from 'pages/Contact'
import otherpg from 'pages/otherpg'
import otherpg2 from 'pages/otherpg2'
import otherpg3 from 'pages/otherpg3'

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
    path: '/otherpg',
    component: otherpg
  },
  {
    path: '/otherpg2',
    component: otherpg2
  },
  {
    path: '/otherpg3',
    component: otherpg3
  }
]

export default new Router({
  routes
})
