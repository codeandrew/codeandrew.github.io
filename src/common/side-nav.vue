<template lang="html">
  <nav>
    <div id="menuToggle">
      <input id="NavMenu" type="checkbox"/>
  		<span></span>
  		<span></span>
  		<span></span>

      <ul id="menu"  @click="closeNav">
        <router-link
          v-if="publicRoutes"
          v-for="item in publicRoutes"
          tag='li'
          key='item.name'
          class="nav-link"
          :to="item.path">
            <a  class="test"> {{ item.name }}</a>
        </router-link>
        <social-media-list />
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data(){
    return { }
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
