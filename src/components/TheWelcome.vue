<script setup lang="ts">
  import { ref } from 'vue';
  import IconSun from './icon/IconSun.vue';
  import IconMoon from './icon/IconMoon.vue';
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

  const isDarkMode = ref(false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

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
    <button @click="toggleDarkMode" class="fixed top-20 right-4 p-2 bg-accent border border-gray-900 rounded-full  dark:text-gray-300">
      <IconSun v-if="isDarkMode" class="h-6 w-6" />
      <IconMoon v-else class="h-6 w-6" />
    </button>
    <div>
      <h1 :class="{ 'text-secondary': isDarkMode, }" class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Sofiane Mouadeb</h1> 
      <p :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }" class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Développeur Full Stack</p> 
    </div>
    <div id="text-container" class="overflow-hidden whitespace-nowrap animate-typing">
        <div class="flex items-center">
          <p class="text-blue-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mr-1">< img</p>
          <p class="text-blue-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">src=</p>
          <p class="text-orange-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">"SofianeMOUADEB.png"</p>
          <p class="text-blue-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">alt=</p>
          <p class="text-orange-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">"Ma photo de profil" ></p>
        </div>
      </div>
      <div id="image-container" class="hidden sm:block w-15">
        <img src="https://www.w3schools.com/w3images/avatar2.png" alt="Sofiane-Mouadeb_photo">
      </div>
    <div>
        <div :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }" class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
          <p>Je suis actuellement étudiant au BUT MMI de Montbéliard.</p>
          <p>Je souhaite devenir un développeur web full stack polyvalent.</p>
          <p>Je suis polyvalent autant pour le front-end que le back-end.</p>
        </div>
     
          <h2 :class="{ 'text-secondary': isDarkMode }" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Qui suis-je ?</h2>
          <div>
            3 cards sur moi 
          </div>
        </div>
        <div>
          <div :class="{ 'text-secondary': isDarkMode }">
            <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">Mes Compétences</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mr-8 ml-8">
              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                  <div class="flex items-center mb-2">
                      <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Développement Web</p>
                  </div>
                  <div class="flex">
                    <IconHtml class="h-6 w-6 mr-3"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-html absolute animate-progress"></div>
                      </div>  
                      <IconCss class="h-8 w-8 mr-3 ml-5"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-css absolute animate-neuf"></div>
                      </div>                 
                  </div>
                  
                  <div class="flex">
                    <IconVuejs class="h-6 w-6 mr-3"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-progress absolute animate-neuf"></div>
                      </div>  
                      <IconTailwindcss class="h-8 w-8 mr-3 ml-5"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-tailwindcss absolute animate-septcinq"></div>
                      </div>                 
                  </div>

                  <div class="flex">
                    <IconWordpress class="h-6 w-6 mr-3"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-wp absolute animate-septcinq"></div>
                      </div>  
                      <IconPhp class="h-8 w-8 mr-3 ml-5"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-php absolute animate-six"></div>
                      </div>                 
                  </div>
              </div>

              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                  <div class="flex items-center mb-2">
                      <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Design</p>
                  </div>
                  <div class="flex">
                    <IconFigma class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-figma absolute animate-progress"></div>
                      </div>  
                  </div>

                  <div class="flex">
                    <IconIllustrator class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-illustrator absolute animate-septcinq"></div>
                      </div> 
                  </div>
                  
                  <div class="flex"> 
                    <IconPhotoshop class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-photoshop absolute animate-six"></div>
                      </div> 
                  </div>
                  
              </div>

              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
                <div class="flex items-center mb-2">
                    <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Communication</p>
                </div>
                  <div class="flex">
                    <IconDrive class="h-8 w-8 mr-3 ml-5" />
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-progress absolute animate-neuf"></div>
                      </div>            
                  </div>
                  <div class="flex">
                    <IconTrello class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-trello absolute animate-septcinq"></div>
                      </div>  
                  </div>
                  <div class="flex">
                    <IconCanva class="h-8 w-8 mr-3 ml-5"/>
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-tailwindcss absolute animate-septcinq"></div>
                      </div>   
                  </div> 
            </div>
          </div>
          <div class="rounded-lg p-6 shadow-md relative mb-8 mr-8 ml-8" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-fourth': isDarkMode }">
              <div class="flex items-center">
                <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Audiovisuel</p>
              </div>
              <div class="flex">
                <IconDaVinci class="h-8 w-8 mr-3 ml-5" />
                <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                  <div class="h-full bg-progress absolute animate-davinci"></div>
                </div>            
              </div>
          </div>
          
          <p>gthyujikol</p>
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

@keyframes davinci {
    0% {
        width: 0%;
        border-radius: 0;
    }
    100% {
        width: 55%;
        border-radius: 9999px; /* Utilisez une valeur suffisamment grande pour obtenir un coin très arrondi */
    }
}

@keyframes septcinq {
    0% {
        width: 0%;
        border-radius: 0;
    }
    100% {
        width: 75%;
        border-radius: 9999px; /* Utilisez une valeur suffisamment grande pour obtenir un coin très arrondi */
    }
}

@keyframes six {
    0% {
        width: 0%;
        border-radius: 0;
    }
    100% {
        width: 65%;
        border-radius: 9999px; /* Utilisez une valeur suffisamment grande pour obtenir un coin très arrondi */
    }
}

@keyframes neuf {
    0% {
        width: 0%;
        border-radius: 0;
    }
    100% {
        width: 90%;
        border-radius: 9999px; /* Utilisez une valeur suffisamment grande pour obtenir un coin très arrondi */
    }
}
.animate-neuf {
    animation: neuf 3s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
}

.animate-six {
    animation: six 3s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
}

.animate-septcinq {
    animation: septcinq 3s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
}

.animate-davinci {
    animation: davinci 3s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
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