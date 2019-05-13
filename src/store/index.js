import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state : {
    programming_languages : ['JavaScript', 'Python', 'Kotlin', 'PHP'],
    frameworks : ['Django,', 'Spring Boot','ReactJS', 'VueJS', 'Nodejs', 'Laravel'],
    server : ['apache', 'nginx'],
    database : ['Sql', 'Mongo', 'Firebase'],
    devops: ['Linux Administration', 'Shell Scripting', 'Nginx',
    'Containerization (Docker)', 'Container Orchestration (Kubernetes)',
    'CI/CD (Gitlab Runner)' ],
    aws : ['ECR', 'EC2', 'S3 Bucket'],
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
