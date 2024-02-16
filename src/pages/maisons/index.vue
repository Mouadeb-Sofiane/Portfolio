<script setup lang="ts">
import AfficheCard from '@/components/AfficheCard.vue';
import type { SchemaProjet } from '@/types';
import { supabase } from '@/supabase';
 
console.log(supabase);
    
let {data : tableauprojet, error} = await supabase
    .from('Card')
    .select('*');
</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <AfficheCard v-for="projet in tableauprojet" v-bind="projet" />
    </div>
</template>