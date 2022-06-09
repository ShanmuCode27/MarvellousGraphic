<template>
  <div class = "container">
      <div class = "item1">1</div>
      <div  class = "item2">2</div>
      <div  class = "item3">3</div>
      <div  class = "item4">4</div>
      <div  class = "item5">5</div>

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
    grid-template-columns: 30% 40% 30%;
    grid-template-rows: max-content;
    grid-column-gap:0px;
    grid-row-gap:0px;
    justify-content:center;
    margin-bottom: 50px;
    margin: 0;
}

.container div{
    border: solid 2px #000;
}

.item1 {
    grid-column: 1 / span 2;
    grid-row: 1;
}
  
.item2 {
    grid-column: 3;
    grid-row: 1 / span 2;

}

.item3 {
    grid-column: 1;
    grid-row: 2;
}

.item4 {
    grid-column: 2;
    grid-row: 2;
}


.item5 {
    grid-column: 1;
    grid-row: 3;
}

</style>