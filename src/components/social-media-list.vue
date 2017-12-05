<template lang="html">
  <div class="social-media">
    <ul>
      <li v-for="item in list" >
        <a :href="item.to" class="social-button" >
          <i :class="item.class" class="spin circle" aria-hidden="true"></i>
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
