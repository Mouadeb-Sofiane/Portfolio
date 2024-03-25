<script setup lang="ts">
import { supabase, user } from '../supabase';
</script>

<template>
  <div class="mt-10 mb-10">
    <button v-if="user" @click="supabase.auth.signOut()">
      Se déconnecter ({{user.email}})
    </button>
    <button v-else @click="supabase.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: 'https://sofiane.mouadeb/projet/edit' } })">
      Se connecter avec Github
    </button>
  </div>
  <div>
    <p style="font-family: 'Viga'" class="text-center">Une fois connecté aller sur ce lien pour ajouter des projets. https://sofiane.mouadeb/projet/edit</p>
  </div>
</template>