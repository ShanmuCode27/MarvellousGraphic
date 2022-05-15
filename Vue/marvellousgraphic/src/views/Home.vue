<template>
  <div class="home">
    <HomeIntro/>
    <HomeImageGrid/>
  </div>
</template>

<script>

import HomeIntro from '../components/Home/HomeIntro.vue'
import HomeImageGrid from '../components/Home/HomeImageGrid.vue'

export default {
  name: 'Home',
  components: {
    HomeIntro,
    HomeImageGrid
  }
}
</script>


<style scoped>
*{
  overflow-x: hidden ;
}
</style>