import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    programming_languages : ['JavaScript', 'PHP'],
    frameworks : ['ReactJS', 'VueJS', 'Nodejs', 'Laravel'],
    preprocessor : ['pug', 'scss', 'es6'],
    markup_languages : ['html5', 'css3'],

    webtools : ['npm','gulp', 'webpack','composer', 'artisan', 'git', 'cpanel', 'sequel pro' ],
    cms : ['wordpress'],
    apache : ['ampps', 'mamp', 'xampp'],
    database : ['sql'],
    os : [ 'Ubuntu Linux', 'OSX' ],
    ide : ['Atom', 'Sublime', 'Vim']
  },
  actions : {

  },
  mutations : {

  }

})
