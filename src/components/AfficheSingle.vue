<script lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '@/supabase'
import type { SchemaProjet } from '@/types'

export default {
  setup() {
    const route = useRoute()

    const projectId = ref<number | null>(null)
    const project = ref<SchemaProjet | null>(null)

    onMounted(async () => {
      projectId.value = route.params.id
      await fetchProjectDetails()
    })

    async function fetchProjectDetails() {
      if (!projectId.value) return

      const { data, error } = await supabase
        .from<SchemaProjet>
        .select('*')
        .eq('id', projectId.value)
        .single()

      if (error) {
        console.error('Error fetching project:', error.message)
      } else {
        Card.value = data
      }
    }

    return {
      Card
    }
  }
}
</script>

<template>
  <div class="max-w-3xl mx-auto mt-10" v-if="project">
    <h1 class="text-3xl font-bold mb-5">{{ Card.nom_projet }}</h1>
    <div class="bg-gray-100 rounded-lg p-5">
      <img :src="Card.image_projet" alt="Project Image" class="rounded-lg mb-5" />
      <p class="text-lg">{{ Card.description_projet }}</p>
      <!-- Afficher d'autres détails du projet ici -->
    </div>
  </div>
</template>
