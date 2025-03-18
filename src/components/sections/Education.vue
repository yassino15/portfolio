<template>
  <div class="section-container">
    <TimelineComponent :items="educationItems.slice().reverse()" type="education" />
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";
import TimelineComponent from "@/components/TimelineComponent.vue";

const { locale, messages } = useI18n();

// Access the array directly
const educationItems = computed(() => messages.value[locale.value].educations.items);
</script>

<style lang="scss" scoped></style>
