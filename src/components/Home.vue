<script setup lang="ts">
import { ref } from 'vue'
import Contact from './Contact.vue'
import IconSun from './icon/IconSun.vue'
import IconMoon from './icon/IconMoon.vue'
import { onMounted } from 'vue'
import IconVuejs from './icon/IconVuejs.vue'
import IconHtml from './icon/IconHtml.vue'
import IconCss from './icon/IconCss.vue'
import IconTailwindcss from './icon/IconTailwindcss.vue'
import IconWordpress from './icon/IconWordpress.vue'
import IconPhp from './icon/IconPhp.vue'
import IconDrive from './icon/IconDrive.vue'
import IconFigma from './icon/IconFigma.vue'
import IconIllustrator from './icon/IconIllustrator.vue'
import IconPhotoshop from './icon/IconPhotoshop.vue'
import IconTrello from './icon/IconTrello.vue'
import IconCanva from './icon/IconCanva.vue'
import IconDaVinci from './icon/IconDaVinci.vue'
import IconPocketbase from './icon/IconPocketbase.vue'
import IconSupabase from './icon/IconSupabase.vue'
import SofianePhoto from './icon/SofianePhoto.vue'
import IconDev from './icon/IconDev.vue'
import AfficheCard from './AfficheCard.vue'
import Card from './Card.vue'
import Skills from './Skills.vue'
import { supabase } from '@/supabase'

import QuiSuisJe from '@/components/quisuisje.vue'

const isDarkMode = ref(true)

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

let { data: tableauprojets, error } = await supabase.from('Card').select('*')

onMounted(() => {
  const textContainer = document.getElementById('text-container')
  const imageContainer = document.getElementById('image-container')

  textContainer?.addEventListener('animationend', () => {
    imageContainer?.classList.add('show')
  })
})

const downloadCV = () => {
  // Lien vers votre CV
  const cvURL = 'https://drive.google.com/file/d/1f7ouaFwEvraNIEDBiOnOJO07z9LLXxzb/view?usp=sharing'
  // Créer un élément <a> et lui attribuer le lien de téléchargement
  const link = document.createElement('a')
  link.href = cvURL
  link.download = 'SofianeMouadeb-CV.pdf'

  // Simuler un clic sur le lien
  link.click()
}

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

</script>

