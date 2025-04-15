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
  justify-content: center;
  padding: 0 2rem;


  .intro-content {
    // max-width: 85%;
    max-width: 800px;
    text-align: center;

    h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: .3rem;

      .text-primary {
        color: var(--accent-color);
      }
    }

    .inline-list {
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;

      .list-item {
        display: inline-flex;
        align-items: center;
        font-size: 1rem;
        margin-right: 1rem;
        color: var(--accent-color);


        i {
          margin-right: 0.5rem;
          color: var(--accent-color);
        }
      }

      .dot {
        font-size: 2rem;
        font-weight: bold;
        color: var(--accent-color);
        // margin-inline: 20px;
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
      margin-top: 25px;
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
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;

    .btn {
      padding: 0.75rem 2rem;
      border-radius: 9999px;
      font-weight: 600;
      font-size: 1rem;
      text-decoration: none;
      transition: background-color 0.3s ease, color 0.3s ease;

      &.primary {
        background: linear-gradient(to right, #1488cc, #2b32b2);
        color: #fff;

        &:hover {
          background: linear-gradient(to right, #0f5c9b, #1c2478);
        }
      }

      &.secondary {
        border: 2px solid var(--accent-color);
        color: var(--accent-color);
        background-color: transparent;

        &:hover {
          background-color: rgba(66, 98, 184, 0.1);
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .intro-section {
    padding: 0;
    min-height: 88svh;
    margin-top: 3rem;

    .intro-content {
      h1 {
        font-size: 2.4rem;
      }
    }

    .cta-buttons {
      .btn {
        padding: .6rem 1rem;
        margin-bottom: 12px;
      }
    }
  }
}
</style>