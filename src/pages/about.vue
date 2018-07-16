<template lang="html">
  <div class="about article">
    <b-container>
    <div class="portrait">
      <div class="img-holder">
        <p class="text-clip">
          {{ text_clip  + about_me + about_the_web + text_clip }}
        </p>
      </div>
    </div>
    <div class="about-me">
      <h1 class="shimmer"> Jean Andrew Fuentes</h1>
      <h3 class="subtitle"> Full Stack Web Developer</h3>
      <br />

      <h4>About me</h4>
      <!-- <div v-html="about_me"></div> -->
      <p v-for="item in about_me">
        {{ item }}
      </p>
      <br />
      <h4>About this Website</h4>
      <p>{{ about_the_web }}</p>

      <br><br><br>
      <h4>Follow me  </h4>
      <social-media-list />
    </div>




    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text_clip : `
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `,

      par : `Por pura amplitud de extrañas características anatómicas, el camaleón tiene pocos rivales. Una lengua mucho más larga que su cuerpo, disparando para atrapar insectos en una fracción de segundo. Ojos de visión telescópica que giran independientemente en las torretas abovedadas. Pies con dedos de los pies fusionados en pinzas tipo mitones. Cuernos que brotan de la frente y el hocico. Adornos nasales nudosos. Una aleta de piel que rodea el cuello como una puntilla de encaje sobre un noble isabelino.`,

      about_me : [
        ` Hi! I'm a Full Stack Web Developer. I specialize in JavaScript in particular.
        I wasn't always been a programmer but ever since I was kid I love doing things
        on the computer. `,
        ` Well, still now I spend most of my time doing stuff in front of a computer, bashing command lines on
        the terminal, playing with the system of linux, studying new web technologies, software architectures and frameworks.
        I tend to to write and code for long hours, because I like the sound of my own fingers tapping keys.
        I'm consistently learning new things everyday about programming.
        I use Javascript for creating User Interface and handling client side logic, PHP for handling the backend,
        connecting to database and Python for creating automated scripts and tools.
         `
      ],
      about_the_web : ` This is a place where I record my thoughts and discoveries which are more or less related to programming and stuff that I like.
      This website was built with VueJs and runs on github pages. Right now, I'm still improving this site,
      but I'm still busy from all the  projects I've been receiving lately. So thank you for dropping by and understanding.
      `
    }
  }
}
</script>

<style lang="css">

</style>
