// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

//======================
// Components
import header from './common/header'
import sideNav from './common/side-nav'
import footer from './common/footer'
import infoCol from './components/info-col'
import infoSection from './components/info-section'
import socialMedia from './components/social-media-list'

Vue.component('head-component', header )
Vue.component('side-nav', sideNav )
Vue.component('foot-component', footer )
Vue.component('info-col', infoCol )
Vue.component('infoSection', infoSection )
Vue.component('social-media-list', socialMedia)


//==================

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components:  { App }
})
