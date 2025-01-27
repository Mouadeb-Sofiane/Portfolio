<script setup lang="ts">
  import { defineProps } from 'vue';
  import type { Database, Tables } from '@/supabase-types';
  import { ref } from "vue";
  import { supabase } from "@/supabase";
  defineProps <Database["public"]["Tables"]["Card"]["Row"]>(); 
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  

  const progressCircle = ref<HTMLElement | null>(null);
  const progressContent = ref<HTMLElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.value && progressContent.value) {
      progressCircle.value.style.setProperty('--progress', (1 - progress).toString());
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }


// Fonction pour vérifier si l'URL de l'image est valide
const isImageValid = (url : string) => {
  const image = new Image();
  image.src = url;
  return image.complete && image.naturalHeight !== 0;
};

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
  <div class="p-2 lg:mx-12 md:mx-6 sm:mx-4">
      <div class="text-center flex flex-col justify-center mb-16 items-center mt-12">
        <h1 class="text-4xl font-bold" style="font-family: 'Viga'">{{ nom_projet }}</h1>
        </div>  

      <h2 class="text-2xl underline mb-7" style="font-family: 'Viga'">{{ title1 }}</h2>
      <div class="flex flex-col md:flex-row gap-11">
        <!-- Description prenant 60% de l'espace sur les petits écrans et 3/5 sur les grands écrans -->
        <p class="text-justify w-full md:w-3/5" style="font-family: 'Poppins'">{{ description1 }}</p>

        <!-- Images prenant 40% de l'espace sur les petits écrans et 2/5 sur les grands écrans -->
        <div class="flex flex-col w-full md:w-2/5">
          <img v-if="img2" class="w-full" :src="img2" alt="Image projet" />

          <!-- <img class="w-full" :src="img2" alt="Image projet" /> -->
        </div>
      </div>
      <div class="mt-20"></div>
      <h2 class="text-2xl underline mb-7" style="font-family: 'Viga'">{{ title2 }}</h2>
      <div class="flex flex-col md:flex-row gap-11">
        <!-- Images prenant 40% de l'espace sur les petits écrans et 2/5 sur les grands écrans -->
        <div class="flex flex-col w-full md:w-2/5">
          <img class="w-full" v-if="img3" :src="img3" alt="Image projet" />
        </div>
        <!-- Description prenant 60% de l'espace sur les petits écrans et 3/5 sur les grands écrans -->
        <div class="text-justify w-full md:w-3/5">
          <p style="font-family: 'Poppins'">{{ description2 }}</p><br>
          <p style="font-family: 'Poppins'">{{ description2b }}</p>
        </div>
      </div>
      <div class="mt-20"></div>
      <h2 class="text-2xl underline mb-7 text-center" style="font-family: 'Viga'">{{ title3 }}</h2>
        <div>
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
            <swiper-slide><img class="w-auto h-24" v-if="img7" :src="img7" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img8" :src="img8" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img9" :src="img9" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img10" :src="img10" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img11" :src="img11" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img12" :src="img12" alt="Image projet" /></swiper-slide>

            <template #container-end>
              <div class="autoplay-progress">
              </div>
            </template>
          </swiper>
        </div>
        <div class=mt-20></div>
          <div class="flex flex-col md:flex-row gap-11">
            <!-- Partie gauche avec l'iframe -->
            <div class="w-full md:w-2/3">
                <h2 class="text-2xl underline mb-10" style="font-family: 'Viga'">{{ title4 }}</h2>
                <div class="aspect-w-16 aspect-h-9 h-full w-full">
                    <iframe class="h-full w-full" style="border: 1px solid rgba(0, 0, 0, 0.1);"  v-if="maquette" :src="maquette" allowfullscreen></iframe>
                </div>
            </div>
            <!-- Partie droite avec le texte et les images -->
            <div class="w-full md:w-1/3">
                <div class="flex flex-col gap-5">
                    <h2 class="text-2xl underline mb-5" style="font-family: 'Viga'">{{ title5 }}</h2>
                    <p class="text-justify" style="font-family:'Poppins'">{{ description4 }}</p>
                    <div class="mt-5">
                        <h2 class="text-2xl underline mb-5 mt-16" style="font-family: 'Viga'">{{ title6 }}</h2>
                        <div class="flex flex-wrap gap-10">
                            <img class="w-8 h-8" v-if="icon" :src="icon" />   
                            <img class="w-8 h-8" v-if="icon2" :src="icon2" />   
                            <img class="w-8 h-8" v-if="icon3" :src="icon3" />   
                            <img class="w-8 h-8" v-if="icon4" :src="icon4" />   
                            <img class="w-8 h-8" v-if="icon5" :src="icon5" /> 
                            <img class="w-8 h-8" v-if="icon6" :src="icon6" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>

        <a v-if="lien_projet" :href="lien_projet" style="font-family: 'Viga'" class="flex justify-center mt-32 m-5 mb-10 border border-white text-white bg-primary px-4 py-2 rounded relative overflow-hidden transition-transform duration-300 hover:scale-105">Accéder au site</a>
        
    </div>  
</template>

<style>
@font-face {
  font-family: "Poppins";
  src: url("../fonts/Poppins-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
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
