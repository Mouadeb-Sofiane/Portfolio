<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheCard from "@/components/AfficheCard.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const projet = ref ({});

const route = useRoute('/projets/edit/[[id]]');
async function upsertCard(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
    const { data, error } = await supabase.from("Card").upsert(dataForm).select("id");
    if (error) node.setErrors([error.message])
    else {
        console.log("data :",data);
        router.push({name:"/projets/edit/[[id]]", params:{id: data[0].id}});
    }
}
if (route.params.id) {
    const { data, error } = await supabase.from("Card").select("*").eq("id", route.params.id).single();
    if (error) console.error(error);
    else projet.value = data;
}
</script>

<template>
    <div>
        <div class="p-2">
            <h2 class="text-2xl">
                Résultat (Prévisualisation)
            </h2>
            <AfficheCard v-bind="projet" />
        </div>
        <div class="p-2">
            <FormKit @submit="upsertCard" type="form" v-model="projet"
            :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="nom_projet" label="Nom du projet" />
                <FormKit name="description_projet" label="Description du projet" />

            </FormKit>
        </div>
    </div>
</template>