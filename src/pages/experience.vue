<template lang="html">
  <main class="article experience-page">
    <h1 class="heading">Experience</h1>

    <div class="content">
      <div class="experience-block" v-for="exp in experiences">
        <h3> {{ exp.company }} </h3>
        <p> {{ exp.role }} <br />
          {{ exp.date }} </p>
        <p> {{ exp.description }} </p>
        <ul> Responsibilities:
          <li v-for="item in exp.responsibilities"> {{ item }} </li>
        </ul>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  data(){
    return {
     experiences : [
       {
        company : "WhiteCloak Technology",
        role: "Software Engineer",
        date: "Aug 2017 – Oct 2019",
        description : `Experienced in creating banking applications, social media platform and mall enterprise softwares.
                        Has great knowledge in Full Software Life Cycle Development.
                        From designing micro-services architecture, version control, development to deployment in different environments`,
        responsibilities : [
          'Front End Development',
          'Back End Development',
          'DevOps'
        ]
       }
     ]
    }
  }
}
</script>

<style lang="css">
</style>
