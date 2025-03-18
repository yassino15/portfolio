<!-- src/components/sections/Intro.vue -->
<template>
  <div class="intro-section">
    <div class="intro-content">
      <!-- <h1>Hello, I'm {{ profile.name }}</h1> -->
      <h1>{{ $t('intro.greeting') }} <span class="text-primary">{{ $t('intro.greetingg') }}</span></h1>
      <div class="inline-list">
        <div class="list-item"><i class="fa-solid fa-envelope list-item-icon"></i>{{ profile.contact.email }}</div>
        <div class="list-item dot">.</div>
        <div class="list-item"><i class="fa-solid fa-phone list-item-icon"></i>{{ profile.contact.phone }}</div>
      </div>
      <!-- <h2>{{ profile.title }}</h2> -->
      <p class="bio">
        {{ $t('sidebar.bio') }}
      </p>

      <div class="cta-buttons">
        <a href="#contact" class="btn primary">{{ $t('intro.contactMe') }}</a>
        <a href="#portfolio" class="btn secondary">{{ $t('intro.viewWork') }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import profile from '@/config/profile.js';

const { t } = useI18n();
</script>

<style lang="scss">
@use "sass:color";

.intro-section {
  min-height: 100vh;
  display: flex;
  align-items: center;

  .intro-content {
    max-width: 85%;


    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .inline-list {
      .list-item {
        display: inline-block;
        font-size: 19px;
        position: relative;
        color: var(--accent-color);

        i {
          margin-right: 8px;
        }
      }

      .dot {
        margin-inline: 20px;
      }
    }

    h2 {
      font-size: 1.5rem;
      color: var(--accent-color);
      margin-bottom: 1.5rem;
    }

    .bio {
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
      margin-top: 30px;
    }
  }

  .contact-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;

    .contact-item {
      display: flex;
      align-items: center;
      margin-right: 1.5rem;

      i {
        margin-right: 0.5rem;
        color: var(--accent-color);
      }
    }
  }

  .cta-buttons {
    display: flex;
    gap: 1rem;

    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-weight: 600;
      text-decoration: none;
      transition: all 0.3s;

      &.primary {
        background-color: var(--accent-color);
        color: white;

        &:hover {
          background-color: color.adjust(#1488cc, $lightness: -10%);
        }
      }

      &.secondary {
        border: 2px solid var(--accent-color);
        color: var(--accent-color);

        &:hover {
          background-color: rgba(66, 98, 184, 0.1);
        }
      }
    }
  }
}
</style>