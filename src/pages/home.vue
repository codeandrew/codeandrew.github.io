<template lang="html">
  <main class="article home">
    <div class="wrapper">
      <h1 v-for="item in phrases"> {{ item }} </h1>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      phrases : [
        'Hello World',
        'I\'m Jean Andrew Fuentes ',
        'Web Developer'
      ]
    }
  },
  mounted(){

  }

}
</script>

<style lang="css">
</style>
