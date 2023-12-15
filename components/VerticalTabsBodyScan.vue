<template>
    <nav class="space-y-4">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        @click="handleTabClick(tab.content)"
        class="text-blue-500 hover:text-blue-700"
      >
        {{ tab.label }}
      </router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'VerticalTabsBodyScan',
    props: {
      items: {
        type: Array,
        required: true,
      },
    },
    methods: {
      handleTabClick(content) {
        // Emit the tab-clicked event with the content of the clicked tab
        this.$emit('tab-clicked', content);
      },
    },
  };
  </script>  