<template>
  <section class="skills-section" id="skills-section">
    <div class="container">
      <div class="section-header">
        <p class="section-description">
          {{ $t('skills.description', 'hello') }}
          {{ $t('skills.description') }}

        </p>
      </div>
      <div class="skills-container">
        <div v-for="skill in profile.skills" :key="skill.name" class="skill-item-container" :data-skill="skill.name">
          <div class="skill-item">
            <i :class="skill.icon"></i>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile from '@/config/profile.js';
</script>

<style lang="scss" scoped>
.skills-section {

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    perspective: 1000px;
  }

  .skill-item-container {
    position: relative;
    flex: 0 0 calc(16.666% - 1.5rem);
    margin-bottom: 2rem;
    transition: transform 0.3s ease;
    cursor: pointer;

    @media (max-width: 1200px) {
      flex: 0 0 calc(20% - 1.5rem);
    }

    @media (max-width: 992px) {
      flex: 0 0 calc(25% - 1.5rem);
    }

    @media (max-width: 768px) {
      flex: 0 0 calc(33.333% - 1.5rem);
    }

    @media (max-width: 576px) {
      flex: 0 0 calc(50% - 1.5rem);
    }

    &::before {
      content: attr(data-skill);
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background-color: var(--hover-color, #007bff);
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 4px;
      font-size: 0.8rem;
      opacity: 0;
      transition: opacity 0.3s ease, transform 0.3s ease;
      z-index: 10;
      font-weight: 500;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      white-space: nowrap;
    }

    &:hover {
      transform: translateY(-5px);

      &::before {
        opacity: 1;
        transform: translateX(-50%) translateY(-5px);
      }

      .skill-item {
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
        transform: translateY(-2px) rotateY(5deg);

        i,
        .skill-name {
          color: var(--hover-color, #007bff);
        }
      }
    }

    // Skill-specific colors with improved contrast and vibrancy
    &[data-skill="HTML"] {
      --hover-color: #e34f26;
    }

    &[data-skill="CSS"] {
      --hover-color: #1572b6;
    }

    &[data-skill="JavaScript"] {
      --hover-color: #f7df1e;
    }

    &[data-skill="Vue.js"] {
      --hover-color: #42b883;
    }

    &[data-skill="Vuex"] {
      --hover-color: #a071ff;
    }

    &[data-skill="Pinia"] {
      --hover-color: #ffd859;
    }

    &[data-skill="Nuxt.js"] {
      --hover-color: #00dc82;
    }

    &[data-skill="React.js"] {
      --hover-color: #00d8ff;
    }

    // Improved React color
    &[data-skill="React"] {
      --hover-color: #00d8ff;
    }

    // Alternative name
    &[data-skill="Bootstrap"] {
      --hover-color: #7952b3;
    }

    &[data-skill="Git"] {
      --hover-color: #f05032;
    }

    &[data-skill="Vuetify"] {
      --hover-color: #1867c0;
    }

    &[data-skill="Teamwork"] {
      --hover-color: #d5c022;
    }

    &[data-skill="Time Management"] {
      --hover-color: #ff9800;
    }

    &[data-skill="SASS"] {
      --hover-color: #cc6699;
    }

    &[data-skill="TypeScript"] {
      --hover-color: #3178c6;
    }

    &[data-skill="Tailwind"] {
      --hover-color: #38b2ac;
    }

    &[data-skill="Tailwind CSS"] {
      --hover-color: #38b2ac;
    }

    &[data-skill="Node.js"] {
      --hover-color: #68a063;
    }

    &[data-skill="Express"] {
      --hover-color: #353535;
    }

    &[data-skill="MongoDB"] {
      --hover-color: #47a248;
    }
  }

  .skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 140px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 1.5rem;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    overflow: hidden;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:hover::before {
      opacity: 1;
    }

    i {
      font-size: 3rem;
      color: #555;
      margin-bottom: 0.8rem;
      transition: color 0.3s ease, transform 0.3s ease;
    }

    .skill-name {
      font-size: 0.95rem;
      font-weight: 600;
      text-align: center;
      transition: color 0.3s ease;
      letter-spacing: 0.5px;
    }

    &:hover {
      i {
        transform: scale(1.1);
      }
    }
  }
}

// Add a subtle pulse animation for skills
@keyframes skillPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(var(--hover-color-rgb, 0, 123, 255), 0.4);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(var(--hover-color-rgb, 0, 123, 255), 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(var(--hover-color-rgb, 0, 123, 255), 0);
  }
}

// Add a subtle float animation
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px) rotate(1deg);
  }

  100% {
    transform: translateY(0px);
  }
}

// Apply the float animation to skill items on hover
.skill-item-container:hover .skill-item {
  animation: float 2s ease-in-out infinite;
}
</style>
