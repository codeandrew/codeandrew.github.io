<template lang="html">
  <div class="example article">
    <h1>Example Page</h1>
    <b-container>
      <div class="example-slide">
        <div class="carousel">
           <div class="slides slide-example-1"> </div>
          <div class="slides slide-example-2"></div>
        </div>
      </div>
    </b-container>

    <info-section />

  </div>
</template>

<script>
export default {

  mounted(){
    var index = 0;
    var slides = document.querySelectorAll('.slides');
    carousel();

    function carousel(){
    	if (slides.length > 0){
    		var x = document.getElementsByClassName('slides');
    		for (var i = 0; i < x.length; i++){
    			x[i].style.display = "none";
    		}
    		index++;
    		if (index > x.length){index = 1}
    			x[index-1].style.display = "block";
    		setTimeout(carousel, 3000);
    	}
    }

  }
}
</script>

<style lang="css">
</style>
