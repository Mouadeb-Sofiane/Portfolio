<script setup lang="ts">
    import { defineProps } from 'vue';
    import type { SchemaProjet } from '@/types';

    defineProps<SchemaProjet>();
</script>

<template>
    <div class="">
      cc
      <h1>{{ nom_projet }}</h1>
      <p>{{ description_projet }}</p>
    </div>
</template>
  

  