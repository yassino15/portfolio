<!-- src/App.vue -->
<template>
  <div id="app" :class="{ 'dark-theme': isDarkTheme }">
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Theme toggle functionality (could be enhanced with localStorage for persistence)
const isDarkTheme = ref(true);

// You could add a function to toggle theme
function toggleTheme() {
  isDarkTheme.value = !isDarkTheme.value;
}

// Expose the toggleTheme function if you want to use it from a component
defineExpose({ toggleTheme });
</script>

<style lang="scss">
// @import '@/assets/scss/main.scss';
@use '@/assets/scss/main.scss';

#app {
  min-height: 100vh;
}

.dark-theme {
  --sidebar-bg: #1e2a3a;
  --main-bg: #f5f5f5;
  --text-light: #ffffff;
  --text-dark: #333333;
  // --accent-color: #42b883;
}
</style>