<template>
  <div
    :class="{ dark: isDarkMode, 'bg-gray-100': !isDarkMode, 'bg-primary': isDarkMode }"
    class="min-h-screen pl-7 pr-7"
  >
    <!-- Utilisation d'icônes pour le mode sombre/clair -->
    <button
      @click="toggleDarkMode"
      class="fixed top-24 right-4 p-2 bg-accent border border-gray-900 rounded-full dark:text-gray-300"
    >
      <IconSun v-if="isDarkMode" class="h-6 w-6" />
      <IconMoon v-else class="h-6 w-6" />
    </button>

    <div class="container mx-auto flex pt-8 md:flex-row flex-col items-center">
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-10"
      >
        <h1
          :class="{ 'text-secondary': isDarkMode }"
          class="title-font sm:text-6xl text-3xl mb-4 font-medium"
          style="font-family: 'Viga'"
        >
          Sofiane
        </h1>
        <h1
          :class="{ 'text-secondary': isDarkMode }"
          class="title-font sm:text-6xl text-3xl mb-4 ml-14 font-medium"
          style="font-family: 'Viga'"
        >
          Mouadeb
        </h1>
        <h2
          :class="{ 'text-secondary': isDarkMode }"
          class="title-font sm:text-2xl mt-5 md:ml-2 lg:ml-2 text-xl mb-4 font-medium"
          style="font-family: 'Viga'"
        >
          Developpeur Web backend et frontend
        </h2>

        <p
          class="mb-8 md:ml-2 lg:ml-2 leading-relaxed text-justify font-semibold mt-4"
          :class="{ 'text-secondary': isDarkMode, 'text-primary': !isDarkMode }"
          style="font-family: 'Poppins'"
        >
          Je suis actuellement étudiant au BUT MMI de Montbéliard. Je souhaite devenir un
          développeur web full stack polyvalent. Je suis polyvalent autant pour le front-end que le
          back-end.
        </p>
        <div class="flex gap-14">
          <div class="flex justify-end">
            <!-- Utilisation de justify-end pour aligner à droite -->
            <a href="#contact-form">
              <button
                style="font-family: 'Viga'"
                class="border mb-20 border-white text-white bg-primary px-4 py-2 rounded relative overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                Contact
                <div class="absolute inset-0 opacity-25 transform scale-150"></div>
              </button>
            </a>
          </div>
          <button
            @click="downloadCV"
            style="font-family: 'Viga'"
            class="border mb-20 border-primary text-primary bg-gray-100 px-4 py-2 rounded relative overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            Voir mon CV
            <div class="absolute inset-0 opacity-25 transform scale-150"></div>
          </button>
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-16">
        <div class="flex justify-center text-center">
          <!-- Augmentation de la taille de la photo en ajustant les classes Tailwind CSS -->
          <SofianePhoto
            class="h-48 w-48 lg:h-64 lg:w-64 flex justify-center items-center rounded-full z-10"
            alt="Sofiane-Mouadeb_photo"
          />
          <!-- Utilisez les classes h-48 et w-48 pour définir une taille de 48x48 et ajustez selon vos préférences -->
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <a href="#competences">
        <div class="bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 V3"
            ></path>
          </svg>
        </div>
      </a>
    </div>

    <div>
      <div :class="{ 'text-secondary': isDarkMode }">
        <Skills />  
        <section id="projets">
        <h2
          :class="{ 'text-secondary': isDarkMode }"
          class="text-2xl sm:text-3xl mb-10 mt-24 md:text-4xl lg:text-5xl xl:text-6xl"
          style="font-family: 'Viga'"
        >
          Mes projets
        </h2>
        </section>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6-4">
          <AfficheCard v-for="projet in tableauprojets" v-bind="projet" />
        </div>
        <RouterLink to="/projets">
          <a :class="{ 'text-primary': !isDarkMode }" id="btn1" style="font-family: Viga">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Voir mes projets
            <div class="absolute inset-0 opacity-25 transform scale-150"></div>
          </a>
        </RouterLink>
      </div>
    </div>
    <div class="pb-20"></div>



    <section id="quisuisje">
    <h2
      :class="{ 'text-secondary': isDarkMode }"
      style="font-family: 'Viga'"
      class="text-2xl mb-7 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      Mes centres d'intérêts
    </h2>
   

    <div class="flex flex-col md:flex-row items-center justify-center md:justify-between">
      <div class="container1 mb-20 md:mr-8 flex justify-center">
        <div class="card1 mt-20 mb-4 ml-16">
          <div class="content-card1 flex justify-center">
            <img class="w-80" src="../assets/img/IMG_0232.png" alt="">
          </div>
        </div>
     </div>


      <div :class="{ 'text-secondary': isDarkMode }" class="w-full mt-7 mb-10 md:w-2/3">
        <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
          Je suis Sofiane Mouadeb, un étudiant passionné du BUT MMI (Métiers du Multimédia et de
          l’Internet) de Montbéliard, spécialisé dans le développement web, la communication et le
          design. Ayant suivi un parcours enrichissant en BAC général, j'ai acquis une solide base
          dans les technologies et les principes du développement web grâce à des matières telles
          que la NSI et les Mathématiques qui ont été deux de mes trois spécialités, avec la science
          économique et sociale. Mon intérêt pour le développement web s'est pleinement manifesté
          dès mes études au lycée Edouard Belin à Vesoul, notamment lors des cours de NSI. C'est à
          ce moment que j'ai décidé de me spécialiser dans cette branche dynamique et en constante
          évolution en poursuivant mes études au BUT MMI à Montbéliard.
        </p>
        <br />
        <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
          À l'âge de 19 ans, je m'immerge totalement dans ce domaine, toujours avide de nouvelles
          connaissances et compétences. En parallèle de mes études, je suis également passionné de
          sport, notamment le football, le vélo et la boxe. Le football, en particulier, a toujours
          été une passion pour moi depuis mon enfance jusqu'à maintenant, jouant un rôle important
          dans ma vie.
        </p>
        <br />
        <p class="mb-3 md:mb-0 md:pr-8 text-justify" style="font-family: 'Poppins'">
          Ma curiosité naturelle m'a poussé à explorer différents aspects du développement web, de
          la programmation front-end à la conception back-end, en passant par l'optimisation de
          l'expérience utilisateur. Ces compétences, acquises à la fois dans le cadre académique et
          à travers mes projets personnels, me permettent de concevoir des solutions web innovantes
          et efficaces, tout en gardant un équilibre entre mes passions pour le sport et ma carrière
          dans le domaine du multimédia et de l'internet.
        </p>
      </div>
    </div>
    <div class="pb-20"></div>
    </section>

    <section id="monparcourscolaire">
    <h2
      id="monparcourscolaire"
      :class="{ 'text-secondary': isDarkMode }"
      style="font-family: 'Viga'"
      class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
    >
      Mon parcours scolaire
    </h2>
    <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
      <div class="py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
        <div class="relative text-gray-700 antialiased text-sm font-semibold">
          <!-- Vertical bar running through middle -->
          <div
            class="hidden sm:block w-1 bg-blue-300 absolute h-full left-1/2 transform -translate-x-1/2"
          ></div>
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
              <div
                class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
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
              <div
                class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
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
                    Choix des spécialités avec épanouissement et envie d'apprendre toujours plus
                    dans l'informatique.
                  </div>
                </div>
              </div>
              <div
                class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
              >
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
                    Études en BUT MMI, spécialisation dans le développement web principalement ainsi
                    que la communication, le design et l'audiovisuel.
                  </div>
                </div>
              </div>
              <div
                class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    <section id="contact">
    <h2
      :class="{ 'text-secondary': isDarkMode }"
      class="text-2xl sm:text-3xl md:text-4xl mt-20 lg:text-5xl xl:text-6xl"
      style="font-family: 'Viga'"
    >
      Contact
    </h2>
    <div id="contact-form">
      <Contact />
    </div>
  </section>

  </div>
