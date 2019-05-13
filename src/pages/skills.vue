<template lang="html">
  <main class="article skill-page">
    <h1 class="heading">My Skills</h1>
    <div class="container">
      <!-- <p class="content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p> -->
      <div class="content">
        <p >
          {{ phrase }}
          <br>
          <br>
          {{ knowledge }}
          {{ experience }}
        </p>

      </div>

    <skill-manager />
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
