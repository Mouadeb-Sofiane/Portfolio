<script setup lang="ts">
  import IconSun from './icon/IconSun.vue';
  import IconMoon from './icon/IconMoon.vue';
  import Cardfut from './Cardfut.vue';
  import { ref, onMounted } from 'vue';
  import IconCheck from './icon/IconCheck.vue';

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
                

                <p class="mb-8 md:ml-2 lg:ml-2 leading-relaxed text-justify font-semibold" :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }" style="font-family: 'Poppins'">Je suis actuellement étudiant au BUT MMI de Montbéliard.
                  Je souhaite devenir un développeur web full stack polyvalent.
                  Je suis polyvalent autant pour le front-end que le back-end.</p>
                <div class="flex justify-center">
                  <a href="#monparcourscolaire">
                          <button class="border mb-20 border-white text-white bg-primary px-4 py-2 rounded relative overflow-hidden transition-transform duration-300 hover:scale-105">
                              Mon parcours scolaire
                              <div class="absolute inset-0 opacity-25 transform scale-150"></div>
                          </button>
                      </a>
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
        <IconDev class="h-96 w-96 mr-3 ml-5 "/>
          <h2 :class="{ 'text-secondary': isDarkMode }" style="font-family: 'Viga'" class="text-2xl mb-7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Mes centres d'intérêts</h2>
          
          <div class="flex flex-col md:flex-row justify-center md:justify-between">
            <div class="container1 mb-20 md:mr-8">
              <div class="card1">
                <div class="content-card1">
                  <Cardfut />
                </div>  
              </div>
            </div>

            <div :class="{ 'text-secondary': isDarkMode }" class="w-full mt-7 mb-10 md:w-2/3">
              <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
                Je suis Sofiane Mouadeb, un étudiant passionné du BUT MMI (Métiers du Multimédia et de l’Internet) de Montbéliard, spécialisé dans le développement web, la communication et le design. Ayant suivi un parcours enrichissant en BAC général, j'ai acquis une solide base dans les technologies et les principes du développement web grâce à des matières telles que la NSI et les Mathématiques qui ont été deux de mes trois spécialités, avec la science économique et sociale. Mon intérêt pour le développement web s'est pleinement manifesté dès mes études au lycée Edouard Belin à Vesoul, notamment lors des cours de NSI. C'est à ce moment que j'ai décidé de me spécialiser dans cette branche dynamique et en constante évolution en poursuivant mes études au BUT MMI à Montbéliard.
              </p>             
              <br>                  
              <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
                À l'âge de 19 ans, je m'immerge totalement dans ce domaine, toujours avide de nouvelles connaissances et compétences. En parallèle de mes études, je suis également passionné de sport, notamment le football, le vélo et la boxe. Le football, en particulier, a toujours été une passion pour moi depuis mon enfance jusqu'à maintenant, jouant un rôle important dans ma vie.
              </p>
              <br>
              <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
                Ma curiosité naturelle m'a poussé à explorer différents aspects du développement web, de la programmation front-end à la conception back-end, en passant par l'optimisation de l'expérience utilisateur. Ces compétences, acquises à la fois dans le cadre académique et à travers mes projets personnels, me permettent de concevoir des solutions web innovantes et efficaces, tout en gardant un équilibre entre mes passions pour le sport et ma carrière dans le domaine du multimédia et de l'internet.
              </p>
            </div>
          </div>


          <h2 id="monparcourscolaire" :class="{ 'text-secondary': isDarkMode }" style="font-family: 'Viga'" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Mon parcours scolaire</h2>
              <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
                <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
                  <div class="relative text-gray-700 antialiased text-sm font-semibold">
                    <!-- Vertical bar running through middle -->
                    <div class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"></div>
                    <!-- Left section, set by justify-start and sm:pr-8 -->
                    <div class="mt-6 sm:mt-0 sm:mb-12">
                      <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-start w-full mx-auto items-center">
                          <div class="w-full sm:w-1/2 sm:pr-8">
                            <p :class="{ 'text-secondary': isDarkMode }">2019</p>
                            <div class="p-4 bg-white rounded shadow">
                              Entrée au lycée Edouard Belin à Vesoul.
                            </div>
                          </div>
                        </div>
                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!-- Right section, set by justify-end and sm:pl-8 -->
                    <div class="mt-6 sm:mt-0 sm:mb-12">
                      <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-end w-full mx-auto items-center">
                          <div class="w-full sm:w-1/2 sm:pl-8">
                            <p :class="{ 'text-secondary': isDarkMode }">2019-2020</p>
                            <div class="p-4 bg-white rounded shadow">
                              Cours de SNT et découverte du développement web.
                            </div>
                          </div>
                        </div>
                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <!-- Left section, set by justify-start and sm:pr-8 -->
                    <div class="mt-6 sm:mt-0 sm:mb-12">
                      <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-start w-full mx-auto items-center">
                          <div class="w-full sm:w-1/2 sm:pr-8">
                            <p :class="{ 'text-secondary': isDarkMode }">2020-2022</p>
                            <div class="p-4 bg-white rounded shadow">
                              Choix des spécialités avec épanouissement et envie d'apprendre toujours plus dans l'informatique.
                            </div>
                          </div>
                        </div>
                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <IconCheck />
                        </div>
                      </div>
                    </div>
                    <!-- Right section, set by justify-end and sm:pl-8 -->
                    <div class="mt-6 sm:mt-0">
                      <div class="flex flex-col sm:flex-row items-center">
                        <div class="flex justify-end w-full mx-auto items-center">
                          <div class="w-full sm:w-1/2 sm:pl-8">
                            <p :class="{ 'text-secondary': isDarkMode }">2022-2025</p>

                            <div class="p-4 bg-white rounded shadow">
                              Études en BUT MMI, spécialisation dans le développement web principalement ainsi que la communication, le design et l'audiovisuel.
                            </div>
                          </div>
                        </div>
                        <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
  font-family: "Poppins";
  src: url("../fonts/Poppins-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Viga";
  src: url("../fonts/Viga-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
</style>