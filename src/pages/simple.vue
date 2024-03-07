<script setup lang="ts">
import AfficheCard from '@/components/AfficheCard.vue';
import type { SchemaProjet } from '@/types';

    const maMaison :SchemaProjet = {
        nom_projet: "Projet",
        // prix: 1000,
        // adresse: "123 rue de la maison",
        // nbrChambres: 3,
        // nbrSDB: 2,
        // favori: true,
        image_projet: "\public\pexels-binyamin-mellish-106399.jpg",
        // surface: '30x40m²',
    };
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheCard :nom-maison="maMaison.nom_projet" :image="maMaison.image"/>
    </div>
    <AfficheCard nom-maison="Projet" :favori="true" image="\pexels-binyamin-mellish-106399.jpg"/>
</template>