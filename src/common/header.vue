<template lang="html">
  <div class="nav-header">
    <b-container>
      <div class="navbrand">
        <h2>NavBrand </h2>
      </div>

      <div>
        <ul class="navbar-nav">
          <router-link v-for="item in menu"
          tag='li' key='item.name' class="nav-link"
          :to="item.to">
            <a > {{ item.name }}</a>
          </router-link>
        </ul>
      </div>
    </b-container>

  </div>
</template>

<script>
export default {
  data(){
    return {
      menu : [
        { name : 'home', to : '/'},
        { name : 'about', to : '/about'},
        { name : 'example', to : '/example'}
      ]
    }
  }
}
</script>

<style lang="css">
</style>
