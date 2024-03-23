<script setup lang="ts">
    import AfficheSingle from '@/components/AfficheSingle.vue';
    import {useRoute} from "vue-router/auto"
    import IconMoon from '@/components/icon/IconMoon.vue';
    import IconSun from '@/components/icon/IconSun.vue';
    import { ref } from "vue";
    const route = useRoute("/projets/[id]")

    const isDarkMode = ref(true);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
</script>

<template>
  <div class="relative">
        <button @click="toggleDarkMode" class="fixed top-20 right-4 p-2 bg-accent border border-gray-900 rounded-full  dark:text-gray-100 z-10">
            <IconSun v-if="isDarkMode" class="h-6 w-6" />
            <IconMoon v-else class="h-6 w-6" />
        </button>

    <div :class="{ 'dark': isDarkMode, 'bg-gray-100': !isDarkMode, 'bg-primary': isDarkMode }" class="min-h-screen">
      <div class="" :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }">
        <AfficheSingle :id="route.params.id" />
      </div>
    </div>
  </div>
</template>