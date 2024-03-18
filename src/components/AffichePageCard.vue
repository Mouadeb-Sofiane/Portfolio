<script setup lang="ts">
  import { defineProps } from 'vue';
  import type { SchemaProjet } from '@/types';
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  defineProps<SchemaProjet>();

  const progressCircle = ref<HTMLElement | null>(null);
  const progressContent = ref<HTMLElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.value && progressContent.value) {
      progressCircle.value.style.setProperty('--progress', (1 - progress).toString());
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
  <div class="p-2">
    <div class="p-2 pb-10 text-center">
      <h1 class="text-3xl font-bold">{{ nom_projet }}</h1>
      <div class="">
        <img class="w-auto h-24" :src="image_projet" alt="Image projet" />
      </div>
    </div>
    <p class="text-justify">{{ description_projet }}</p>
    <a :href="lien_projet">{{ lien_projet }}</a>
    <div class="">
      <img class="w-auto h-24" :src="logo" alt="Image projet" />
    </div>

    <h2 class="text-2xl underline mb-5">{{ title1 }}</h2>
    <div class="flex flex-col md:flex-row gap-11">
      <!-- Description prenant 60% de l'espace sur les petits écrans et 3/5 sur les grands écrans -->
      <p class="text-justify w-full md:w-3/5">{{ desc1 }}</p>

      <!-- Images prenant 40% de l'espace sur les petits écrans et 2/5 sur les grands écrans -->
      <div class="flex flex-col w-full md:w-2/5">
        <img class="w-full" :src="img2" alt="Image projet" />
      </div>
    </div>

    <br />
    <p class="text-justify">{{ desc2 }}</p>
    <p class="text-justify">{{ desc3 }}</p>
    <p class="text-justify">{{ desc4 }}</p>
    <p class="text-justify">{{ desc5 }}</p>
    <p class="text-justify">{{ desc6 }}</p>
    <div class="flex">
      <img class="w-auto h-32" :src="img2" alt="Image projet" />
      <img class="w-auto h-32" :src="img3" alt="Image projet" />
      <img class="w-auto h-32" :src="img4" alt="Image projet" />
    </div>
    <div class="grid grid-cols-4 gap-4">
      <img class="w-auto h-80" :src="img6" alt="Image projet" />
      <div></div>
    </div>
    <img class="w-auto h-72" :src="img7" alt="Image projet" />
    <img class="w-auto h-72" :src="img8" alt="Image projet" />
    <img class="w-auto h-72" :src="img9" alt="Image projet" />
    <img class="w-auto h-72" :src="img10" alt="Image projet" />
    <img class="w-auto h-72" :src="img11" alt="Image projet" />
    <img class="w-auto h-72" :src="img12" alt="Image projet" />

    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      @autoplayTimeLeft="onAutoplayTimeLeft"
      class="mySwiper"
    >
      <swiper-slide><img class="w-auto h-24" :src="img7" alt="Image projet" /></swiper-slide>
      <swiper-slide><img class="w-auto h-24" :src="img8" alt="Image projet" /></swiper-slide>
      <swiper-slide><img class="w-auto h-24" :src="img9" alt="Image projet" /></swiper-slide>
      <swiper-slide><img class="w-auto h-24" :src="img10" alt="Image projet" /></swiper-slide>
      <swiper-slide><img class="w-auto h-24" :src="img11" alt="Image projet" /></swiper-slide>
      <swiper-slide><img class="w-auto h-24" :src="img12" alt="Image projet" /></swiper-slide>

      <template #container-end>
        <div class="autoplay-progress">
        </div>
      </template>
    </swiper>
  </div>
</template>

<style>
#app {
  height: 50%;
}
html,
body {
  position: relative;
  height: 50%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 50%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
