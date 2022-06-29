<template>
  <div class="container">
    <div class="card" v-for="card in cards" :key="card.id">
      <div class="card-image">
        <img :src="require(`../../../assets/products/mugs/${card.img}`)" />
      </div>
      <div class="card-title">
        {{ card.name }}
      </div>
      <div class="button">
        <button>{{ card.buttonTitle }}</button>
      </div>
    </div>
  </div>


</template>

<script>

export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          img: "normal-mug.jpg",
          name: "Normal Mug",
          buttonTitle: "Check Price",
        },
        {
          id: 2,
          img: "magic-mug.jpg",
          name: "Magic Mug",
          buttonTitle: "Check Price",
        },
        {
          id: 3,
          img: "inner-mug.jpg",
          name: "Inner Color Mug",
          buttonTitle: "Check Price",
        },
        {
          id: 4,
          img: "frosted-mug.jpeg",
          name: "Frosted Mug",
          buttonTitle: "Check Price",
        },
      ],
    };
  },

};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-gap: 20px 30px;
  padding: 10px 50px;
  padding-bottom: 200px;
}

.container .card {
  width: 300px;
  height: 300px;
  border: solid 2px #000;
  position: relative;
  overflow: hidden;
}

.card .card-image {
  /* background-image: url("../../assets/about-cust.jpg"); */
}

.card .card-image img {
  width: 100%;
  height: 220px;
  border-radius: 0 !important;
}

.card .card-title {
  padding: 10px;
  font-style: italic;
}

.card .button button {
  padding: 10px;
  width: 100%;
  background-color: #59d3bd;
  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 15px;
  position: relative;
  margin-bottom: 0;

}

</style>