<script setup lang="ts">
import AfficheCard from '@/components/AfficheCard.vue';
import { supabase } from '@/supabase';
import type { SchemaCard } from '@/types';


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
