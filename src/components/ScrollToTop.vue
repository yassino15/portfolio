<template>
    <button v-show="showButton" @click="scrollToTop" class="scroll-to-top">
        <i class="fas fa-angle-up"></i>
    </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const checkScroll = () => {
    showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

onMounted(() => {
    window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScroll)
})
</script>

<style scoped>
.scroll-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background-color: #42b883;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    z-index: 1000;
}

.scroll-to-top:hover {
    background-color: #3aa876;
    transform: translateY(-2px);
}
</style>