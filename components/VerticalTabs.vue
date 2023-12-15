<script setup>
const items = [{
  label: 'Inleiding',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Essentiele info',
  content: 'And, this is the content for Tab2'
}, {
  label: 'Zelfbehandeling',
  content: 'Finally, this is the content for Tab3'
}, {
  label: 'Rekoefening',
  content: 'And, this is the content for Tab4'
}]
</script>

<template>
  <UTabs :items="items" orientation="vertical" :ui="{ wrapper: 'flex items-center gap-4', list: { width: 'w-48' } }" />
</template>