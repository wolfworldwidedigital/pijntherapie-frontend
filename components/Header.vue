<template>
    <header class="bg-gradient-to-r from-black to-blue-800 py-4 px-8 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-white text-2xl font-bold">
        <router-link to="/">Pijntherapie.com</router-link>
      </div>
  
      <!-- Navigation -->
      <nav class="space-x-6">
        <router-link to="/spieren" class="text-white hover:text-gray-300">Spieren</router-link>
        <router-link to="/symptomen" class="text-white hover:text-gray-300">Symptomen</router-link>
        <router-link to="/lichaamsdelen" class="text-white hover:text-gray-300">Lichaamsdelen</router-link>
        <router-link to="/blogs" class="text-white hover:text-gray-300">Blogs</router-link>
      </nav>
  
      <!-- Buttons -->
      <div class="space-x-4">
        <button class="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full">Login</button>
        <button class="text-blue-500 bg-white hover:bg-gray-100 py-2 px-4 rounded-full">Sign Up</button>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  
  
  