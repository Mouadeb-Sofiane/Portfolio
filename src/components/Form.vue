<script setup lang="ts">
import { ref } from "@vue/reactivity";
import AfficheCard from "@/components/AfficheCard.vue";
import { FormKit } from "@formkit/vue";
import { supabase } from "@/supabase";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const projet = ref ({});
const route = useRoute('/projets/edit/[[id]]');

async function upsertProjet(dataForm: any, node: { setErrors: (arg0: any[]) => void; }) {
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
            <FormKit @submit="upsertProjet" type="form" v-model="projet"
            :config="{
                classes: {
                    input: 'p-1 rounded border-gray-300 shadow-sm border',
                    label: 'text-gray-600 italic',
                    outer: 'py-2',
                    },
                }">
                <FormKit name="nom_projet" label="Nom du projet" />
                <FormKit name="image_projet" label="Image du projet" />
                <FormKit name="description_projet" label="Description du projet" />
                <FormKit name="logo" type="date" label="Logo du projet" />
                <FormKit name="title1" label="titre 1" />
                <FormKit name="title2" label="titre 2" />
                <FormKit name="title3" label="titre 3" />
                <FormKit name="title4" label="titre 4" />
                <FormKit name="title5" label="titre 5" />
                <FormKit name="title6" label="titre 6" />
                <FormKit name="img1" label="image 1" />
                <FormKit name="img2" label="image 2" />
                <FormKit name="img3" label="image 3" />
                <FormKit name="img7" label="image 4" />
                <FormKit name="img8" label="image 5" />
                <FormKit name="img9" label="image 6" />
                <FormKit name="img10" label="image 7" />
                <FormKit name="img11" label="image 8" />
                <FormKit name="img12" label="image 9" />
                <FormKit name="description1" label="Première description" />
                <FormKit name="description2" label="Deuxième description" />
                <FormKit name="description2b" label="Troisième description" />
                <FormKit name="description3" label="Quatrième description" />
                <FormKit name="description4" label="Cinquième description" />
                <FormKit name="maquette" label="Lien Figma" />
                <FormKit name="icon" label="Icon des applications utilisés" />
                <FormKit name="icon2" label="Icon des applications utilisés" />
                <FormKit name="icon3" label="Icon des applications utilisés" />
                <FormKit name="icon4" label="Icon des applications utilisés" />
                <FormKit name="icon5" label="Icon des applications utilisés" />
                <FormKit name="icon6" label="Icon des applications utilisés" />
                <FormKit name="lien_projet" label="Lien des projets" />
            </FormKit>
        </div>
    </div>
</template>