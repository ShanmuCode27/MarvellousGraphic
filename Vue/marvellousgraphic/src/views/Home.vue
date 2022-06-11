<template>
  <div class="home">
    <HomeIntro/>
    <HomeImageGrid/>
    <ProdTypeGrid/>
    <Testimonial/>
  </div>
</template>

<script>

import HomeIntro from '../components/Home/HomeIntro.vue'
import HomeImageGrid from '../components/Home/HomeImageGrid.vue'
import ProdTypeGrid from '../components/Home/ProdTypeGrid.vue'
import Testimonial from '../components/Home/Testimonial.vue'

export default {
  name: 'Home',
  components: {
    HomeIntro,
    HomeImageGrid,
    ProdTypeGrid,
    Testimonial
  }
}
</script>


<style scoped>
*{
  overflow-x: hidden ;
}
</style>