<script setup lang="ts">
import { rootSymbol } from "@formkit/vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};

// Ferme le menu mobile si un lien est cliqué et défile vers une section
const handleMenuClick = (sectionId?: string) => {
  isOpen.value = false;
  if (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<template>
  <header>
    <nav class="bg-primary p-4">
      <div class="container mx-auto flex justify-between items-center">
        <RouterLink to="/" class="flex-shrink-0">
          <img src="../assets/img/SM-logo.png" class="h-12" alt="logo du site" />
        </RouterLink>
        <!-- Bouton du menu mobile -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
        >
          <svg v-if="!isOpen" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 110-2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg v-else viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M6 6a.75.75 0 011.06 0L10 8.94l2.47-2.47a.75.75 0 111.06 1.06L11.06 10l2.47 2.47a.75.75 0 11-1.06 1.06L10 11.06l-2.47 2.47a.75.75 0 01-1.06-1.06L8.94 10 6.47 7.53A.75.75 0 016 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <!-- Menu pour les grands écrans -->
        <div class="hidden md:block">
          <ul class="flex space-x-4">
            <li>
              <a @click.prevent="handleMenuClick('projets')" href="#" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-gray-50">Projets</a>
            </li>
            <li>
              <a @click.prevent="handleMenuClick('quisuisje')" href="#" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-gray-50">Qui suis-je ?</a>
            </li>
            <li>
              <a @click.prevent="handleMenuClick('monparcourscolaire')" href="#" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-gray-50">Parcours scolaire</a>
            </li>
            <li>
              <a @click.prevent="handleMenuClick('contact')" href="#" class="block py-2 pr-4 pl-3 text-gray-300 hover:text-gray-50">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- Menu pour les appareils mobiles -->
      <div id="mobile-menu" :class="{ 'hidden': !isOpen }" class="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <ul class="flex flex-col space-y-4">
          <li>
            <a @click.prevent="handleMenuClick('projets')" href="#" class="block py-3 pr-4 pl-3 text-gray-200 rounded bg-primary-700">Projets</a>
          </li>
          <li>
            <a @click.prevent="handleMenuClick('quisuisje')" href="#" class="block py-3 pr-4 pl-3 text-gray-200 rounded bg-primary-700">Qui suis-je ?</a>
          </li>
          <li>
            <a @click.prevent="handleMenuClick('monparcourscolaire')" href="#" class="block py-3 pr-4 pl-3 text-gray-200 rounded bg-primary-700">Parcours scolaire</a>
          </li>
          <li>
            <a @click.prevent="handleMenuClick('contact')" href="#" class="block py-3 pr-4 pl-3 text-gray-200 rounded bg-primary-700">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="bg-secondary h-0.5"></div>
  </header>
</template>

