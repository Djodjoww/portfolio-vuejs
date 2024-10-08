<template>
    <div class="not-found-container">
      <!-- Affiche la vidéo en plein écran -->
      <video 
        src="@/assets/404NotFound.mp4" 
        autoplay 
        muted 
        loop 
        playsinline
        class="not-found-video">
        Your browser does not support the video tag.
      </video>
  
      <!-- Bouton de retour à l'accueil -->
      <button class="back-button" @click="goToHome">
        Retour à l'accueil
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
    methods: {
      goToHome() {
        this.$router.push('/'); // Redirige vers la page d'accueil
      }
    }
  };
  </script>
  
  <style scoped>
  .not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Prend toute la hauteur de la page */
    width: 100vw; /* Prend toute la largeur de la page */
    background-color: #000; /* Change le fond pour un meilleur contraste */
    overflow: hidden;
    margin: 0;
    position: relative;
  }
  
  .not-found-video {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  
  /* Style du bouton de retour à l'accueil */
  .back-button {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #00a2ff;
    border: none;
    border-radius: 5px;
    color: #000;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .back-button:hover {
    background-color: #0a95e6;
    transform: scale(1.1);
  }
  </style>
  