import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import About from '../pages/about'
import Skills from '../pages/skills'
import Projects from '../pages/projects'
import PageNotFound from '../pages/not-found.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name : 'home',
      component : Home
    },
    {
      path: '/about',
      name : 'about',
      component : About
    },
    {
      path: '/skills',
      name : 'skills',
      component : Skills
    },
    {
      path: '/projects',
      name : 'projects',
      component : Projects
    },
    {
      path : '*',
      name : 'page not found',
      component : PageNotFound
    },
    {
      path : '/docs',
      name : 'home',
      component : Home
    }
  ]
})
