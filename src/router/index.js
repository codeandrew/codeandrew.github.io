import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import About from '../pages/about'
import Skills from '../pages/skills'
import Experience from '../pages/experience'
import Projects from '../pages/projects'
import PageNotFound from '../pages/not-found.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name : 'home',
      component : Home,
      meta : {
        requiresAuth: false,
        title : "codeandrew.github.io",
        metaTags: [
          {
            name: 'Home',
            content: 'Jean Andrew Fuentes FullStack Web Developer'
          }
        ]
      }
    },
    {
      path: '/about',
      name : 'about',
      component : About,
      meta : {
        requiresAuth: false,
        title : "About Me",
        metaTags: [
          {
            name: 'about',
            content: 'Jean Andrew Fuentes FullStack Web Developer'
          }
        ]
      }
    },
    {
      path: '/skills',
      name : 'skills',
      component : Skills,
      meta : {
        requiresAuth: false,
        title : "My Skill",
        metaTags: [
          {
            name: 'skills',
            content: 'My Skills'
          }
        ]
      }

    },
    {
      path: '/experience',
      name : 'experience',
      component : Experience,
      meta : {
        requiresAuth: false,
        title : "My Experiences",
        metaTags: [
          {
            name: 'experience',
            content: 'My Experience'
          }
        ]
      }

    },
    {
      path: '/projects',
      name : 'projects',
      component : Projects,
      meta : {
        requiresAuth: false,
        title : "Projects",
        metaTags: [
          {
            name: 'Projects',
            content: 'codeandrew projects'
          }
        ]
      }
    },
    {
      path : '*',
      name : 'page not found',
      component : PageNotFound
    },
    {
      path : '/docs',
      name : 'home',
      component : Home,
      meta : {
        requiresAuth: false,
        title : "Codeandrew.github.io",
        metaTags: [
          {
            name: 'Home',
            content: 'Jean Andrew Fuentes FullStack Web Developer'
          }
        ]
      }
    }
  ]
})
