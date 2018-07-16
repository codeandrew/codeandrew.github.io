<template lang="html">
  <main class="article skill-page">
    <h1>My Skills</h1>
    <div class="container">
      <!-- <p class="content"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p> -->
      <div class="content">
        <p >
          {{ phrase }}
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
        `Here are the list of stuff that I've played, dabbled and cried during my journey in Programming.
        In the Front End, I use Javascript in building User Interface and client side logic
        In the Back End, I use PHP in handling server side logic
        And Python for creating script to automate testings of APIs and other more.`

    }
  }
}
</script>

<style lang="css">
</style>