</template>

<style>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(0px);
  }
}

/* Appliquer l'animation de rebond */
.bounce {
  animation: bounce 1s infinite;
}

#btn1 {
  position: relative;
  display: flex;
  padding: 25px 30px;
  margin: auto;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s;
  letter-spacing: 4px;
  overflow: hidden;
  width: 350px;
  justify-content: center;
  background-clip: text;
  -webkit-background-clip: text;
  color: linear-gradient(135deg, #00d9ff, #001aff 31%, #2f00ff 69%);
}

#btn1:hover {
  transform: scale(0.95);
  box-shadow: 0 1px 4px -1px var(--shadow);
}

#btn1 span {
  position: absolute;
  display: block;
}

#btn1 span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #00d9ff, #001aff 31%, #2f00ff 69%);
  animation: animate1 1s linear infinite;
}

#btn1 span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #00d9ff, #001aff 31%, #2f00ff 69%);
  animation: animate2 1s linear infinite;
  animation-delay: 1s;
}

#btn1 span:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #00d9ff, #001aff 31%, #2f00ff 69%);
  animation: animate3 1s linear infinite;
  animation-delay: 1s;
}

#btn1 span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #00d9ff, #001aff 31%, #2f00ff 69%);
  animation: animate4 1s linear infinite;
  animation-delay: 1s;
}

@keyframes animate1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

@keyframes animate2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

@keyframes animate3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

@keyframes animate4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}

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
    width: 95%;
    border-radius: 9999px; /* Utilisez une valeur suffisamment grande pour obtenir un coin très arrondi */
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
.animate-progress {
  animation: progress 9s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
}
.animate-neuf {
  animation: neuf 9s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
}

.animate-six {
  animation: six 9s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
}

.animate-septcinq {
  animation: septcinq 9s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
}

.animate-davinci {
  animation: davinci 9s ease forwards; /* Réglez la durée et le timing de l'animation selon vos préférences */
}

.animate-progress {
  animation: progress 9s ease forwards;
}

.animate-progress1 {
  animation: progress 9s ease forwards;
}

@font-face {
  font-family: 'Viga';
  src: url('../fonts/Viga-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Poppins';
  src: url('../fonts/Poppins-Regular.ttf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
</style>
