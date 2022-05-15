<template>
  <div class = "home-intro">
      <img src="../../assets/home-intro.jpeg" alt="Home bg intro" id = "home-image">
      <div class = "home-text">
        <h3>Looking for Professional Design ?</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae voluptatibus harum tenetur reiciendis odio autem animi, sit quos illo quas.</p>
      </div>
      <button>Explore</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
*{
    overflow-x: hidden ;
}
.home-intro{
    margin-top: 0px;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden ;
    overflow: hidden;

}

.home-intro #home-image{
    width: 140vw;
    height:95vh;
    margin-left: -400px;
}

.home-intro .home-text{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    top:200px;
    left:400px;

}

.home-intro .home-text h3{
    font-size: 2rem;
    font-family: 'Josefin Sans', sans-serif;
    color: #000;
}

.home-intro .home-text p{
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: #000;
    width: 30%;
    padding-top: 50px; 
}

.home-intro button{
    position: absolute;
    top: 600px;
    left: 600px;
    width: 120px;
    height:40px;

    font-family: 'Jost', sans-serif;
    font-size: 20px;
    font-weight: 500;
    background-color:#CD4F84;
    color: #fff;
    border: 0;
    border-radius: 20px;
    
}


.home-intro button:hover{
    background: rgba(0,0,0,0.5);
    cursor: pointer;
}


</style>