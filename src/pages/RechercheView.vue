<template>
    <div class="bg-black">
      <h1>Test planète</h1>
      <div class="divdiv">
        <p>Vous vous êtes égarez dans l'espace.</p>
        <button>
          <router-link to="/home">Retournez sur Terre</router-link>  
        </button>
        <Recherche />
      </div>  
    </div>
</template>
  
<script>
  import Recherche from '../components/Recherche.vue';
  
  export default {
    components: {
      Recherche,
    },
  };
</script>
<style>
.divdiv {
    width: 50%;
    height: 50%;
}
</style>