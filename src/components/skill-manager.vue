<template lang="html">
  <div class="skill-manager">
    <!-- <h2>Skill Manager</h2> -->

    <div class="wrapper">
      <div class="">
        <skill-list
          title="Programming Languages"
          :skill="programming_languages"
        />
        <skill-list
          title="Frameworks"
          :skill="frameworks"
        />
        <skill-list
          title="Content Management System"
          :skill="cms"
        />
      </div>
      <div class="">
        <skill-list
          title="Markup Languages"
          :skill="markup_languages"
        />
        <skill-list
          title="Preprocessor"
          :skill="preprocessor"
        />
        <skill-list
          title="Database"
          :skill="database"
        />
        <skill-list
          title="IDE"
          :skill="ide"
        />
      </div>
      <div class="">
        <skill-list
          title="Webtools"
          :skill="webtools"
        />
        <skill-list
          title="Web Server"
          :skill="server"
        />
        <skill-list
          title="Operating System"
          :skill="os"
        />
      </div>
    </div>


  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'programming_languages', 'frameworks', 'markup_languages', 'preprocessor',
      'webtools', 'database', 'cms', 'server', 'os', 'ide'
    ])
  },
  mounted(){
    console.log(this.programming_languages)
  }
}
</script>

<style lang="css">
</style>
