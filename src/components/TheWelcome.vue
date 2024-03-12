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
  import { onMounted } from 'vue';
  import IconVuejs from './icon/IconVuejs.vue';

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
      <IconSun v-if="isDarkMode" class="h-6 w-6" />
      <IconMoon v-else class="h-6 w-6" />
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
        <div :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }">
          <p>Je suis actuellement étudiant au BUT MMI de Montbéliard.</p>
          <p>Je souhaite devenir un développeur web full stack polivalent.</p>
          <p>Je suis polivalent autant pour le front-end que le back-end.</p>
        </div>
        <div>
          <h2 :class="{ 'text-secondary': isDarkMode }">Qui suis-je ?</h2>
          <div>
            3 cards sur moi 
          </div>
        </div>
        <div>
          <h2 :class="{ 'text-secondary': isDarkMode }">Mes compétences</h2>
          <div>
            <div>
              <h3 :class="{ 'text-secondary': isDarkMode }">Developpement web</h3>
              Icone de developpement web (HTML, CSS, JS, TS, PHP, SQL, Vue js, Wordpress .)
            </div>
            <div>
              <h3 :class="{ 'text-secondary': isDarkMode }">Design</h3>
              Icone de design ( Figma, Photoshop, Illustrator .)
            </div>
            <div>
              <h3 :class="{ 'text-secondary': isDarkMode }">Communication</h3>
              Icone de communication ( SEO, Drive, Google Analytics, Trello, Canva .)
            </div>
          </div>
          <div :class="{ 'text-secondary': isDarkMode }">
            <h2 class="text-xl font-bold mb-4">Mes Compétences</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                  <div class="flex items-center mb-2">
                      <img src="../assets/img/9414296.png" alt="Icone de Développement Web" class="w-8 h-8 mr-3">
                      <p class="text-lg">Développement Web</p>
                  </div>
                  <p class="text-gray-600">Maîtrise des langages HTML, CSS, JS, TS, PHP, SQL, Vue.js, ainsi que Wordpress.</p>
              </div>

              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                  <div class="flex items-center mb-2">
                      <img src="../assets/img/1804352.png" alt="Icone de Design" class="w-8 h-8 mr-3">
                      <p class="text-lg">Design</p>
                  </div>
                  <p class="text-gray-600">Expertise dans l'utilisation de Figma, Photoshop et Illustrator pour créer des designs impressionnants et intuitifs.</p>
              </div>

              <div class="rounded-lg p-6 shadow-md relative" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                <div class="flex items-center mb-2">
                    <img src="../assets/img/1155461.png" alt="Icone de Communication" class="w-8 h-8 mr-3">
                    <p class="text-lg">Communication</p>
                </div>
                <IconVuejs class="h-6 w-6 mr-3"/>

                <!-- Barre de progression -->
                <div class="h-3 w-32 bg-white rounded-full overflow-hidden mt-2 relative">
                    <div class="h-full bg-progress absolute animate-progress"></div>
                </div>

                <p class="text-gray-600 mt-2">Familiarité avec les outils de référencement SEO, Google Drive, Google Analytics, Trello et Canva pour optimiser la communication et la collaboration.</p>
            </div>

          </div>
          </div>
        </div>
  </div>
</template>

<style>
@keyframes progress {
    0% {
        width: 0%;
        border-radius: 0;
    }
    100% {
        width: 98%;
        border-radius: 9999px;
    }
}

.animate-progress {
    animation: progress 3s ease forwards;
}





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