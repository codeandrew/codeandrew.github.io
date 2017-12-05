<template lang="html">
  <div class="social-media">
    <ul>
      <!-- <router-link v-for="item in list"
      tag='li' key='item.name'
      :to="item.to">
        <a><i :class="item.class" aria-hidden="true"></i></a>
      </router-link> -->
      <li v-for="item in list">
        <a :href="item.to">
          <i :class="item.class" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list : [
        {
          to: 'https://codepen.io/andrewfuentes/' ,
          class : 'fa fa-codepen fa-3x'
        },
        {
          to: 'https://twitter.com/code_drew/' ,
          class : 'fa fa-twitter fa-3x'
        },
        {
          to: 'https://www.linkedin.com/in/jeanandrew/' ,
          class : 'fa fa-linkedin fa-3x'
        },
      ]
    }
  }
}
</script>

<style lang="css">
</style>
