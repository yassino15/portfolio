<!-- src/views/Home.vue -->
<template>
  <div class="home-container" :class="{ 'rtl': isRTL }">
    <Sidebar />
    <MainContent />
    <ScrollToTop />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import Sidebar from '@/components/Sidebar.vue';
import MainContent from '@/components/MainContent.vue';
import ScrollToTop from '@/components/ScrollToTop.vue'

const { locale } = useI18n();

// Determine if the current language is RTL
const isRTL = computed(() => locale.value === 'ar');
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

@media (max-width: 768px) {
  .home-container {
    flex-direction: column;
  }
}
</style>