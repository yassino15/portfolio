<!-- src/views/Home.vue -->
<template>
  <div class="home-container" :class="{ 'rtl': isRTL }">
    <MobileNavbar @toggle-sidebar="toggleSidebar" />
    <Sidebar :isOpen="isSidebarOpen" @close="closeSidebar" />
    <MainContent />
    <ScrollToTop />
    <div class="overlay" v-if="isSidebarOpen" @click="closeSidebar"></div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Sidebar from '@/components/Sidebar.vue';
import MainContent from '@/components/MainContent.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
import MobileNavbar from '@/components/MobileNavbar.vue';

const { locale } = useI18n();

// Determine if the current language is RTL
const isRTL = computed(() => locale.value === 'ar');

// Sidebar state management
const isSidebarOpen = ref(false);

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>

<style lang="scss" scoped>
.home-container {
  display: flex;
  min-height: 100vh;
  position: relative;

  &.rtl {
    direction: rtl;
  }
}

// Overlay for mobile when sidebar is open
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
  }

  .overlay {
    display: block;
  }
}
</style>
