<template lang="html">
  <div class="about article">
    <b-container>
    <div class="portrait">
      <div class="img-holder">
        <p class="text-clip">
          {{ text_clip }}
        </p>
      </div>

    </div>
    <div class="about-me">
      <h2> Jean Andrew Fuentes</h2>
      <h3> Web Developer</h3>
      <br />

      <h4>About me</h4>
      <p>{{ about_me }}</p>
      <br />
      <h4>About this Website</h4>
      <p>{{ about_the_web }}</p>
    </div>

    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {

      par : `Por pura amplitud de extrañas características anatómicas, el camaleón tiene pocos rivales. Una lengua mucho más larga que su cuerpo, disparando para atrapar insectos en una fracción de segundo. Ojos de visión telescópica que giran independientemente en las torretas abovedadas. Pies con dedos de los pies fusionados en pinzas tipo mitones. Cuernos que brotan de la frente y el hocico. Adornos nasales nudosos. Una aleta de piel que rodea el cuello como una puntilla de encaje sobre un noble isabelino.`,

      about_me : `
      Hi! I'm a Full Stack Web Developer. I specialize in JavaScript in particular.
      I wasn't always been a programmer but ever since I was kid I love doing things
      on the computer. \n

      Well, still now I spend most of my time doing stuff in front of a computer, bashing command lines on
      the terminal, playing on linux, studying new web technologies and frameworks.
      I tend to to write and code for long hours, because I like the sound of my own fingers tapping keys.
      But most of all I'm on a path to master JavaScript. I'm consistently learning new things everyday about programming.
      `,

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
