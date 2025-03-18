<!-- src/components/Sidebar.vue (updated with Composition API) -->
<template>
  <div class="sidebar">
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
          <a :href="`#${section.id}`" @click="scrollToSection(section.id)">
            <i :class="section.icon"></i>{{ $t(`sidebar.sections.${section.id}`) }}
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
import { ref } from 'vue';
import LanguageSwitcher from './LanguageSwitcher.vue';
import profileData from '@/config/profile.js';

const sections = ref([
  { id: 'intro', name: 'About Me', icon: 'fa-solid fa-address-card' },
  { id: 'education', name: 'Education', icon: 'fa-solid fa-graduation-cap' },
  { id: 'skills', name: 'Skills', icon: 'fa-solid fa-tools' },
  { id: 'experience', name: 'Experience', icon: 'fa-solid fa-briefcase' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-solid fa-folder-open' },
  { id: 'achievements', name: 'Achievements', icon: 'fa-solid fa-award' },
  { id: 'contact', name: 'Contact', icon: 'fa-solid fa-pen-to-square' }
]);

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
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
</style>