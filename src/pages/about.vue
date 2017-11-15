<template lang="html">
  <div class="about article">
    <b-container>
    <h1>About Page</h1>
    <br />
      <p> This is a boiler Template of VueJs to reduce time in setting up and more on actual coding</p>
      <p> together with: </p>
      <ul class='about-list'>
        <li v-for="item in dep"> {{ item }}</li>
      </ul>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dep : [
        'BootstrapVue',        
        'VueRouter',
        'Vuex',
        'Sass/Scss'
      ]
    }
  }
}
</script>

<style lang="css">
.about-list {
  width : 200px;
  margin: 0 auto;
}
</style>
