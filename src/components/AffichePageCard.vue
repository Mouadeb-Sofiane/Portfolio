<script setup lang="ts">
import { defineProps } from 'vue';
import type { SchemaPageCard } from '@/types';
defineProps<SchemaPageCard>()
</script>

<template>
    
    <div class="">
        {{ titre }}
        {{ description }}
    </div>
</template>