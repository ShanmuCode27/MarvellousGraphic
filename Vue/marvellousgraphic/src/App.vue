<template>
  <div id="nav">

    <div id="left">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    </div>
    <div id = "rect-logo-bg">
      <div id="logo-nav"></div>
    </div>
    <div id="right">
    <router-link to="/about">About</router-link>
    <router-link to="/contactus">Contact Us</router-link>
    <router-link to="/requestquote" >Request Quote</router-link>
    </div>

  </div>
  <router-view/>
</template>

<script>

import Home from './views/Home.vue'

export default {


  components: { Home },

  data() {
    
  }

  
}

</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Inter:wght@300&family=Josefin+Sans:wght@300&family=Jost:wght@300&family=Poppins:wght@300;400&family=Square+Peg&family=Tangerine:wght@700&family=Tapestry&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin:0;
  padding: 0;
}

#nav {
  padding: 20px 0 40px 0  ;
  background: #EF0E32;
  width: 100%;  
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  padding: 20px 20px;
  font-family: 'Poppins', sans-serif;
  padding: 20px 20px 15px 20px;
  background: #EF0E32;
}

#nav a:hover{
  background: #efeded;
  color: #000;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  background-color: #22cbb4;
  border-left: solid 1px #000;
  border-right: solid 1px #000; 
}

#nav #left{
  float: left;
  
}

#nav #right{
  float: right;
}

#rect-logo-bg{
  position: absolute;
  width: 110px;
  height: 50px;
  background: rgba(255, 255, 255,0);
  top:0;
  padding: 1%;
  margin-left: 45%;
}

#rect-logo-bg::before{
  content: "";
   position: absolute;
   top:0;
   margin-left:-100%;
    height: 100px;
    width: 100px;
    border-width: 90px;
    border-style: solid;
    border-radius: 20px 50px;
    border-color: #EF0E32 transparent transparent ;
}



#logo-nav{
  position: relative;
  margin-top: 10px;
  margin-left: 0px;
  width: 100%;
  height: 100%;
  background-image: url("assets/mg-logo.png");
  background-size: cover;
  z-index: 1;
}

</style>
