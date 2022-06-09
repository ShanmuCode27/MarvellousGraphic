<template>
  <div class = "container">
      <div class = "card">1</div>
      <div class = "card">2</div>
      <div class = "card">3</div>
      <div class = "card">4</div>
      <div class = "card">5</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.container{
    margin-top: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px 30px;
    padding: 10px 50px;
}

.container div{
    border: solid 2px #000;
}

</style>