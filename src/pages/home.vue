<template lang="html">
  <main class="article home">
    <div class="wrapper">
      <h1>
          <span id="output"> </span><span class="blink">|</span>
       </h1>

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
        'Web Developer  '
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
                setTimeout(typeEffect, 700)
                }
          }, 120)
        }
      }, 40)
    }
    setTimeout(typeEffect, 1000 )
  }

}
</script>

<style lang="css">
</style>
