<template lang="html">
  <main class="article projects">
    <div class="container">
      <h2> Page still in construction</h2>

      <img id="walker" src="http://media.giphy.com/media/XGnWMiVXL87Xa/giphy.gif">
    </div>
  </main>
</template>

<script>
export default {
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
      walker.style.right = position +'px';
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
