<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>

<template>
  <div class="text-center mt-24">
  Clique sur le bouton pour te connecter avec Github
  </div>
  <div class="mt-10 mb-10 text-center bg-primary text-secondary ml-72 mr-72 rounded-full">
    <button v-if="user" @click="supabase.auth.signOut()" >
      Se déconnecter ({{user.email}})
    </button>
    <button v-else @click="supabase.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: 'https://sofiane.mouadeb/projet/edit' } })">
      Se connecter avec Github
    </button>
  </div>
  <div>
    <p style="font-family: 'Viga'" class="text-center mt-24 mb-40">Une fois connecté aller sur ce lien pour ajouter des projets. https://sofiane.mouadeb/projet/edit</p>
  </div>
</template>