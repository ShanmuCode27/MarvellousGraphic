<template>
  <div class="home">
    <HomeIntro/>
  </div>
</template>

<script>

import HomeIntro from '../components/HomeIntro.vue'

export default {
  name: 'Home',
  components: {
    HomeIntro
  }
}
</script>


<style scoped>
*{
  overflow-x: hidden ;
}
</style>