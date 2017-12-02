<template lang="html">
  <main class="example article">

    <div class="app">
      <div class="container">
        <h4 class="result"><span id="output"> </span><span class="blink">|</span></h4>
      </div>
    </div>

    <!-- <info-section /> -->

  </main>
</template>

<script>
export default {
  mounted(){
    const phrases = [
      'Hello World! ',
      'I\'m Jean Andrew Fuentes ',
      'and  ',
      'I\'m a ',
      'Web Developer  '
    ]

    let textHolder = []

    const output = document.querySelector('#output')
    let i = 0, counter = 0
    let value = phrases[counter].split('')

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
                counter >= phrases.length ?
                counter = 0 :
                counter++;
                console.log(phrases.length)
                console.log('counter: ' + counter )
                value = phrases[counter].split('')
                typeEffect()
                }
          }, 150)
        }
      }, 50)
    }
    typeEffect()
 }
}
</script>

<style lang="css">
</style>
