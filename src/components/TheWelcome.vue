<script setup lang="ts">
  import { ref } from 'vue';
  import Contact from './Contact.vue';
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
  import IconPocketbase from './icon/IconPocketbase.vue';
  import IconSupabase from './icon/IconSupabase.vue';
  import SofianePhoto from './icon/SofianePhoto.vue';
  import IconDev from './icon/IconDev.vue';
  import AfficheCard from './AfficheCard.vue';
  import { supabase } from '@/supabase';
  

  const isDarkMode = ref(true);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  let {data: tableauprojets, error} = await supabase
  .from('Card')
  .select('*');
  
  onMounted(() => {
    const textContainer = document.getElementById('text-container');
    const imageContainer = document.getElementById('image-container');

    textContainer?.addEventListener('animationend', () => {
      imageContainer?.classList.add('show');
    });
  });   

  
</script>

<template>
  <div :class="{ 'dark': isDarkMode, 'bg-gray-100': !isDarkMode, 'bg-primary': isDarkMode }" class="min-h-screen pl-7 pr-7">
    <!-- Utilisation d'icônes pour le mode sombre/clair -->
    <button @click="toggleDarkMode" class="fixed top-20 right-4 p-2 bg-accent border border-gray-900 rounded-full  dark:text-gray-300">
      <IconSun v-if="isDarkMode" class="h-6 w-6" />
      <IconMoon v-else class="h-6 w-6" />
    </button>
  
        <div class="container mx-auto flex pt-8 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 :class="{ 'text-secondary': isDarkMode }" class="title-font sm:text-6xl text-3xl mb-4 font-medium" style="font-family: 'Viga'">Sofiane</h1>
                <h1 :class="{ 'text-secondary': isDarkMode }" class="title-font sm:text-6xl text-3xl mb-4 ml-14 font-medium" style="font-family: 'Viga'">Mouadeb</h1>
                    <h2 :class="{ 'text-secondary': isDarkMode }" class="title-font sm:text-2xl mt-5 md:ml-2 lg:ml-2 text-xl mb-4 font-medium" style="font-family: 'Viga'">Developpeur Web backend et frontend</h2>
                

                <p class="mb-8 md:ml-2 lg:ml-2 leading-relaxed text-justify font-semibold" :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }" style="font-family: 'Poppins'">Je suis actuellement étudiant au BUT MMI de Montbéliard.
                  Je souhaite devenir un développeur web full stack polyvalent.
                  Je suis polyvalent autant pour le front-end que le back-end.</p>
                <div class="flex justify-center">
                  <a href="#contact-form">
                    <button class="border border-white text-white bg-primary px-4 py-2 rounded relative overflow-hidden transition-transform duration-300 hover:scale-105">
                      Contact
                      <!-- Effet de survol -->
                      <div class="absolute inset-0  opacity-25 transform scale-150"></div>
                    </button>
                  </a>
                </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16">
              <div class="flex justify-center text-center ">
                <SofianePhoto class="flex justify-center items-center rounded-full z-10" alt="Sofiane-Mouadeb_photo"/>
              </div>
            </div>


        </div>
        <IconDev class="h-96 w-96 mr-3 ml-5"/>
          <h2 :class="{ 'text-secondary': isDarkMode }" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"style="font-family: 'Viga'">Qui suis-je ?</h2>
          <div>
            3 cards sur moi 
          </div>

        <div>
          <div :class="{ 'text-secondary': isDarkMode }">
            <h2 :class="{ 'text-secondary': isDarkMode }" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"style="font-family: 'Viga'">Mes compétences</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mr-8 ml-8">
              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-gray-700': isDarkMode }">
                  <div class="flex items-center mb-2">
                      <p class="text-lg sm:text-l md:text-xl lg:text-2xl xl:text-3xl mb-6" style="font-family: 'Viga'">Développement Web</p>
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
                  <div class="flex">
                    <IconPocketbase class="h-6 w-6 mr-3"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-gray-600 absolute animate-septcinq"></div>
                      </div>  
                      <IconSupabase class="h-8 w-8 mr-3 ml-5"/>
                      <!-- Barre de progression -->
                      <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                        <div class="h-full bg-green-600 absolute animate-six"></div>
                      </div>                 
                  </div>
              </div>

              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-gray-700': isDarkMode }">
                  <div class="flex items-center mb-2">
                      <p class="text-lg sm:text-l md:text-xl lg:text-2xl xl:text-3xl mb-6" style="font-family: 'Viga'">Design</p>
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

              <div class="rounded-lg p-6 shadow-md" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-gray-700': isDarkMode }">
                <div class="flex items-center mb-2">
                    <p class="text-lg sm:text-l md:text-xl lg:text-2xl xl:text-3xl mb-6" style="font-family: 'Viga'">Communication</p>
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

          <div class="rounded-lg p-6 shadow-md relative mb-8 mr-8 ml-8" :class="{ 'text-white': isDarkMode, 'bg-third': !isDarkMode,'text-primary': !isDarkMode, 'bg-gray-700': isDarkMode }">
              <div class="flex items-center">
                <p class="text-lg sm:text-l md:text-xl lg:text-2xl xl:text-3xl mb-6" style="font-family: 'Viga'">Audiovisuel</p>
              </div>
              <div class="flex">
                <IconDaVinci class="h-8 w-8 mr-3 ml-5" />
                <div class="h-3 w-40 bg-white rounded-full overflow-hidden mt-2 relative">
                  <div class="h-full bg-progress absolute animate-davinci"></div>
                </div>            
              </div>
          </div>
          <h2 :class="{ 'text-secondary': isDarkMode }" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"style="font-family: 'Viga'">Mes projets</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6-4 ">
            <AfficheCard v-for="projet in tableauprojets" v-bind="projet" />
          </div>
          <RouterLink to="/projets">
            <button class="border border-white text-white bg-primary px-4 py-2 rounded relative overflow-hidden transition-transform duration-300 hover:scale-105">
              Voir mes projets
              <!-- Effet de survol -->
              <div class="absolute inset-0  opacity-25 transform scale-150"></div>
            </button>
          </RouterLink>
        </div>
      </div>
      <h2 :class="{ 'text-secondary': isDarkMode }" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"style="font-family: 'Viga'">Contact</h2>
      <div id="contact-form">
        <Contact />
      </div>
    </div>            
</template>

<style>
button {
  position: relative;
  overflow: hidden;
}

/* Style pour l'effet de survol */
button:hover > div {
  transform: scale(2); /* Fait apparaître l'effet de survol */
}
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




@font-face {
  font-family: "Viga";
  src: url("../fonts/Viga-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Poppins";
  src: url("../fonts/Poppins-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

</style>