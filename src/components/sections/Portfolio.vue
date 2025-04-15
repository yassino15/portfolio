<template>
  <section class="portfolio-section">
    <div class="section-header">
      <p class="section-description">
        {{ $t('portfolio.description') }}
      </p>
    </div>

    <div class="projects-grid">
      <div v-for="(project, index) in profile.portfolio" :key="index" class="project-card">
        <div class="project-image-container">
          <img :src="project.image" :alt="project.title" class="project-image">
          <div class="project-overlay">
            <a :href="project.link" target="_blank" rel="noopener noreferrer" class="view-project">
              <i class="fas fa-eye"></i>
              <span>{{ $t('portfolio.viewProject') }}</span>
            </a>
          </div>
        </div>
        <div class="project-info">
          <a :href="project.link" target="_blank" rel="noopener noreferrer" class="project-title">
            <h3>{{ project.title }}</h3>
          </a>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="(tech, techIndex) in project.technologies" :key="techIndex" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profile from '@/config/profile';
</script>

<style scoped>
.portfolio-section {
  padding: 0;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-heading, #2c3e50);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
}

.project-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.project-image-container {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16/9;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-image-container:hover .project-overlay {
  opacity: 1;
}

.project-image-container:hover .project-image {
  transform: scale(1.05);
}

.view-project {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none;
  font-weight: 600;
  transform: translateY(10px);
  transition: transform 0.3s ease;
}

.project-image-container:hover .view-project {
  transform: translateY(0);
}

.view-project i {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.project-info {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
}

.project-title {
  text-decoration: none;
  color: inherit;
}

.project-title h3 {
  font-size: 1.25rem;
  transition: color 0.2s ease;
}

.project-title:hover h3 {
  color: #3498db;
}

.project-description {
  font-size: 0.95rem;
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  font-size: 0.75rem;
  background-color: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .project-info {
    padding: 1rem;
  }
}
</style>
