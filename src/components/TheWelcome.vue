<script setup lang="ts">
  import { ref } from 'vue';
  import IconSun from './icon/IconSun.vue';
  import IconMoon from './icon/IconMoon.vue';
  import AfficheCard from './AfficheCard.vue';

  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  import { onMounted } from 'vue';

  onMounted(() => {
    const textContainer = document.getElementById('text-container');
    const imageContainer = document.getElementById('image-container');

    textContainer?.addEventListener('animationend', () => {
      imageContainer?.classList.add('show');
    });
  });   
</script>

<template>
  <div :class="{ 'dark': isDarkMode, 'bg-secondary': !isDarkMode, 'bg-primary': isDarkMode }" class="min-h-screen">
    <!-- Utilisation d'icônes pour le mode sombre/clair -->
    <button @click="toggleDarkMode" class="fixed top-20 right-4 p-2 bg-accent border border-gray-900 rounded-full bg-white-300 dark:bg-gray-700 dark:text-gray-300">
      <IconSun v-if="isDarkMode" class="h-6 w-6 bg-white" />
      <IconMoon v-else class="h-6 w-6 bg-white" />
    </button>
    <div>
      <h1 :class="{ 'text-secondary': isDarkMode }">Sofiane Mouadeb</h1> 
      <p :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }">Developpeur Full Stack</p> 
    </div>
    <div id="text-container">
            <div class="balise-img"><
                <p class="col-blue">img</p>
                <p class="col-blue-w">src=</p>
                <p class="col-orange">"SofianeMOUADEB.png"</p>
                <p class="col-blue-w">alt=</p>
                <p class="col-orange">"Ma photo de profil"</p>>
            </div>
        </div>
        <div id="image-container">
            <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Votre image">
        </div>
        <div>
          
        </div>
  </div>
</template>

<style>
@keyframes typing {
      from {
        width: 0;
      }
      to {
        width: 100%;
      }
    }

    #text-container {
      overflow: hidden;
      white-space: nowrap;
      font-family: Arial, sans-serif;
      font-size: 16px;
      color: gray; /* Ajoutez votre couleur préférée ici */
      animation: typing 3s steps(80) 1s forwards;
    }

    #image-container {
      display: none;
      width: 15%;
    }

    #image-container.show {
      display: block;
    }

    .col-blue {
      color: blue;
    }

    .col-blue-w {
      color: slateblue;
    }

    .col-orange {
      color: #9e6a03;
    }

    .balise-img {
      display: flex;
      flex-direction: row;
      gap: 3px;
    }
</style>