<template>
    <div class="container">
        <div class="title">
            {{title}}
        </div>
        <div class="slide">
        <splide :options="options">
            <splide-slide>
            <img src="../../assets/homeprodgrid/1.jpg">
            </splide-slide>
            <splide-slide>
            <img src="../../assets/homeprodgrid/2.jpg">
            </splide-slide>
            <splide-slide>
            <img src="../../assets/homeprodgrid/3.jpg">
            </splide-slide>
            <splide-slide>
            <img src="../../assets/homeprodgrid/4.jpg">
            </splide-slide>
            <splide-slide>
            <img src="../../assets/homeprodgrid/5.jpg">
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
        title: 'What our Customers Say',
        options: {
          rewind : true,
          width  : 1000,
          gap    : '1rem',
        },
      };
    },

}
</script>

<style>

.slide{
    width: 100vw;
    padding-left: 250px;
    margin-bottom: 100px;
}

img{
    width: 200px;
}

.title{
    font-size: 30px;
    margin-bottom: 100px;
    font-family: 'Jost';
    font-weight: bold;
}
</style>