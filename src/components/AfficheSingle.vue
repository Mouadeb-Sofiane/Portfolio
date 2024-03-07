<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AffichePageCard from "./AffichePageCard.vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";


const router = useRouter();
const projet = ref ({});
const route = useRoute('/projets/[[id]]');

async function upsertProjet(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Card").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        router.push({name:"/projets/[[id]]", params:{id: data[0].id}});
    }
}

if (route.params.id) {
    const { data, error } = await supabase.from("Card").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else projet.value = data;
}
</script>

<template>
  
  <div class="p-2">
    <AffichePageCard v-bind="projet" :nom_projet="projet.nom_projet" :image_projet="projet.image_projet" :lien_projet="projet.lien_projet" :description_projet="projet.description_projet" :titre_page="projet.titre_page" :description_page="projet.description_page" />
  </div>

</template>