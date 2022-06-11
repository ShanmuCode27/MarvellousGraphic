<template>
    <div class="container">
        <div class="title">
            Testimonial
        </div>
        <div class="slide">
        <splide :options="options">
            <splide-slide>
            <img src="image1.jpg">
            </splide-slide>
            <splide-slide>
            <img src="image2.jpg">
            </splide-slide>
            <splide-slide>
            <img src="image3.jpg">
            </splide-slide>
        </splide>
        </div>
    </div>
</template>

<script>

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {

    components: {
        Splide,
        SplideSlide,
    },

   data() {
      return {
        options: {
          rewind : true,
          width  : 800,
          gap    : '1rem',
        },
      };
    },

}
</script>

<style>

.slide{
    width: 100vw;
}

</style>