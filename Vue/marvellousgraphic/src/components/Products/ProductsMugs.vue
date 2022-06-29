<template>
  <div class = "container">
      <div class = "card" v-for = "card in cards" :key = "card.id" >
          <div class = "card-image">
              <img :src = "require(`../../assets/${card.img}`)"/>
             {{ card.id }}
             
          </div>
          <div class = "card-title">
              {{ card.name }}
          </div>
          <div class = "button">
              <button> {{card.buttonTitle}}</button>
          </div>
      </div>
      
  </div>
</template>

<script>


export default {



    data(){
        return{
            cards: [
                { id: 1, img: 'frame-intro.jpg', name : '6 x 8 Duro Frame', buttonTitle: 'Check Price'},
                { id: 2, img: 'home-intro.jpeg', name : '8 x 10 Duro Frame', buttonTitle: 'Check Price'},
                { id: 3, img: 'mg-logo.png', name : '8 x 12 Duro Frame', buttonTitle: 'Check Price'},
                { id: 4, img: 'mg-logo.png', name : '10 x 12 Duro Frame', buttonTitle: 'Check Price'}
            ],

        }
    }
}
</script>

<style scoped>

.container{
    margin-top: 500px;
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-gap: 20px 30px;
    padding: 10px 50px;
}

.container .card{
    width: 300px;
    height: 300px;
    border: solid 2px #000;
}

.card .card-image{
    /* background-image: url("../../assets/about-cust.jpg"); */
}

.card .card-image img{
    width: 100%;
    height: 100%;
}

.card .card-title{
    padding: 10px;
    font-style: italic;
}

.card .button button{
    padding: 10px;
    width: 100%;
    background-color: #59D3BD;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 15px;
}   

</style>