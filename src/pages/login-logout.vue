<script setup lang="ts">
import { ref, computed } from 'vue';
import { supabase } from '../supabase';
import type { User } from '@supabase/supabase-js';

// Récupération de l'utilisateur actuel
const user = ref<User | null>(null);

// Initialisation : vérifier si un utilisateur est connecté
supabase.auth.getUser().then(({ data }) => {
  user.value = data.user;
});

// Écouteur pour les changements d'état de connexion
supabase.auth.onAuthStateChange((_, session) => {
  user.value = session?.user || null;
});

// Computed pour vérifier si l'utilisateur est connecté
const isAuthenticated = computed(() => !!user.value);
</script>
<template>
  <div class="text-center mt-24">
    Clique sur le bouton pour te connecter avec Github
  </div>
  <div class="mt-10 mb-10 text-center bg-primary text-secondary ml-72 mr-72 rounded-full">
    <button v-if="isAuthenticated" @click="supabase.auth.signOut()">
      Se déconnecter ({{ user?.email }})
    </button>
    <button v-else @click="supabase.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: 'https://sofiane.mouadeb/projet/edit' } })">
      Se connecter avec Github
    </button>
  </div>
  <div>
    <p style="font-family: 'Viga'" class="text-center mt-24 mb-40">
      Une fois connecté, aller sur ce lien pour ajouter des projets : 
      https://sofiane.mouadeb/projet/edit
    </p>
  </div>
</template>
