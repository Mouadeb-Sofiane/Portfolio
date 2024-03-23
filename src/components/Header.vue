<script setup lang="ts">
  document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  });
</script>

<template>
  <header>
      <nav class="bg-primary p-4">
          <div class="flex justify-between items-center">
            <RouterLink to="/">
                <div class="flex-shrink-0">
                    <img src="../assets/img/SM.png" class="h-8" alt="logo du site"/>
                </div>
            </RouterLink>
          <div class="md:hidden">
              <!-- Hamburger icon -->
              <button id="menu-toggle" type="button" class="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300">
              <svg viewBox="0 0 20 20" fill="currentColor" class="menu w-6 h-6">
                  <path fill-rule="evenodd" d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 110-2z" clip-rule="evenodd"></path>
              </svg>
              </button>
          </div>
          <div class="hidden md:block">
              <div class="flex space-x-4">
                  <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                      <li>
                          <RouterLink to="/" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary lg:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Accueil</RouterLink>
                      </li>
                      <li>
                          <RouterLink to="/projets" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary lg:dark:hover:bg-transparent dark:border-gray-700">Projets</RouterLink>
                      </li>
                      <li>
                          <RouterLink to="/quisuisje" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-400 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary dark:hover:bg-gray-700 dark:hover:text-primary lg:dark:hover:bg-transparent dark:border-gray-700">Qui suis-je ?</RouterLink>
                      </li>
                  </ul>
              </div>    
          </div>
        </div>
          <!-- Mobile menu, toggle classNamees based on menu state. -->
          <div id="mobile-menu" class="md:hidden hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                      <RouterLink to="/" class=" py-3 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Accueil</RouterLink>
                  </li>
                  <li>
                      <RouterLink to="/projet" class="py-3 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Projets</RouterLink>
                  </li>
                  <li>
                      <RouterLink to="/quisuisje" class=" py-3 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Qui suis-je ?</RouterLink>
                  </li>
              </ul>
          </div>
          </div>
      </nav>
  </header>
</template>

