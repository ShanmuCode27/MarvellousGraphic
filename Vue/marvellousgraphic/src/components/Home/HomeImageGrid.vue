<template>
  <div class = "container">
      <div class = "item1">1</div>
      <div  class = "item2">2</div>
      <div  class = "item3">3</div>
      <div  class = "item4">4</div>
      <div  class = "item5">5</div>
      <div  class = "item6">6</div>
      <div  class = "item7">7</div>
      <div  class = "item8">8</div>
      <div  class = "item9">9</div>
      <div  class = "item10">10</div>
      <div  class = "item11">11</div>
  </div>

</template>

<script>    
export default {

}
</script>

<style scoped>

.container{
    width: 100vw;
    display: grid;
    grid-template-columns: 30% 20% 30% 20%;
    grid-template-rows: 300px 300px 300px 300px;
    grid-column-gap:0px;
    grid-row-gap:0px;
    justify-content:center;
    margin-bottom: 100px;
}

.container div{
    border: solid 0px #000;
}

.item1 {
    grid-column: 1;
    grid-row: 1 / 5;
    background-image: url('../../assets/homegrid/0.jpg');
    background-size: cover;
}
  
.item2 {
    grid-column: 2;
    grid-row: 1 / 3;



    background-image: url('../../assets/homegrid/5.jpg');
    background-size: cover;

}

.item3 {
    grid-column: 3;
    grid-row: 1;

    
    background-image: url('../../assets/homegrid/3.jpg');
    background-size: cover;

}
   

.item4 {
    grid-column: 2;
    grid-row: 3 / 5;

    background-image: url('../../assets/homegrid/2.jpg');
    background-size: cover;
}
    



.item5 {
    grid-column: 3;
    grid-row: 4 / 5;

    background-image: url('../../assets/homegrid/1.jpg');
    background-size: cover;

}

.item6 {
    grid-column: 4;
    grid-row: 1;

    background-image: url('../../assets/homegrid/6.jpg');
    background-size: cover;
}


.item7 {
    grid-column: 4;
    grid-row: 3 / 4;

    background-image: url('../../assets/homegrid/7.jpg');
    background-size: cover;
}

.item8 {
    grid-column: 3;
    grid-row: 2 / 4;

    background-image: url('../../assets/homegrid/4.jpg');
    background-size: cover;
}

.item9 {
    grid-column: 4;
    grid-row: 2 / 3;

    background-image: url('../../assets/homegrid/8.jpg');
    background-size: cover;
}


.item10 {
    grid-column: 4;
    grid-row: 4 / 5;

    background-image: url('../../assets/homegrid/9.jpg');
    background-size: cover;
}

.item11 {
    grid-column: 4;
    grid-row: 4;

    background-image: url('../../assets/homegrid/10.jpg');
    background-size: cover;
}

</style>