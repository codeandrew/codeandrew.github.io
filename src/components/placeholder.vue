<template lang="html">
  <div class="">
    <h2>{{ subheader }}</h2>
    <img id="walker" :src="blackWheel">
  </div>
</template>

<script>
export default {
  props: ['subheader'],
  data(){
    return {
      blackWalking_light : "https://media.giphy.com/media/eLOQ97wvI6bzG/giphy.gif",
      blackWalking : 'https://media.giphy.com/media/HecFZe3RGvHDq/giphy.gif',
      blackWheel : 'https://media.giphy.com/media/Xz5fPy9BGr3r2/giphy.gif'
    }
  },

  mounted(){
    // Get the walker image:
    const walker = document.getElementById('walker');
    let walkingLeft = true;
    let dist = 6;
    let leftBorder = 600;
    let rightBorder = 10;
    let position = rightBorder;

    function check(){
      position += walkingLeft ? dist : -dist;
      walker.style.left = position +'px';
      if (position > leftBorder || position < rightBorder){
        walkingLeft = !walkingLeft;
        walker.classList.toggle('flip')
      }
    }
    setInterval(check, 70)
  }
}
</script>

<style lang="css">
</style>
