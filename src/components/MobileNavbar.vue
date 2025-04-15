<template>
    <div class="mobile-navbar">
        <button class="menu-toggle" @click="toggleSidebar">
            <i class="fa-solid fa-bars"></i>
        </button>
        <h1 class="mobile-title">{{ $t('sidebar.name') }}</h1>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['toggle-sidebar']);

const toggleSidebar = () => {
    emit('toggle-sidebar');
};
</script>

<style lang="scss">
.mobile-navbar {
    display: none; // Hidden by default on desktop
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: var(--sidebar-bg);
    color: var(--text-light);
    padding: 0 1rem;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .menu-toggle {
        background: none;
        border: none;
        color: var(--text-light);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;

        &:hover {
            color: var(--accent-color);
        }
    }

    .mobile-title {
        font-size: 1.2rem;
        margin: 0;
    }
}

// Show only on mobile
@media (max-width: 768px) {
    .mobile-navbar {
        display: flex;
    }
}

// Hide on desktop
@media (min-width: 769px) {
    .mobile-navbar {
        display: none;
    }
}
</style>