<template>
    <header class="header">
      <!-- Vidéo en arrière-plan -->
      <video 
        autoplay 
        muted 
        loop 
        class="video-bg" 
        @click="goToHome" 
        style="cursor: pointer;">
        <source src="@/assets/Header-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <!-- Texte centré -->
      <div class="header-content">
      </div>
  
      <!-- Navigation en bas -->
      <nav class="nav-links">
        <ul>
          <li>
            <router-link to="/" class="home-link">
              <img src="@/assets/house-icon.jpg" alt="Home" class="home-icon" />
              Accueil
            </router-link>
          </li>
          <li><router-link to="/portfolio">Projets</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/404">404</router-link></li> <!-- Lien configuré vers la page NotFound -->
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'AppHeader'
  };
  </script>
  
  <style scoped>
  .header {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  
  .video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  
  .header-content {
    position: relative;
    z-index: 10;
    text-align: center;
    color: #fff;
    margin-top: 20px;
  }
  
  .nav-links {
    position: relative;
    z-index: 10;
    padding-bottom: 20px;
  }
  
  .nav-links ul {
    display: flex;
    gap: 30px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-links li {
    font-size: 1.5rem;
  }
  
  .nav-links a {
  text-decoration: none;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  transition: color 0.3s, transform 0.3s;
  display: flex; /* Pour aligner l'icône et le texte */
  align-items: center;
}
  
  .nav-links a:hover {
    color: #0099ff;
    transform: translateY(-10px) scale(1.2);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }

  .home-icon {
  width: 20px; /* Réduit la taille pour l'adapter au texte */
  height: 20px;
  margin-right: 8px;
  transition: transform 0.3s;
  display: inline-block;
  vertical-align: middle;
}
  
  /* Styles pour les liens des réseaux sociaux */
  .social-links {
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: flex;
    gap: 15px;
  }
  
  .social-links a {
    display: inline-block;
  }
  
  .social-links img {
    width: 40px; /* Ajuste la taille des icônes selon tes besoins */
    height: 40px;
    border-radius: 50%; /* Rendre les icônes circulaires si désiré */
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .social-links img:hover {
    transform: scale(1.4); /* Effet de zoom au survol */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); /* Effet d'ombre au survol */
  }
  </style>
  