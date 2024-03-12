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
import IconHtml from './icon/IconHtml.vue';
import IconCss from './icon/IconCss.vue';
import IconTailwindcss from './icon/IconTailwindcss.vue';
import IconWordpress from './icon/IconWordpress.vue';
import IconPhp from './icon/IconPhp.vue';
import IconDrive from './icon/IconDrive.vue';
import IconFigma from './icon/IconFigma.vue';
import IconIllustrator from './icon/IconIllustrator.vue';
import IconPhotoshop from './icon/IconPhotoshop.vue';
import IconTrello from './icon/IconTrello.vue';
import IconCanva from './icon/IconCanva.vue';
import IconDaVinci from './icon/IconDaVinci.vue';

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
                      <p class="text-lg">Développement Web</p>
                  </div>
                  <div class="flex">
                    <IconHtml class="h-6 w-6 mr-3"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-html absolute animate-progress1"></div>
                      </div>  
                      <IconCss class="h-8 w-8 mr-3 ml-5"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-css absolute animate-progress1"></div>
                      </div>                 
                  </div>
                  <div class="flex">
                    <IconWordpress class="h-6 w-6 mr-3"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-wp absolute animate-progress1"></div>
                      </div>  
                      <IconPhp class="h-8 w-8 mr-3 ml-5"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-php absolute animate-progress1"></div>
                      </div>                 
                  </div>
                  <div class="flex">
                    <IconVuejs class="h-6 w-6 mr-3"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-progress absolute animate-progress1"></div>
                      </div>  
                      <IconTailwindcss class="h-8 w-8 mr-3 ml-5"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-tailwindcss absolute animate-progress1"></div>
                      </div>                 
                  </div>
              </div>

              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                  <div class="flex items-center mb-2">
                      <p class="text-lg">Design</p>
                  </div>
                  <div class="flex">
                    <IconFigma class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-figma absolute animate-progress1"></div>
                      </div>  
                  </div>
                  <div class="flex"> 
                    <IconPhotoshop class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-photoshop absolute animate-progress1"></div>
                      </div> 
                  </div>
                  <div class="flex">
                    <IconIllustrator class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-illustrator absolute animate-progress1"></div>
                      </div> 
                  </div>
              </div>

              <div class="rounded-lg p-6 shadow-md relative" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                <div class="flex items-center mb-2">
                    <p class="text-lg">Communication</p>
                </div>
                  <div class="flex">
                    <IconDrive class="h-8 w-8 mr-3 ml-5" />
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-progress absolute animate-progress1"></div>
                      </div>            
                  </div>
                  <div class="flex">
                    <IconTrello class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-trello absolute animate-progress1"></div>
                      </div>  
                  </div>
                  <div class="flex">
                    <IconCanva class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-tailwindcss absolute animate-progress1"></div>
                      </div>   
                  </div> 
            </div>
            <div class="rounded-lg p-6 shadow-md relative mb-10" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                <div class="flex items-center mb-2">
                    <p class="text-lg">Audiovisuel</p>
                </div>
                  <div class="flex">
                    <IconDaVinci class="h-8 w-8 mr-3 ml-5" />
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-progress absolute animate-progress1"></div>
                      </div>            
                  </div>
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

@keyframes progress1 {
    0% {
        width: 0%;
        border-radius: 0;
    }
    100% {
        width: 85%;
        border-radius: 9999px;
    }
}

.animate-progress {
    animation: progress 3s ease forwards;
}

.animate-progress1 {
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