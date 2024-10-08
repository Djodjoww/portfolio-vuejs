<template>
  <section class="portfolio">
    <h2 class="portfolio-title">Mes Projets</h2>
    <div class="portfolio-content">
      <div class="project-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :title="project.title"
          :image="project.image"
          :description="project.description"
          :link="project.link"
          :technologies="project.technologies"
        />
      </div>
      <!-- Mention spéciale à droite -->
      <div class="coming-soon">
        <p>Le meilleur reste à venir...</p>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  components: { ProjectCard },
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'MON CV HTML',
          image: require('@/assets/project1.jpg'),
          description: 'Mon Cv personnel construit avec le langage HTML dans le cadre de ma formation de développeur Web.',
          link: 'Devoir CV C.E.F/CV.html',
          technologies: ['HTML','CSS'],
        },
        {
          id: 2,
          title: 'Dynamiser un espace commentaires',
          image: require('@/assets/project2.jpg'),
          description:
            'Second devoir pour ma formation consistant à intégrer des scripts dans une page Web ainsi que de corriger des erreurs et remédier aux vulnérabilités détectées.',
          link: '/DEVOIRCEF2/devoirespacecom/index.html',
          technologies: ['HTML', 'JAVASCRIPT'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.portfolio {
  padding: 50px 20px;
  background-color: #f8f9fa;
  border-radius: 15px;
}

.portfolio-content {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Projet sur la gauche et mention sur la droite */
  gap: 30px;
  align-items: center;
}

.coming-soon {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.coming-soon p {
  font-size: 2.9em;
  font-weight: bold;
  color: #2c3e50;
  text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  margin: 0;
  animation: fadeIn 5s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.portfolio-title {
  font-size: 3em;
  text-align: center;
  margin-bottom: 40px;
  color: #2c3e50;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  position: relative;
}

.portfolio-title::after {
  content: '';
  display: block;
  width: 80px;
  height: 5px;
  background: linear-gradient(90deg, #353434, #3498db);
  margin: 10px auto 0;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  padding: 0 20px;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.project-card h3 {
  font-size: 1.5em;
  color: #ffffff;
  background-color: #3498db;
  padding: 10px 15px;
  text-align: center;
  border-radius: 5px 5px 0 0;
  margin: 0;
}

.project-card p {
  font-size: 1em;
  color: #7f8c8d;
  padding: 20px;
  text-align: justify;
  background: rgba(255, 255, 255, 0.95);
  position: absolute;
  bottom: 0;
  width: 100%;
  transition: all 0.3s ease;
  transform: translateY(100%);
}

.project-card:hover p {
  transform: translateY(0);
}

.project-card img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.5s;
}

.project-card:hover img {
  transform: scale(1.1);
}
</style>
