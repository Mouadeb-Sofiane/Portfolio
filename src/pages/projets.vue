<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/supabase';
import AfficheCard from '@/components/AfficheCard.vue';
import IconSun from '@/components/icon/IconSun.vue';
  import IconMoon from '@/components/icon/IconMoon.vue';

const isDarkMode = ref(false);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

let {data: tableauprojet, error} = await supabase
  .from('Card')
  .select('*');

</script>

<template>
    <div class="relative">
        <button @click="toggleDarkMode" class="fixed top-20 right-4 p-2 rounded-full bg-accent border border-gray-900 dark:bg-gray-700 dark:text-gray-300 z-10">
            <IconSun v-if="isDarkMode" class="h-6 w-6 bg-white" />
            <IconMoon v-else class="h-6 w-6 bg-white" />
        </button>

    <div :class="{ 'dark': isDarkMode, 'bg-secondary': !isDarkMode, 'bg-primary': isDarkMode }" class="min-h-screen">
      <div class="grid grid-cols-3 gap-4">
        <AfficheCard v-for="projet in tableauprojet" v-bind="projet" />
      </div>
    </div>
    </div>
</template>
  

  