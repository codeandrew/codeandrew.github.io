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
    const walker = document.getElementById('walker');
    const walkingLeft = true;
    const dist = 6;
    const leftBorder = 600;
    const rightBorder = 10;
    const position = rightBorder;

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
