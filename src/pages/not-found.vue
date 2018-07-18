<template lang="html">
  <main class="article not-found">
    <div class="container">
      <h1>Error 404</h1>
      <h2> Page not found </h2>
      <!-- <img id="walker" src="http://media.giphy.com/media/XGnWMiVXL87Xa/giphy.gif"> -->
      <img id="walker" src="https://media.giphy.com/media/Xz5fPy9BGr3r2/giphy.gif">
      <h4>Let's get outta here </h4>
    </div>
  </main>
</template>

<script>
export default {
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
.not-found {
  padding-top: 160px;
}
</style>
