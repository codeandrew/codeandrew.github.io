<template lang="html">
  <main class="article not-found">
    <div class="container">
      <h1>Error 404</h1>
      <placeholder :subheader="subheader" />
      <h4>Let's get outta here </h4>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      subheader : 'Page not found'
    }
  }
}
</script>

<style lang="css">
.not-found {
  padding-top: 160px;
}
</style>
