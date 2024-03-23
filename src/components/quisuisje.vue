<script setup lang="ts">
  import IconSun from './icon/IconSun.vue';
  import IconMoon from './icon/IconMoon.vue';
  import Cardfut from './Cardfut.vue';
  import { ref, onMounted } from 'vue';


  const isDarkMode = ref(true);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    if (isDarkMode.value) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  onMounted(() => {
    const cards = document.querySelectorAll('.card1');
    cards.forEach(el => {
      el.addEventListener('mousemove', e => {
        let elRect = el.getBoundingClientRect();
        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midcardwidth = elRect.width / 2;
        let midcardheight = elRect.height / 2;

        let angleY = (x - midcardwidth) / 8;
        let angleX = (y - midcardheight) / 8;

        el.children[0].style.transform = `rotateX(${-angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
      });
      el.addEventListener('mouseleave', () => {
        el.children[0].style.transform = `rotateX(0deg) rotateY(0deg)`;
      });
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
                

                <p class="mb-8 md:ml-2 lg:ml-2 leading-relaxed text-justify font-semibold" :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }" style="font-family: 'Inter'">Je suis actuellement étudiant au BUT MMI de Montbéliard.
                  Je souhaite devenir un développeur web full stack polyvalent.
                  Je suis polyvalent autant pour le front-end que le back-end.</p>
                <div class="flex justify-center">
                    <button
                        class="inline-flex md:ml-2 lg:ml-2 text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg" style="font-family: 'Viga'">Contact</button>
                </div>
            </div>
            
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16">
                <div class="flex justify-center text-center ">
                    <div class="card animated-card">
                        <img class="w-16" src="../assets/img/logo1.png" alt="">
                        <div class="description">
                            <div class="name" >Sofiane Mouadeb</div>
                            <div class="stats-container">
                                <div class="figure">
                                    <div>95 BACKEND</div>
                                    <div>89 FRONTEND</div>
                                    <div>75 DESIGN</div>
                                </div>
                                <div class="figure">
                                    <div>70 SEO</div>
                                    <div>82 UX DESIGN</div>
                                    <div>85 AUDIOVISUEL</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <IconDev class="h-96 w-96 mr-3 ml-5"/>
          <h2 :class="{ 'text-secondary': isDarkMode }" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Qui suis-je ?</h2>
          

          <div class="container1">
              <div class="card1">
                <div class="content-card1">
                  <Cardfut />
                </div>  
              </div>
            </div>
            <div>
              <p>Je suis Sofiane Mouadeb, un étudiant passionné et dévoué du BUT MMI (Métiers du Multimédia et de l’Internet) de Montbéliard, spécialisé dans le développement web. Ayant suivi un parcours enrichissant en BAC général, j'ai acquis une solide base dans les technologies et les principes du développement web grâce à des matières telles que la NSI et les Mathématiques.
                 Mon intérêt pour le développement web s'est pleinement manifesté au cours de mes études au BUT MMI, où j'ai décidé de me spécialiser dans cette branche dynamique et en constante évolution. À seulement 19 ans, je m'immerge totalement dans ce domaine, toujours à la recherche de nouvelles connaissances et compétences.
                 Ma curiosité et ma soif d'apprendre m'ont poussé à explorer différents aspects du développement web, de la programmation front-end à la conception back-end, en passant par l'optimisation de l'expérience utilisateur. Ces compétences, acquises à la fois dans le cadre académique et à travers mes projets personnels, me permettent de concevoir des solutions web innovantes et efficaces.
              </p>
            </div>
            </div>

            
</template>

<style>
.card {
  height: 500px;
  border: 4px #f1f1f1 solid;
  max-width: 290px;
  width: 90%;
  background: url(../assets/img/sof11.png), #f1f1f1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: black;
  font-family: 'Viga';
  box-shadow: 10px 10px 5px #888888;
}

.dark-card {
  height: 500px;
  border: 4px #1D201A solid;
  max-width: 290px;
  width: 90%;
  background: url(../assets/img/sof11.png), #1D201A;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: whitesmoke;
  font-family: 'Viga';
  box-shadow: 10px 10px 5px #000;
}

.description {
  height: 200px;
  background: #f1f1f1;
}

.description-dark {
  height: 200px;
  background: #2d2929;
}

.name {
  background: #f1f1f1;
  font-size: 25px;
  text-align: center;
}

.stats-container {
  display: flex;
  width: 100%;
  justify-content: center;
  height: inherit;
  gap: 20px;
  text-justify: auto;
}

.figure {
  display: flex;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  font-size: 14px;
  margin-top: 10px;
  align-items: center;
  height: inherit;
  font-weight: 600;
  border-radius: 10px;
}


.card1 {
  width: 300px;
  height: 450px;
  perspective: 1000px;
}
.content-card1 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 25px;
  transition: all 0.15s ease-out;
}

.content-card1 img {
  width: 20%;
  height: 20%;
  object-fit: cover;
}

@font-face {
  font-family: "Viga";
  src: url("../fonts/Viga-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
</style>