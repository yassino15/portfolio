<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';
const isDarkTheme = ref(true);

// You could add a function to toggle theme
function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value;
}

// Provide the theme state to all components
// provide('isDarkTheme', isDarkTheme);

// Expose the toggleTheme function if you want to use it from a component
defineExpose({ toggleTheme });
</script>

<style lang="scss">
// @import '@/assets/scss/main.scss';
@use '@/assets/scss/main.scss';

#app {
  min-height: 100vh;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-theme {
  --sidebar-bg: #1e2a3a;
  --main-bg: #f5f5f5;
  --text-light: #ffffff;
  --text-dark: #333333;
  // --accent-color: #42b883;
}
</style>