<template>
  <div class = "container">
      <section class = "about-us">
          <div>
              <img src="../../assets/mg-logo.png" alt="logo">
              <p class = "print-dreams">-  Print your dreams  -</p>
          </div>
          <div>
              <h3>About Us</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit assumenda excepturi fugit veniam iure quod possimus. Explicabo ex voluptas, ipsa dignissimos illum corporis obcaecati iste.</p>
          </div>
      </section>

      <section class = "what-we-foc">
        <div>
            <img src="../../assets/about-cust.jpg" alt="logo">
        </div>
        <div>
            <h3>What We Focus On</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit assumenda excepturi fugit veniam iure quod possimus. Explicabo ex voluptas, ipsa dignissimos illum corporis obcaecati iste.</p>
        </div>
      </section>

    <section class = "what-we-prov">
        <div class ="text">
            <h3>What We Provide</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit assumenda excepturi fugit veniam iure quod possimus. Explicabo ex voluptas, ipsa dignissimos illum corporis obcaecati iste.</p>
        </div>
        <div class = "prods">
            <p>Some of our products</p>
            <div class="list">
                <div>
                    <ul>
                        <li>Duro Frames</li>
                        <li>Glass Frames</li>
                        <li>Normal Mugs</li>
                        <li>Magic Mugs</li>
                        <li>Inner Color Mugs</li>
                        <li>Double Color Mugs</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Tshirt Print</li>
                        <li>Invitation Cards</li>
                        <li>Visiting Cards</li>
                        <li>Albums</li>
                        <li>Customized Greeting Cards</li>
                        <li>Bag Print</li>
                    </ul> 
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container{
    
}

section{
    padding: 45px 0;
}

.about-us{
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.about-us div img{
    height: 150px;
    width: 300px;
}
.about-us div{
    padding: 0 40px;
    width: 40%;
}

.about-us div h3{
    font-family: 'Poppins',sans-serif;
    margin-top:-50px;
    font-size: 55px;
    padding: 40px 0;
}

.print-dreams{
    padding-top: 20px;
    font-size: 24px;
    font-family: 'Tangerine', cursive;
}

.what-we-foc{
    margin-top: 100px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
}

.what-we-foc div img{
    height: 400px;
    width: 600px;
    clip-path: circle(40%);
}

.what-we-foc div{
    padding: 0 40px;
    width: 40%;
}
.what-we-foc div h3{
    font-family: 'Poppins',sans-serif;
    margin-top:-50px;
    font-size: 35px;
    padding: 40px 0;
}

.what-we-prov{
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.what-we-prov .text{
    padding: 10px 100px;
}

.what-we-prov .text h3{
    font-family: 'Poppins',sans-serif;
    margin-top:-50px;
    font-size: 35px; 
    padding: 40px 0;
}

.prods {
    margin-top: 150px;
}

.prods p{
    font-family: 'Dosis',sans-serif;
    font-size: 25px;
    font-weight: 600;
    padding: 0 0 25px 0;
}

.list{
    display: flex;
    flex-direction: row;
    width: 70vw;
    justify-content: space-evenly;
    align-content: space-between;
}

.list div ul li{
    list-style-type: none;
    font-family: 'Jost', sans-serif;
    font-size: 20px;
    font-weight: 500;
}

</style>