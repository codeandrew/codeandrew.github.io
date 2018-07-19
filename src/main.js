// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueParticles from 'vue-particles'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import { store } from './store';

Vue.use(VueParticles)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

//======================
// Components
import header from './common/header'
import sideNav from './common/side-nav'
import footer from './common/footer'
import socialMedia from './components/social-media-list'
import skillList from './components/skill-list'
import skillManager from './components/skill-manager'
import placeholder from './components/placeholder'

Vue.component('head-component', header )
Vue.component('side-nav', sideNav )
Vue.component('foot-component', footer )
Vue.component('social-media-list', socialMedia)
Vue.component('skill-list', skillList )
Vue.component('skill-manager', skillManager )
Vue.component('placeholder', placeholder )

//==================

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components:  { App }
})
