<template>
  <div id="app">
      <side-nav />
      <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
   @import './scss/main.scss';
</style>
