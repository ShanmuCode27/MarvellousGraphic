<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div id="nav">

    <div id="left">
      <router-link to="/">Home</router-link>
      <router-link to="/products" class = "prod-nav">Products
      <div class = "pro-dropdown">
        <ul>
          <li>Frames</li>
          <li><router-link to="/products/mugs">Mugs</router-link></li>
          <li>T-Shirts</li>
          <li>Gift Items</li>
          <li>Wedding Photography</li>
          <li>Business Cards</li>
          <li>Certificates</li>
          <li>Banners</li>
        </ul>
      </div>
      </router-link>
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

  <footer>
      <div class="footer-logo">
        <img src = "./assets/mg-logo.png"/>
        <div class="details">
          <p class="title">Marvellous Graphic Printing Solutions</p>
          <p>marvellousgraphic@gmail.com</p>
          <p>+94 11 770 32 04</p>
          <p>No 02, Muthuwella Mawatha,</p>
          <p>Colombo - 15</p>
        </div>
      </div>
      <div class="link">
            <div class="things">
              <a href="#">Products ></a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
        </div>
      </div>
      <div class="connect">
        <p>Connect With Us</p>
        <div class="social">
          <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
        </div>
        <div class="doneby">
          Designed and Developed by Mesitrio
        </div>
      </div>
  </footer>
</template>

<script>

import Home from './views/Home.vue'
import Products from './views/Products.vue'

export default {


  components: { Home, Products },

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
    z-index: 1;
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

.pro-dropdown{
  position: relative;
  width: 20px;
  padding: 10px 10px;
  top: 60px;
  margin-left: 90px;
  background-color: #F85C5C;
  border-style: solid;
  border-color: #fff;
  border-width: 0 0 1px 1px;
  border-radius: 5px;
  display:none;
}


.prod-nav:hover .pro-dropdown{
  position: absolute;
  display: block;
  width: 200px;
  transition: width 2s ease-in;
  /* currently not working transition */  
}

.pro-dropdown ul li{
  list-style-type:  none;
  text-align: left;
  padding: 5px 10px;
  color: #fff;
  font-weight: 550;
  
}

.pro-dropdown ul li a{
  list-style-type:  none;
  text-align: left !important;
  padding: 5px 10px !important;
  color: #fff !important;
  font-weight: 550 !important;
  background-color: #F85C5C !important;
  
}


.pro-dropdown ul li:hover{
  background-color: #22cbb4;
}

.pro-dropdown ul li a:hover{
  background-color: #22cbb4 !important;
}


footer{
  background-color: #38141A;
  display: flex;
  flex-direction: row;
  padding: 50px;
}

.footer-logo{
  padding: 20px;
}

.footer-logo img{
  width: 150px;
  left: 0;
  border-radius: 0 !important;
}

.link{
  padding-top: 100px;
  padding-left: 100px;
}


.footer-logo .details{
  display: flex;
  flex-direction: column;
  color: #ccc;
  font-weight: 500;
}

.footer-logo .details p{
  padding: 10px;
}

.footer-logo .details .title{
  font-family: 'Dosis';
  font-size: 20px;
}


.list{
  
}

.things{

}

 .things a{
  text-decoration: none;
  color: #fff;
  padding: 0 45px;
}

.connect{
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-left: 200px;
  color: #aaa;
}

.connect .social{
  display: flex;
  flex-direction: row;
  padding: 20px;
}

.connect .social a{
  width: 25px;
  padding: 20px;
}

.connect .social a i{
  font-size: 48px;
  color: #ccc;
}

.connect .doneby{
  margin-top: 120px;
}

</style>
