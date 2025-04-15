<template>
  <main class="main-content">
    <section id="intro" class="section" v-animate-section="{ type: 'fade' }">
      <div class="section-content">
        <Intro />
      </div>
    </section>
    <hr>
    <section id="education" class="section" v-animate-section="{ type: 'slide-right' }">
      <div class="section-content">
        <h2 class="section-title">{{ $t('educations.title') }}</h2>
        <Education />
      </div>
    </section>

    <section id="skills" class="section" v-animate-section="{ type: 'zoom' }">
      <div class="section-content">
        <h2 class="section-title">{{ $t('skills.title') }}</h2>
        <Skills />
      </div>
    </section>

    <section id="languages" class="section" v-animate-section="{ type: 'slide-left' }">
      <div class="section-content">
        <h2 class="section-title">{{ $t('languages.title') }}</h2>
        <Languages />
      </div>
    </section>

    <section id="experience" class="section" v-animate-section="{ type: 'default' }">
      <div class="section-content">
        <h2 class="section-title">{{ $t('experience.title') }}</h2>
        <Experience />
      </div>
    </section>

    <section id="portfolio" class="section" v-animate-section="{ type: 'bounce' }">
      <div class="section-content">
        <h2 class="section-title">{{ $t('portfolio.title') }}</h2>
        <Portfolio />
      </div>
    </section>

    <section id="contact" class="section" v-animate-section="{ type: 'fade' }">
      <div class="section-content">
        <h2 class="section-title">{{ $t('contact.title') }}</h2>
        <Contact />
      </div>
    </section>
  </main>
</template>

<script setup>
import Intro from '@/components/sections/Intro.vue';
import Education from '@/components/sections/Education.vue';
import Skills from '@/components/sections/Skills.vue';
import Languages from '@/components/sections/Languages.vue';
import Experience from '@/components/sections/Experience.vue';
import Portfolio from '@/components/sections/Portfolio.vue';
import Contact from '@/components/sections/Contact.vue';
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
    padding: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    min-height: 200px; // Ensure sections have enough height for animations
    scroll-margin-top: 20px; // Adds margin when scrolling to this element

    &:last-child {
      border-bottom: none;
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
      transition: width 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }
  }
}

// Mobile styles
@media (max-width: 768px) {
  .main-content {
    margin-left: 0;
    padding-top: 60px; // Add space for the mobile navbar
    width: 100%;
    padding: 0 1.2rem;
    margin-top: 3rem;

    .section {
      padding: 0;
      scroll-margin-top: 70px; // Increase for mobile to account for navbar
    }
  }
}
</style>
