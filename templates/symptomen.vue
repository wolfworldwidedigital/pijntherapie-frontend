<template>
    <div>
      <h1>{{ symptomenData.name }}</h1>
      <div>
        <h2>Primaire Symptomen</h2>
        <ul>
          <li v-for="symptom in symptomenData.primaireSymptomenTab.primaireSymptomen" :key="symptom._ref">
            {{ symptom._ref }}
          </li>
        </ul>
      </div>
      <div>
        <h2>Secundaire Symptomen</h2>
        <ul>
          <li v-for="symptom in symptomenData.secundaireSymptomenTab.secundaireSymptomen" :key="symptom._ref">
            {{ symptom._ref }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useSanity } from '@nuxtjs/sanity'
  
  const { data } = useSanity()
  const symptomenData = ref({})
  
  onMounted(async () => {
    // Fetch data for the "symptomen" schema
    const response = await data.query('*[_type == "symptomen"][0]')
    symptomenData.value = response[0] || {}
  })
  </script>
  