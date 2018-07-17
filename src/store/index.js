import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    programming_languages : ['JavaScript', 'PHP', 'Python'],
    frameworks : ['ReactJS', 'VueJS', 'Nodejs', 'Laravel'],
    preprocessor : ['pug', 'scss', 'es6'],
    markup_languages : ['html5', 'css3'],
    webtools : ['npm','gulp', 'webpack','composer', 'artisan', 'git', 'cpanel', 'sequel pro' ],
    cms : ['wordpress'],
    apache : ['ampps', 'mamp', 'xampp'],
    database : ['sql', 'firebase'],
    os : [ 'Ubuntu Linux', 'OSX' ],
    ide : ['Atom', 'Sublime', 'Vim'],
    routes :  [ ...router.options.routes ]

  },
  actions : {

  },
  mutations : {

  },

  getters : {

    publicRoutes : state => {
      const list = state.routes.filter( x => x.meta )
      list.pop()
      return list
    }

  },

})
