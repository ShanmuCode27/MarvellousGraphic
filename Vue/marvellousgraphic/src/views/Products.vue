<template>
  <div class = "products">
    <ProductIntro/>
    <ProductGrid/>
  </div>
</template>

<script>

import ProductIntro from '../components/Products/ProductIntro.vue'
import ProductGrid from '../components/Products/ProductGrid.vue'

export default {
    name: 'Products',
    components: {
        ProductIntro,
        ProductGrid
    }
}
</script>

<style scoped>

*{
  overflow-x: hidden;
}


</style>