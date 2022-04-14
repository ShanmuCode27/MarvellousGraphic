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
}

#nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  padding: 0 20px;
  font-family: 'Poppins', sans-serif;
}

#nav a.router-link-exact-active {
  color: #ffffff;
  background-color: #2c3e50
}

#nav #left{
  float: left;
  
}

#nav #right{
  float: right;
}

</style>
