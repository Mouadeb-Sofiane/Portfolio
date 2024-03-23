<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '@/supabase';
import AfficheCard from '@/components/AfficheCard.vue';
import IconSun from '@/components/icon/IconSun.vue';
import IconMoon from '@/components/icon/IconMoon.vue';

const isDarkMode = ref(true);

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
        <button @click="toggleDarkMode" class="fixed top-20 right-4 p-2 bg-accent border border-gray-900 rounded-full  dark:text-gray-100 z-10">
            <IconSun v-if="isDarkMode" class="h-6 w-6" />
            <IconMoon v-else class="h-6 w-6" />
        </button>

    <div :class="{ 'dark': isDarkMode, 'bg-gray-100': !isDarkMode, 'bg-primary': isDarkMode }" class="min-h-screen">
        <h1 :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }">Mes projets</h1>
        <p :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }">En MMI, nous avons réalisés beaucoup de projets qui ont aboutis. 
                                                                                      Il y a ici une liste de sites que j'ai réalisés seul ou en équipe. 
                                                                                      Je vous invite à les découvrir. Voici une liste de mes projets qui continuera de s'angrandir.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6-4 ">
                <AfficheCard v-for="projet in tableauprojet" v-bind="projet" />
             </div>
    </div>
    </div>
</template>
  

  