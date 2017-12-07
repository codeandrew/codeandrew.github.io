<template lang="html">
  <div class="skill-manager">
    <h2>Skill Manager</h2>

    <skill-list
    title="Programming Languages"
    :skill="programming_language"
    />
  </div>
</template>

<script>
export default {
  data(){
    return {
      programming_language : ['JavaScript', 'PHP']
    }
  }
}
</script>

<style lang="css">
</style>
