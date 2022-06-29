<template>
  <div class="container">
      <img src="../../assets/frame-intro.jpg" alt="frame background intro" id ="frame-background">
      <div class = "head-text">
          <span id = "frames">Frames</span>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.container{
    width: 100vw;
    height:60vh;
    overflow: hidden;
    position: relative;
    margin-top: -50px;
}

.container #frame-background{
    
    margin-top: -150px;
    height:180%;
    width:100%;
    background-size: contain;
    clip-path: polygon(0 100px ,100% 50px,100% 50%,-80% 80%,-100px 100%);
}

.container .head-text{
    position: absolute;
    background: rgba(255,255,255,0.5);
    margin-top: -600px;
    margin-left: 35%;
    padding: 30px;
}

#frames{
    font-family: 'Josefin Sans';
    font-weight: 600;
    font-size: 105px;
    color: #f7ff14;
    text-shadow: 1px 1px 20px #000;
}

</style>