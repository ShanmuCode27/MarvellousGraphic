<template>
  <div id="nav">

    <div id="left">
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
    </div>
    <div id="right">
    <router-link to="/about">About</router-link>
    <router-link to="/contactus">Contact Us</router-link>
    <router-link to="/requestquote" >Request Quote</router-link>
    </div>

  </div>
  <router-view/>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px 0 40px 0  ;
  background: #e74e12;
  width: 100vw;
  
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  padding: 20px 20px;
  font-family: 'Poppins', sans-serif;
  padding: 20px 20px 15px 20px;
  background: #e74e12;
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

</style>
