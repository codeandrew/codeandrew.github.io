<template lang="html">
  <nav>
    <div id="menuToggle">
      
      <input type="checkbox"/>
  		<span></span>
  		<span></span>
  		<span></span>

      <ul id="menu">
        <router-link v-for="item in menu"
        tag='li' key='item.name' class="nav-link"
        :to="item.to">
          <a > {{ item.name }}</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return {
      menu : [
        { name : 'home', to : '/'},
        { name : 'about', to : '/about'},
        { name : 'example', to : '/example'}
      ]
    }
  }
}
</script>

<style lang="css">
nav{
    position:fixed;
}
a{
    text-decoration: none;
    /*font-family: 'Lato', sans-serif;*/
    color: #000000;
    transition: color 0.3s ease;
}
a:hover{
    color: #999999;
}
#menuToggle{
    display: block;
    position: relative;
    top: 50px;
    left: 50px;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
}
#menuToggle input{
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
}
#menuToggle span{
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #000000;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    opacity 0.55s ease;
}
#menuToggle span:first-child{
    transform-origin: 0% 0%;
}
#menuToggle span:nth-last-child(2){
    transform-origin: 0% 100%;
}
#menuToggle input:checked ~ span{
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #000000;
}
#menuToggle input:checked ~ span:nth-last-child(3){
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}
#menuToggle input:checked ~ span:nth-last-child(2){
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
}
#menu{
    position: absolute;
    width: 100vw;
    height:100vh;
    margin: -100px 0 0 -50px;
    padding: 50px;
    padding-top: 125px;
    background-color: #ffffff;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    transform-origin: 0% 0%;
    transform: translate(-100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}
#menu li{
    padding: 10px 0;
    font-size: 22px;
}
#menuToggle input:checked ~ ul{
    transform: scale(1.0, 1.0);
    opacity: 1;
}
</style>
