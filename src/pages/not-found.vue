<template lang="html">
  <main class="article not-found">
    <div class="container">
      <h1>Error 404</h1>
      <h2> Page not found </h2>

      <img id="walker" src="http://media.giphy.com/media/XGnWMiVXL87Xa/giphy.gif">
      <h4>Let's get outta here </h4>
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
.not-found {
  padding-top: 160px;
}
</style>
