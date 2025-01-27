<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router/auto';
import AfficheSingle from '@/components/AfficheSingle.vue';
import { supabase } from '@/supabase';  // Import supabase client from the file

const projet = ref<any>({});

import IconMoon from '@/components/icon/IconMoon.vue';
import IconSun from '@/components/icon/IconSun.vue';

const route = useRoute("/projets/[id]");

const isDarkMode = ref(true);

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(async () => {
  const { data, error } = await supabase
    .from('Card')
    .select('*')
    .eq('id', route.params.id)
    .single();
  
  if (error) {
    console.error(error);
  } else {
    projet.value = data;
  }
});
</script>

<template>
  <div class="relative">
    <button @click="toggleDarkMode" class="fixed top-24 right-4 p-2 bg-accent border border-gray-900 rounded-full dark:text-gray-100 z-10">
      <IconSun v-if="isDarkMode" class="h-6 w-6" />
      <IconMoon v-else class="h-6 w-6" />
    </button>

    <div :class="{ 'dark': isDarkMode, 'bg-gray-100': !isDarkMode, 'bg-primary': isDarkMode }" class="min-h-screen">
      <div :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }">
        <!-- Apply v-if here directly on the AfficheSingle component -->
        <AfficheSingle v-if="projet" v-bind="projet" />
      </div>
    </div>
  </div>
</template>