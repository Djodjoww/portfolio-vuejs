<template>
  <footer class="app-footer">
    <p>© 2024 Jordan V. Tous droits réservés.</p>
    <div class="last-update">
      Dernière mise à jour : {{ lastUpdate }}
    </div>
    <div class="social-links">
      <a href="facebook.com/riderstyl3?locale=fr_FR" target="_blank">
        <img src="@/assets/facebook.jpg" alt="Facebook" />
      </a>
      <a href="https://www.instagram.com/djow.wannenby/" target="_blank">
        <img src="@/assets/instagram.jpg" alt="Instagram" />
      </a>
      <a href="https://www.linkedin.com/in/jordan-vergriete-47751b157/" target="_blank">
        <img src="@/assets/linkedin.jpg" alt="LinkedIn" />
      </a>
      <a href="https://github.com/Djodjoww" target="_blank">
        <img src="@/assets/github.jpg" alt="GitHub" />
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      // Remplace la date par la date exacte de la dernière mise à jour du site
      lastUpdate: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    };
  },
};
</script>

<style scoped>
.app-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #1c1c1c;
  color: #e6e6e6;
  position: relative;
  flex-wrap: wrap;
  flex-direction: column; /* Ajouté pour gérer l'ordre des éléments */
  text-align: center; /* Centrer le contenu */
}

.last-update {
  font-size: 0.9em;
  margin-top: 5px;
  color: #b3b3b3;
}

.social-links {
  display: flex;
  gap: 10px;
  margin-top: 10px; /* Espace entre les réseaux sociaux et la date */
}

.social-links a {
  transition: transform 0.3s;
}

.social-links a:hover {
  transform: scale(1.2);
}

.social-links img {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}
</style>
