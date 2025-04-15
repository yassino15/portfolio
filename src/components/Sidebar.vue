<template>
  <div class="sidebar" :class="{ 'open': isOpen }">
    <div class="sidebar-close-btn" @click="closeSidebar">
      <i class="fa-solid fa-times"></i>
    </div>

    <div class="profile">
      <div class="profile-image">
        <img :src="profileData.image" :alt="profileData.name" />
      </div>
      <h1 class="name">{{ $t('sidebar.name') }}</h1>
      <p class="title">{{ $t('sidebar.title') }}</p>
    </div>

    <nav class="navigation">
      <ul>
        <li v-for="(section, index) in sections" :key="index">
          <a :href="`#${section.id}`" :class="{ 'active': activeSection === section.id }"
            @click.prevent="scrollToSection(section.id)">
            <i :class="section.icon"></i>
            <span>{{ $t(`sidebar.sections.${section.id}`) }}</span>
          </a>
        </li>
      </ul>
    </nav>

    <LanguageSwitcher class="language-selector" />

    <div class="social-links">
      <a v-for="(social, index) in profileData.social" :key="index" :href="social.url" target="_blank">
        <i :class="social.icon"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, defineProps, defineEmits } from 'vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import profileData from '@/config/profile.js';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const sections = ref([
  { id: 'intro', name: 'About Me', icon: 'fa-solid fa-address-card' },
  { id: 'education', name: 'Education', icon: 'fa-solid fa-graduation-cap' },
  { id: 'skills', name: 'Skills', icon: 'fa-solid fa-tools' },
  { id: 'experience', name: 'Experience', icon: 'fa-solid fa-briefcase' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-solid fa-folder-open' },
  { id: 'contact', name: 'Contact', icon: 'fa-solid fa-pen-to-square' }
]);

// Register ScrollToPlugin if not already registered
if (!gsap.registerPlugin) {
  gsap.registerPlugin(ScrollToPlugin);
}

const activeSection = ref('intro');

const navItems = ref([
  { id: 'intro', label: 'sidebar.about', icon: 'fa-solid fa-address-card' },
  { id: 'education', label: 'sidebar.education', icon: 'fa-solid fa-graduation-cap' },
  { id: 'skills', label: 'sidebar.skills', icon: 'fa-solid fa-tools' },
  { id: 'languages', label: 'sidebar.languages', icon: 'fa-solid fa-language' },
  { id: 'experience', label: 'sidebar.experience', icon: 'fa-solid fa-briefcase' },
  { id: 'portfolio', label: 'sidebar.portfolio', icon: 'fa-solid fa-folder-open' },
  { id: 'contact', label: 'sidebar.contact', icon: 'fa-solid fa-pen-to-square' }
]);

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    // Use GSAP for smooth scrolling
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: element,
        offsetY: 20
      },
      ease: "power2.inOut",
      onComplete: () => {
        // Update active section after scrolling
        activeSection.value = id;
        // Close sidebar on mobile after navigation
        closeSidebar();
      }
    });
  }
}

function closeSidebar() {
  emit('close');
}

// Function to update active section based on scroll position
const updateActiveSection = () => {
  const sections = document.querySelectorAll('.section');
  const scrollPosition = window.scrollY + 100; // Add offset to trigger earlier

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSection.value = section.id;
      break;
    }
  }
};

// Listen for custom event from the animation directive
const handleSectionInView = (event) => {
  if (event.detail && event.detail.sectionId) {
    activeSection.value = event.detail.sectionId;
  }
};

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection);
  window.addEventListener('sectionInView', handleSectionInView);

  // Initial check for active section
  updateActiveSection();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection);
  window.removeEventListener('sectionInView', handleSectionInView);
});
</script>

<style lang="scss">
.sidebar {
  width: 300px;
  background-color: var(--sidebar-bg);
  color: var(--text-light);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  z-index: 1000;

  .sidebar-close-btn {
    display: none; // Hidden by default on desktop
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: var(--text-light);
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: var(--accent-color);
    }
  }

  .profile {
    text-align: center;
    margin-bottom: 0rem;

    &-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .name {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .title {
      font-size: 1rem;
      opacity: 0.8;
    }
  }

  .navigation {
    margin: 1rem 0;

    ul {
      list-style: none;
      padding: 0;

      li {
        min-height: clamp(2rem, 4.8780487805vh, 2.7rem);

        a {
          color: var(--text-light);
          text-decoration: none;
          display: block;
          padding: 0.5rem;
          border-left: 3px solid transparent;
          transition: all 0.3s;

          &:hover {
            border-left-color: var(--accent-color);
            background-color: rgba(255, 255, 255, 0.1);
          }

          &.active {
            border-left-color: var(--accent-color);
            background-color: rgba(255, 255, 255, 0.1);
            font-weight: bold;
          }
        }

        i {
          padding-inline: 8px;
        }
      }
    }
  }

  .language-selector {
    margin-top: auto;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;

    span {
      cursor: pointer;
      opacity: 0.6;
      transition: opacity 0.3s;

      &.active,
      &:hover {
        opacity: 1;
      }
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
      color: var(--text-light);
      font-size: 1.2rem;
      transition: color 0.3s;

      &:hover {
        color: var(--accent-color);
      }
    }
  }
}

// Mobile styles
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    width: 280px;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);

    &.open {
      transform: translateX(0);
    }

    .sidebar-close-btn {
      display: block;
    }
  }
}
</style>
