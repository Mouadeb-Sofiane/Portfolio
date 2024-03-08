<script setup lang="ts">
import { ref, onMounted } from 'vue';

const texts = [
  "Sofiane Mouadeb",
  "Je suis un développeur web fullstack"
];

const delay = 100; // Délai entre chaque caractère en millisecondes
const typingSpeed = 100; // Vitesse de frappe en millisecondes

let currentTextIndex = 0;
let currentCharIndex = 0;

const text1 = ref("");
const text2 = ref("");

const animateTyping = () => {
  if (currentTextIndex < texts.length) {
    if (currentCharIndex < texts[currentTextIndex].length) {
      text1.value += texts[currentTextIndex].charAt(currentCharIndex);
      text2.value += texts[currentTextIndex].charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(animateTyping, typingSpeed);
    } else {
      // Réinitialiser l'index des caractères pour le prochain texte
      currentCharIndex = 0;
      // Passer au texte suivant
      currentTextIndex++;
      // Ajouter un délai avant de commencer le prochain texte
      setTimeout(animateTyping, delay);
    }
  }
};

onMounted(() => {
  animateTyping();
});
</script>

<template>
  <main>
    <h1 ref="text1" class="typing-animation"></h1>
    <p ref="text2" class="typing-animation"></p>
    <h1>Sofiane Mouadeb</h1>
    <p>Je suis un développeur web fullstack</p>
    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="avatar" />
  </main>
</template>


<style>
.typing-animation {
  display: inline-block;
  border-right: 2px solid transparent;
  animation: typing 1s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #000;
  }
}
</style>