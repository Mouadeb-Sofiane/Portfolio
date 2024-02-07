<script setup lang="ts">
import AfficheMaison from '@/components/AfficheMaison.vue';
import type { SchemaOffreMaison } from '@/types';

const tableaumaisons = []
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheMaison v-for="maison in tableaumaisons" v-bind="maison" />

    </div>
</template>