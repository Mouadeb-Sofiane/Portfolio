<script setup lang="ts">
    import { defineProps } from 'vue';
    import type { SchemaProjet } from '@/types';

    defineProps<SchemaProjet>();
      import Carousel from 'primevue/carousel';


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




            <br>
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
        <div>

        </div>
      </div>
      <img class="w-auto h-72" :src="img7" alt="Image projet" />
      <img class="w-auto h-72" :src="img8" alt="Image projet" />
      <img class="w-auto h-72" :src="img9" alt="Image projet" />
      <img class="w-auto h-72" :src="img10" alt="Image projet" />
      <img class="w-auto h-72" :src="img11" alt="Image projet" />
      <img class="w-auto h-72" :src="img12" alt="Image projet" />
  </div>
</template>
