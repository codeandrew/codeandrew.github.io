<template lang="html">
  <div class="skill-manager">
    <!-- <h2>Skill Manager</h2> -->

    <div class="wrapper">
      <div class="">
        <h2> Part <span>Dev</span></h2>
        <skill-list
          title="Programming Languages"
          :skill="programming_languages"
        />
        <skill-list
          title="Frameworks"
          :skill="frameworks"
        />
        <skill-list
          title="Database"
          :skill="database"
        />
      </div>
      <div class="">
         <h2> Part <span>Ops</span></h2>

        <skill-list
          title="Ops"
          :skill="devops"
        />

        <skill-list
          title="Infrastructure"
          :skill="infrastructure"
        />
        <skill-list
          title="CI/CD"
          :skill="automation"
        />
        <skill-list
          title="Monitoring"
          :skill="monitoring"
        />
        <skill-list
          title="Logging"
          :skill="logging"
        />

        <skill-list
          title="Cloud Platforms"
          :skill="cloud_platforms"
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
      'programming_languages', 'frameworks',  'database', 'devops', 'aws',
      'cloud_platforms', 'automation', 'monitoring', 'logging',
      'infrastructure'
    ])
  },
  mounted(){
    console.log(this.programming_languages)
  }
}
</script>

<style lang="css">
</style>
