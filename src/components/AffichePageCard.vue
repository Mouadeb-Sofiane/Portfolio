<script setup lang="ts">
    import { defineProps } from 'vue';
    import type { SchemaProjet } from '@/types';

    defineProps<SchemaProjet>();
</script>

<template>
    <div class="">
      <h1>{{ titre_page }}</h1>
      <p>{{ description_page }}</p>
    </div>
</template>
  

  