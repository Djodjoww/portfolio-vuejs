<template>
  <div class="project-card">
    <!-- Lien autour de l'image pour rendre l'image cliquable -->
    <a :href="link" target="_blank">
      <img :src="image" :alt="title" class="clickable-image" />
    </a>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    description: String,
    link: String, // Propriété pour le lien du projet
    technologies: Array,
  },
};
</script>

<style scoped>
.project-card {
  position: relative;
  overflow: visible; /* Permet à l'image de sortir de la box */
  transition: transform 0.3s;
  text-align: center;
  background: none; /* Enlève l'effet de box */
}

.clickable-image {
  width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.project-card:hover .clickable-image {
  transform: scale(1.2); /* Augmente la taille au survol */
  z-index: 10; /* Assure que l'image passe par-dessus les autres */
}

.project-card h3,
.project-card p {
  margin: 10px 0;
  font-size: 1.2em;
  transition: opacity 0.3s;
}

.project-card:hover h3,
.project-card:hover p {
  opacity: 0; /* Réduit l'opacité du texte lors du survol */
}
</style>
