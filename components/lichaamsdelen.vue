<template>
    <div>
      <h1>Lichaamsdelen</h1>
      <div>
        <img
          :src="lichaamsdelenData.featuredImage.asset.url"
          :alt="lichaamsdelenData.name"
          :style="{
            maxWidth: '100%',
            width: '100%',
            height: 'auto'
          }"
          @click="handleImageClick"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useSanity } from '@nuxtjs/sanity'
  
  const { data } = useSanity()
  const lichaamsdelenData = ref({})
  
  onMounted(async () => {
    // Fetch data for the "lichaamsdelen" schema
    const response = await data.query('*[_type == "lichaamsdelen"][0]')
    lichaamsdelenData.value = response[0] || {}
  })
  
  const handleImageClick = () => {
    // Handle the image click event if needed
    // For example, you can open a modal or navigate to another page
  }
  </script>
  