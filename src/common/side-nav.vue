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

  mounted() {
    const navMenu = document.querySelector('#menuToggle')

    window.onscroll = ( () => {
          if ( document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50){
            console.log(document.documentElement.scrollTop)
            navMenu.classList.add("hide")
          } else {
            navMenu.classList.remove("hide")
          }
    })

  },

  methods : {
    closeNav(){
      document.getElementById('NavMenu')
      .checked = false
    }
  }
}
</script>
<style lang="scss">
#menu {
  .social-media {
    ul {
      li {
        margin: 0;
        a {
          i {
            font-size : 1.5em !important;
          }
          &:hover {
            &::before {
              content : ""
            }
          }
        }
        .info {
          margin-top : 25px;
          font-size : 15px;
        }
      }
    }

  }
}
</style>
