<template lang="html">
  <main class="article experience-page">
    <h1 class="heading">Experience</h1>

    <div class="container">
      <div class="content">
        <p >
          {{ phrase }}
          <br>
          <br>
          {{ knowledge }}
          {{ experience }}
        </p>

      </div>
    </div>

  </main>
</template>

<script>
export default {
  data(){
    return {
      phrase :
        `Skilled in Backend development, systems development, operations and security.
         Strong interest in Linux, cloud computing, containerization, orchestration,
          microservices, and open source platform.`,
     experience : `Experienced in creating Banking Applications, E-commerce and Social Media
                Platforms. `,
     knowledge: `Has great knowledge in Full Software Life Cycle Development.
     From Designing Micro-services Architecture, Version Control, Development to Deployment in different environments.`

    }
  }
}
</script>

<style lang="css">
</style>
