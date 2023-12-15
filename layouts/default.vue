<template>
    <div>
      <Nuxt />
      <ChatWidget />
    </div>
  </template>
  
  <script>
  import ChatWidget from '~/components/ChatWidget.vue';
  
  export default {
    components: {
      ChatWidget
    }
  };
  </script>
  