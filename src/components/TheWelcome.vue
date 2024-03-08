<template>
  <div :class="{ 'dark': isDarkMode, 'bg-secondary': !isDarkMode, 'bg-primary': isDarkMode }" class="min-h-screen">
    <!-- Utilisation d'icônes pour le mode sombre/clair -->
    <button @click="toggleDarkMode" class="fixed top-20 right-4 p-2 rounded-full bg-white-300 dark:bg-gray-700 dark:text-gray-300">
      <IconSun v-if="isDarkMode" class="h-6 w-6 bg-white" />
      <IconMoon v-else class="h-6 w-6 bg-white" />
    </button>
    <p :class="{ 'text-secondary': isDarkMode }">dfghjk</p> <!-- Ajout de la classe de couleur de texte secondary -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IconSun from './icon/IconSun.vue';
import IconMoon from './icon/IconMoon.vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>
