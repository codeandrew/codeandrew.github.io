<template lang="html">
  <nav>
    <div id="menuToggle">
      <input id="NavMenu" type="checkbox"/>
  		<span></span>
  		<span></span>
  		<span></span>

      <ul id="menu"  @click="closeNav">
        <router-link v-for="item in menu"
        tag='li' key='item.name' class="nav-link"
        :to="item.to">
          <a  class="test"> {{ item.name }}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data(){
    return {
      menu : [
        { name : 'home', to : '/'},
        { name : 'about', to : '/about'},
        { name : 'skills', to : '/skills'},
        { name : 'projects', to : '/projects'},
      ]
    }
  },

  computed : {
    ...mapState([
      'routes'
    ]),

    ...mapGetters([
      'publicRoutes'
    ])
  },
  methods : {
    closeNav(){
      document.getElementById('NavMenu')
      .checked = false
    }
  }
}
</script>
<style lang="css">
</style>
