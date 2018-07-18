<template lang="html">
  <main class="article projects">
    <div class="container">
      <h2> Page still in construction</h2>

      <!-- <img id="walker" :src="blackWalking_light"> -->
      <!-- <img id="walker" :src="blackWalking"> -->
      <img id="walker" :src="blackWheel">
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return {
      blackWalking_light : "https://media.giphy.com/media/eLOQ97wvI6bzG/giphy.gif",
      blackWalking : 'https://media.giphy.com/media/HecFZe3RGvHDq/giphy.gif',
      blackWheel : 'https://media.giphy.com/media/Xz5fPy9BGr3r2/giphy.gif'
    }
  },

  mounted(){
    // Get the walker image:
    var walker = document.getElementById('walker');
    var walkingLeft = true;
    var dist = 6;
    var leftBorder = 600;
    var rightBorder = 10;
    var position = rightBorder;

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
