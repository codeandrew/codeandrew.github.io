<template lang="html">
  <div class="skill-list">
    <h4> {{ title }}</h4>
    <ul>
      <li v-for=" item in skill"> {{ item }} </li>
    </ul>
  </div>
</template>

<script>
export default {
  props : ['skill', 'title']

}
</script>

<style lang="css">
</style>
