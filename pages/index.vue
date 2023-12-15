<template>
  <div class="bg-container">
    <div class="overlay">
      <div class="content bg-gradient-to-r from-black to-blue-800 py-4 px-8 flex flex-col min-h-screen">
        <Header />
        <main class="flex-grow">
          <component :is="currentView" />
          <button @click="toggleView">Toggle View</button>
          <div class="navigation">
            <!-- Navigation buttons to switch currentView -->
          </div>
        </main>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import BodyScan from '@/components/BodyScan.vue';

// Since you're using <script setup>, you can reference the component directly
const currentView = ref(BodyScan);

function toggleView() {
  // If you have other components to toggle with, import them and use them here
  // currentView.value = currentView.value === BodyScan ? OtherComponent : BodyScan;
}
</script>

<style scoped>
.bg-container {
  background-image: url('/assets/img/SettingStage.png');
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Ensure it covers the whole viewport */
}

.overlay {
  /* Overlay styling */
  background-color: rgba(0, 0, 0, 0.5); /* Example: Black with 50% opacity */
  min-height: 100vh; /* Match parent's height */
}
</style>

