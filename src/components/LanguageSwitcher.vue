<template>
    <div class="language-switcher">
        <span v-for="lang in availableLanguages" :key="lang.code" @click="switchLanguage(lang.code)"
            :class="{ active: currentLanguage === lang.code }">
            {{ lang.name }}
        </span>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const currentLanguage = computed(() => locale.value);

const availableLanguages = ref([
    { code: 'en', name: 'English' },
    { code: 'ar', name: 'العربية' }
]);

function switchLanguage(lang) {
    locale.value = lang;
    // Also change document direction for RTL support
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
}

// Initialize direction on component mount
if (locale.value === 'ar') {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
}
</script>

<style scoped>
.language-switcher {
    display: flex;
    gap: 1rem;
}

.language-switcher span {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity 0.3s;
}

.language-switcher span.active,
.language-switcher span:hover {
    opacity: 1;
}
</style>