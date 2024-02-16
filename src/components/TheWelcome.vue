<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import IconSun from './icons/IconSun.vue'
import IconMoon from './icons/IconMoon.vue' 

import { ref } from 'vue'

const darkMode = ref(false)

const toggleMode = () => {
  darkMode.value = !darkMode.value
}
</script>

<template>
  <div :class="{ 'dark-mode': darkMode }">
    <button @click="toggleMode" class="fixed right-0 ">
      <div class="p-10">
        <IconMoon class="w-10 h-10 rounded-full bg-gray-800 p-1" v-if="!darkMode" />
        <IconSun class="w-10 h-10 rounded-full bg-white p-1" v-else />
      </div>
    </button>
    <p class="text" :class="{ 'text-white': darkMode, 'text-black': !darkMode }">je me nomme sofiane</p>
    <p class="text" :class="{ 'text-white': darkMode, 'text-black': !darkMode }">je me nomme sofiane</p>
    <p class="text" :class="{ 'text-white': darkMode, 'text-black': !darkMode }">je me nomme sofiane</p>
    <p class="text" :class="{ 'text-white': darkMode, 'text-black': !darkMode }">je me nomme sofiane</p>


  </div>
</template>



<style scoped>
.dark-mode {
  background-color: #1E1E1E; /* Couleur de fond en mode sombre */
  color: white; /* Couleur de texte en mode sombre */
}

.text {
  color: black; /* Couleur de texte en mode clair */
}

.dark-mode .text {
  color: white; /* Couleur de texte en mode sombre */
}
</style>
