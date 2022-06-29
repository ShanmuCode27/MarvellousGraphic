<template>
  <div class = "mugs">
    <ProductIntroMugs/>
    <ProductMugs/>
  </div>
</template>

<script>

import ProductIntroMugs from './ProductIntroMugs.vue'
import ProductMugs from './ProductsMugs.vue'

export default {
    name: 'ProductsMugs',
    components: {
        ProductIntroMugs,
        ProductMugs
    }
}
</script>

<style scoped>

*{
  overflow-x: hidden;
}


</style>