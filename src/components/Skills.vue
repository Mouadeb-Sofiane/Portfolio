<template>
  <div class="skills-sliders">
    <!-- First Slider: Web Development Skills (Right to Left) -->
    <div class="slider-container overflow-hidden whitespace-nowrap relative mb-8">
      <div class="slider-track animate-slide-right">
        <div class="inline-flex">
          <div v-for="(logo, index) in webDevLogos1" :key="index" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
          <div v-for="(logo, index) in webDevLogos1" :key="`duplicate-${index}`" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
          <div v-for="(logo, index) in webDevLogos1" :key="`duplicate-${index}`" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
          <div v-for="(logo, index) in webDevLogos1" :key="`duplicate-${index}`" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
        </div>
      </div>
    </div>

    <!-- Second Slider: Web Development Skills (Left to Right) -->
    <div class="slider-container overflow-hidden whitespace-nowrap relative mb-8">
      <div class="slider-track animate-slide-left">
        <div class="inline-flex">
          <div v-for="(logo, index) in communicationLogos" :key="index" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
          <div v-for="(logo, index) in communicationLogos" :key="`duplicate-${index}`" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
          <div v-for="(logo, index) in communicationLogos" :key="`duplicate-${index}`" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
          <div v-for="(logo, index) in communicationLogos" :key="`duplicate-${index}`" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
          <div v-for="(logo, index) in communicationLogos" :key="`duplicate-${index}`" class="mx-2 sm:mx-4 flex-shrink-0">
            <component :is="logo" class="w-8 h-8 sm:w-12 sm:h-12" />
          </div>
        </div>
      </div>
    </div>

    
    <!-- Competency Keywords -->
    <div class=" text-center">
      <p class="text-sm sm:text-xl font-semibold">
        Développement Web | Design UI/UX | Production Multimédia | Jeux Vidéo | Cinématiques Unreal Engine |
        Développement Full-Stack | Outils de Design | Montage Vidéo
      </p>
    </div>
  </div>
</template>

<script>
import IconHtml from './icon/IconHtml.vue'
import IconCss from './icon/IconCss.vue'
import IconWordpress from './icon/IconWordpress.vue'
import IconPhp from './icon/IconPhp.vue'
import IconVuejs from './icon/IconVuejs.vue'

import IconSupabase from './icon/IconSupabase.vue'
import IconPocketbase from './icon/IconPocketbase.vue'
import IconTailwindcss from './icon/IconTailwindcss.vue'
import IconUnreal from './icon/IconUnreal.vue'
import IconJs from './icon/IconJs.vue'
import IconTs from './icon/IconTs.vue'
import IconNuxt from './icon/IconNuxt.vue'
import IconScss from './icon/IconScss.vue'

import IconDaVinci from './icon/IconDaVinci.vue'
import IconFigma from './icon/IconFigma.vue'
import IconCanva from './icon/IconCanva.vue'
import IconTrello from './icon/IconTrello.vue'
import IconDrive from './icon/IconDrive.vue'
import IconIllustrator from './icon/IconIllustrator.vue'


export default {
  components: {
    IconHtml, IconCss, IconWordpress, IconPhp, IconVuejs, 
    IconSupabase, IconPocketbase, IconTailwindcss, 
    IconDaVinci, IconFigma, IconCanva, IconTrello, IconDrive, IconIllustrator
  },
  data() {
    return {
      webDevLogos1: [
        IconVuejs, IconNuxt, IconJs, IconTs, IconSupabase, IconPocketbase, IconUnreal, IconHtml, IconCss, IconTailwindcss, IconScss, IconWordpress, IconPhp, 
      ],
      webDevLogos2: [
        
      ],
      communicationLogos: [
        IconDaVinci, IconFigma, IconCanva, 
        IconTrello, IconDrive, IconIllustrator
      ]
    }
  }
}
</script>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden;
}

.slider-track {
  display: inline-flex;
  width: max-content;
}

@keyframes slideRight {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes slideLeft {
  from { transform: translateX(-100%); }
  to { transform: translateX(50%); }
}

.animate-slide-right {
  animation: slideRight 30s linear infinite;
}

.animate-slide-left {
  animation: slideLeft 45s linear infinite;
}
</style>