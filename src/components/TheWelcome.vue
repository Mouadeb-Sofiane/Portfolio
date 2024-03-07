<script setup lang="ts">
import { ref, type Ref } from 'vue'
import IconMoon from './icon/IconMoon.vue';
import IconSun from './icon/IconSun.vue';

const mouseX: Ref<number> = ref(0)
const mouseY: Ref<number> = ref(0)
const darkMode: Ref<boolean> = ref(false)
const nom_projet: Ref<string> = ref("Nom du projet")

const handleMouseMove = (event: MouseEvent): void => {
  mouseX.value = (event.clientX - (event.target as HTMLElement).getBoundingClientRect().left - (event.target as HTMLElement).offsetWidth / 2) / 5
  mouseY.value = (event.clientY - (event.target as HTMLElement).getBoundingClientRect().top - (event.target as HTMLElement).offsetHeight / 2) / 5
}

const resetCard = (): void => {
  mouseX.value = 0
  mouseY.value = 0
}

const toggleMode = (): void => {
  darkMode.value = !darkMode.value
}

const cardStyle = {
  transform: `rotateY(${mouseX.value / 10}deg) rotateX(${mouseY.value / 10}deg)`
}
</script>

<template>
  <div :class="{ 'dark-mode': darkMode }">
    <button @click="toggleMode" class="fixed right-0 ">
      <div class="p-10">
        <IconMoon class="w-10 h-10 rounded-full bg-gray-800 p-1" v-if="!darkMode" />
        <IconSun class="w-10 h-10 rounded-full bg-white p-1" v-else />
      </div>
    </button>
    <p>je me nomme sofiane</p>
    <p>je me nomme sofiane</p> 
    <p class="text" :class="{ 'text-white': darkMode, 'text-black': !darkMode }">je me nomme sofiane</p>
    <p>{{ nom_projet }}</p>
  </div>

  <div class="flex justify-center items-center h-screen">
    <div 
      class="relative w-64 h-40 cursor-pointer perspective"
      @mousemove="handleMouseMove"
      @mouseleave="resetCard"
    >
      <div 
        class="absolute inset-0 bg-white shadow-md transform transition-transform duration-500 hover:rotate-6"
        :style="cardStyle"
      >
        <div class="p-4">
          <h2 class="text-lg font-bold mb-2">Card Title</h2>
          <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="split left">
      <h1>The Designer</h1>
      <a href="#" class="button">Read More</a>
    </div>
    <div class="split right">
      <h1>The Programmer</h1>
      <a href="#" class="button">Read More</a>
    </div>
  </div>
</template>
<style scoped>
:root {
  --container-bg-color: #333;
  --left-bg-color: rgba(223, 39, 39, 0.7);
  --left-button-hover-color: rgba(161, 11, 11, 0.3);
  --right-bg-color: rgba(43, 43, 43, 0.8);
  --right-button-hover-color: rgba(92, 92, 92, 0.3);
  --hover-width: 75%;
  --other-width: 25%;
  --speed: 1000ms;
}

html, body {
  padding:0;
  margin:0;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

h1 {
  font-size: 4rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
}

.button {
  display: block;
  position: absolute;
  left: 50%;
  top: 40%;
  height: 2.5rem;
  padding-top: 1.3rem;
  width: 15rem;
  text-align: center;
  color: #fff;
  border: #fff solid 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  transform: translateX(-50%);
}

.split.left .button:hover {
  background-color: var(--left-button-hover-color);
  border-color: var(--left-button-hover-color);
}

.split.right .button:hover {
  background-color: var(--right-button-hover-color);
  border-color: var(--right-button-hover-color);
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--container-bg-color);
}

.split {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.split.left {
  left:0;
  background: url('https://image.ibb.co/m56Czw/designer.jpg') center center no-repeat;
  background-size: cover;
}

.split.left:before {
  position:absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--left-bg-color);
}

.split.right {
  right:0;
  background: url('https://image.ibb.co/m3ZbRb/programmer.png') center center no-repeat;
  background-size: cover;
}

.split.right:before {
  position:absolute;
  content: "";
  width: 100%;
  height: 100%;
  background: var(--right-bg-color);
}

.split.left, .split.right, .split.right:before, .split.left:before {
  transition: var(--speed) all ease-in-out;
}

.hover-left .left {
  width: var(--hover-width);
}

.hover-left .right {
  width: var(--other-width);
}

.hover-left .right:before {
  z-index: 2;
}


.hover-right .right {
  width: var(--hover-width);
}

.hover-right .left {
  width: var(--other-width);
}

.hover-right .left:before {
  z-index: 2;
}

@media(max-width: 800px) {
  h1 {
    font-size: 2rem;
  }

  .button {
    width: 12rem;
  }
}

@media(max-height: 700px) {
  .button {
    top: 70%;
  }
}
.perspective {
  perspective: 1000px;
}
.dark-mode {
  background-color: #1E1E1E; /* Couleur de fond en mode sombre */
  color: white; /* Couleur de texte en mode sombre */
}

.text {
  color: black; /* Couleur de texte en mode clair */
}

.dark-mode .text {
  color: white; /* Couleur de texte en mode sombre */
}
</style>
