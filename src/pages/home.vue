<template lang="html">
  <main class="home-page">
    <vue-particles
    color="#000"
    :particleOpacity="0.4"
    :particlesNumber="100"
    shapeType="circle"
    :particleSize="2"
    linesColor="#fff"
    :linesWidth="1"
    :lineLinked="true"
    :lineOpacity="0.2"
    :linesDistance="150"
    :moveSpeed="3"
    :hoverEffect="true"
    hoverMode="grab"
    :clickEffect="true"
    clickMode="push"
    >
  </vue-particles>
    <div class="article home-banner">
      <div class="wrapper">
        <h1>
          <span id="output"> </span><span class="blink">|</span>
        </h1>
        <social-media-list />
      </div>
    </div>

  </main>
</template>

<script>
export default {
  data(){
    return {
      phrases : [
        'Hello World! ',
        'I\'m Jean Andrew Fuentes ',
        'Software Developer  ',
        'DevOps  '
      ]
    }
  },
  mounted(){
    let textHolder = []

    const output = document.querySelector('#output')
    let i = 0, counter = 0
    let value = this.phrases[counter].split('')
    const typeEffect = () => {
      const typeWriterInterval = setInterval(() => {
        textHolder.push(value[i])
        output.innerHTML = textHolder.join('')
        i++

        if(i >= value.length) {
          clearInterval(typeWriterInterval)
          setTimeout(()=> {
            const erase = setInterval(() => {
              textHolder.pop()
              output.innerHTML = textHolder.join('')
              if (textHolder.length == 0){
                clearInterval(erase)
                i = 0
                if ( (counter + 1) >= this.phrases.length ){
                  counter = 0
                } else {
                  counter++
                }
                value = this.phrases[counter].split('')
                setTimeout(typeEffect, 1000)
              }
            }, 40)
          }, 1200)
        }

      }, 40)
    }
    setTimeout(typeEffect, 1000 )
  }

}
</script>

<style lang="css">
</style>
