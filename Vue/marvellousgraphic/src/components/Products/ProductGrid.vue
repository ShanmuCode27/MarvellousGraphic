<template>
  <div class = "container">
      <div class = "card" v-for = "card in cards" :key = "card.id" >
          <div class = "card-image">
              <!-- <img v-bind:src = "'../../assets/' + card.img" /> -->
              <!-- <img v-bind:src = "require('../../assets' + card.img)" /> -->
              <img :src = "require(`../../assets/${card.img}`)">
              <!-- <img :src = "changeImg" /> -->
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
                { id: 4, img: 'mg-logo.png', name : '10 x 12 Duro Frame', buttonTitle: 'Check Price'},
                { id: 5, img: 'logo.png', name : '10 x 12 Duro Frame', buttonTitle: 'Check Price'},
                { id: 5, img: 'logo.png', name : '10 x 12 Duro Frame', buttonTitle: 'Check Price'},
                 
            ],
            image : "'../../../public/images/' + card.img"


        }
    }
}
</script>

<style scoped>

.container{
    width: 100vw;
    display: grid;
    grid-template-columns: 21% 21% 21% 21%;
    grid-gap: 20px 30px;
    padding: 10px 50px;
    margin-top: 0px;
    margin-bottom: 100px;
}

.container .card{
    width: 300px;
    height: 300px;
    border: solid 0.5px #000;
    border-radius: 5px;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card .card-image{

}

.card .card-image img{
    width: 100%;
    height: 220px;
}

.card .card-title{
    font-style: normal;
    font-family: Poppins;
    font-size: 1rem;
}

.card .button{
    width: 100%;
    height: 40px;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 15px;
    border: solid 0.2px #000;

}   


.card .button button{
    width: 100%;
    height: 100%;
    background-color: #59D3BD;
    color: #fff;
    font-weight: bold;
    letter-spacing: 2px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 15px;
    border: none;
} 

.card .button button:hover{
    background-color: #000;
    transition: background-color  .5s ease-in-out;
    cursor: pointer;
}

</style>