<script setup lang="ts">
  import AffichePageCard from "./AffichePageCard.vue";
  import { useRouter, useRoute } from "vue-router";
  import { supabase } from "@/supabase";
  import type { SchemaProjet } from "@/types";
  import { ref } from "vue";

  const projet = ref<SchemaProjet>({
      nom_projet: "string",
      image_projet: "string",
      lien_projet: "string",
      description_projet: "string",
      titre_page: "string",
      description_page: "string",
      video_p: "string",
      logo: "string",
      desc1: "string",
      desc2: "string",
      desc3: "string",
      desc4: "string",
      desc5: "string",
      desc6: "string",
      img1: "string",
      img2: "string",
      img3: "string",
      img4: "string",
      img5: "string",
      img6: "string",
      img7: "string",
      img8: "string",
      img9: "string",
      img10: "string",
      img11: "string",
      img12: "string",
      title1: "string",
      title2: "string",
      title3: "string",
      title4: "string",
      title5: "string",
      title6: "string",
  });

  const router = useRouter();
  const route = useRoute('/projets/[id]');

  if (route.params.id) {
      const { data, error } = await supabase.from("Card").select("*").eq("id", route.params.id).single();
      if (error) console.error(error);
      else projet.value = data;
  }
</script>

<template>
  <div class="p-2">
    <AffichePageCard v-bind="projet" :nom_projet="projet.nom_projet" :image_projet="projet.image_projet" :lien_projet="projet.lien_projet" :description_projet="projet.description_projet" :titre_page="projet.titre_page" :description_page="projet.description_page" :video_p="projet.video_p" :logo="projet.logo" :desc1="projet.desc1" :desc2="projet.desc2" :desc3="projet.desc3" :desc4="projet.desc4" :desc5="projet.desc5" :desc6="projet.desc6" />
  </div>
</template>
a<::<==