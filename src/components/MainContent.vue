<!-- src/components/MainContent.vue -->
<template>
  <main class="main-content">
    <section id="intro" class="section" v-observe-visibility="onVisibilityChanged">
      <div :class="['section-content', { 'animate__animated animate__fadeInUp': isVisible.intro }]">
        <Intro />
      </div>
    </section>
    <hr>
    <section id="education" class="section" v-observe-visibility="onVisibilityChanged">
      <div :class="['section-content', { 'animate__animated animate__fadeInUp': isVisible.education }]">
        <h2 class="section-title">{{ $t('educations.title') }}</h2>
        <Education />
      </div>
    </section>

    <section id="skills" class="section" v-observe-visibility="onVisibilityChanged">
      <div :class="['section-content', { 'animate__animated animate__fadeInUp': isVisible.skills }]">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <Skills />
      </div>
    </section>

    <!-- Add the Languages section here -->
    <section id="languages" class="section" v-observe-visibility="onVisibilityChanged">
      <div :class="['section-content', { 'animate__animated animate__fadeInUp': isVisible.languages }]">
        <h2 class="section-title">{{ $t('languages.title') }}</h2>
        <Languages />
      </div>
    </section>

    <section id="experience" class="section" v-observe-visibility="onVisibilityChanged">
      <div :class="['section-content', { 'animate__animated animate__fadeInUp': isVisible.experience }]">
        <h2 class="section-title">{{ $t('experience.title') }}</h2>
        <Experience />
      </div>
    </section>

    <section id="portfolio" class="section" v-observe-visibility="onVisibilityChanged">
      <div :class="['section-content', { 'animate__animated animate__fadeInUp': isVisible.portfolio }]">
        <h2 class="section-title">{{ $t('portfolio.title') }}</h2>
        <Portfolio />
      </div>
    </section>

    <section id="achievements" class="section" v-observe-visibility="onVisibilityChanged">
      <div :class="['section-content', { 'animate__animated animate__fadeInUp': isVisible.achievements }]">
        <h2 class="section-title">{{ $t('achievements.title') }}</h2>
        <Achievements />
      </div>
    </section>

    <section id="contact" class="section" v-observe-visibility="onVisibilityChanged">
      <div :class="['section-content', { 'animate__animated animate__fadeInUp': isVisible.contact }]">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <Contact />
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ObserveVisibility } from 'vue-intersection-observer';
import Intro from '@/components/sections/Intro.vue';
import Education from '@/components/sections/Education.vue';
import Skills from '@/components/sections/Skills.vue';
import Languages from '@/components/sections/Languages.vue'; // Import the Languages component
import Experience from '@/components/sections/Experience.vue';
import Portfolio from '@/components/sections/Portfolio.vue';
import Achievements from '@/components/sections/Achievements.vue';
import Contact from '@/components/sections/Contact.vue';
import Sidebar from './Sidebar.vue';

const isVisible = ref({
  intro: false,
  education: false,
  skills: false,
  languages: false, // Add languages to the visibility tracking
  experience: false,
  portfolio: false,
  achievements: false,
  contact: false
});

const onVisibilityChanged = (isVisible, entry) => {
  if (isVisible && entry.target.id) {
    isVisible.value[entry.target.id] = true;
  }
};

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        isVisible.value[entry.target.id] = true;
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});
</script>

<style lang="scss">
.main-content {
  flex: 1;
  margin-left: 300px; // Same as sidebar width
  background-color: var(--main-bg);
  color: var(--text-dark);
  padding: 0 2rem;
  overflow-y: auto;

  .section {
    padding: 0 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
      border-bottom: none;
    }

    .section-content {
      opacity: 0; // Start hidden

      &.animate__animated {
        opacity: 1; // Show when animated
        animation-duration: 0.8s;
      }
    }
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background-color: var(--accent-color);
    }
  }
}
</style>
