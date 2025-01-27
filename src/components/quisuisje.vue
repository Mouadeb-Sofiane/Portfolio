<script setup lang="ts">
import { ref } from 'vue'

import { onMounted } from 'vue'

import { supabase } from '@/supabase'

const isDarkMode = ref(true)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>
<template>
    <div
    :class="{ dark: isDarkMode, 'bg-gray-100': !isDarkMode, 'bg-primary': isDarkMode }"
    class="min-h-screen pl-7 pr-7"
  >
    <div class="flex flex-col md:flex-row justify-center md:justify-between">
      <div class="container1 mb-20 md:mr-8">
        <div class="card1">
          <div class="content-card1">
          </div>
        </div>
      </div>

      <div :class="{ 'text-secondary': isDarkMode }" class="w-full mt-7 mb-10 md:w-2/3">
        <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
          Je suis Sofiane Mouadeb, un étudiant passionné du BUT MMI (Métiers du Multimédia et de
          l’Internet) de Montbéliard, spécialisé dans le développement web, la communication et le
          design. Ayant suivi un parcours enrichissant en BAC général, j'ai acquis une solide base
          dans les technologies et les principes du développement web grâce à des matières telles
          que la NSI et les Mathématiques qui ont été deux de mes trois spécialités, avec la science
          économique et sociale. Mon intérêt pour le développement web s'est pleinement manifesté
          dès mes études au lycée Edouard Belin à Vesoul, notamment lors des cours de NSI. C'est à
          ce moment que j'ai décidé de me spécialiser dans cette branche dynamique et en constante
          évolution en poursuivant mes études au BUT MMI à Montbéliard.
        </p>
        <br />
        <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
          À l'âge de 19 ans, je m'immerge totalement dans ce domaine, toujours avide de nouvelles
          connaissances et compétences. En parallèle de mes études, je suis également passionné de
          sport, notamment le football, le vélo et la boxe. Le football, en particulier, a toujours
          été une passion pour moi depuis mon enfance jusqu'à maintenant, jouant un rôle important
          dans ma vie.
        </p>
        <br />
        <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
          Ma curiosité naturelle m'a poussé à explorer différents aspects du développement web, de
          la programmation front-end à la conception back-end, en passant par l'optimisation de
          l'expérience utilisateur. Ces compétences, acquises à la fois dans le cadre académique et
          à travers mes projets personnels, me permettent de concevoir des solutions web innovantes
          et efficaces, tout en gardant un équilibre entre mes passions pour le sport et ma carrière
          dans le domaine du multimédia et de l'internet.
        </p>
      </div>
    </div>
    <div class="pb-20"></div>
</div>
</template>