<template>
  <div class="section-container">
    <TimelineComponent :items="educationItems.slice().reverse()" type="experience" :showTags="true" />
  </div>
</template>

<script setup>
import TimelineComponent from '@/components/TimelineComponent.vue';
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { locale, messages } = useI18n();

// Access the array directly
const educationItems = computed(() => messages.value[locale.value].experience.items);

</script>

<style lang="scss" scoped></style>