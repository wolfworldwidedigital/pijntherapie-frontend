<script setup>
import { ref, onMounted } from 'vue'
import { useSanity } from '@nuxtjs/sanity'

const { data } = useSanity()
const spierenData = ref([])

const items = [
  {
    label: 'Inleiding',
    content: 'This is the content shown for Tab1',
  },
  {
    label: 'Essentiële info',
    content: 'And, this is the content for Tab2',
  },
  {
    label: 'Zelfbehandeling',
    content: 'Finally, this is the content for Tab3',
  },
  {
    label: 'Rekoefening',
    content: 'And, this is the content for Tab4',
  },
]

onMounted(async () => {
  // Fetch data for all "spieren" entries
  const response = await data.query('*[_type == "spieren"]')
  spierenData.value = response || []
})
</script>

<template>
  <div data-v-inspector="pages/templates/spieren.vue:25:3">
    <VerticalTabs :items="items" orientation="vertical" :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }" />
    <!-- Other content specific to your template -->
  </div>
</template>
