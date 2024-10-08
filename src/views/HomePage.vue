<template>
    <section class="presentation">
      <h2>Bienvenue sur mon portfolio !</h2>
      <p>
        Je m’appelle <strong>Jordan V</strong>, et je suis un développeur web passionné en formation au Centre Européen de Formation. À travers ce portfolio, je vous invite à découvrir mon univers, mes compétences, et les projets qui me tiennent à cœur.
      </p>
      <p>
        Depuis toujours, la technologie m’a fasciné et le monde du web est devenu ma véritable vocation. Je me suis lancé dans cette aventure pour allier créativité et technique, avec l’envie de créer des expériences utilisateur uniques et performantes...
      </p>
  
      <!-- Section du texte masqué au départ -->
      <div :style="{ maxHeight: showMore ? '500px' : '0px' }" class="additional-content">
        <p>
          Chaque projet est pour moi une nouvelle opportunité de repousser mes limites et d’apprendre. Que ce soit pour créer des sites web dynamiques, des applications interactives ou encore des interfaces utilisateur intuitives, je m’efforce de rendre chaque réalisation unique...
        </p>
        <p>
          J’aime relever les défis et explorer constamment de nouvelles technologies pour rester à la pointe des tendances actuelles du web. Le parcours de développeur est en perpétuelle évolution, et c’est ce qui me motive chaque jour. J’adore découvrir de nouvelles façons de coder...
        </p>
        <p>
          En plus de mes compétences techniques, je suis également un fervent défenseur du travail en équipe et de la collaboration. J’aime partager mes idées, échanger avec d’autres passionnés et travailler ensemble pour donner vie à des projets ambitieux.
        </p>
        <p>
          Explorez mon Portfolio et Découvrez mes Projets ! Sur ce portfolio, vous trouverez une sélection de mes projets réalisés au cours de ma formation et en dehors. Que vous soyez ici pour une simple visite ou pour évaluer mes compétences, j’espère que vous apprécierez ce que vous allez découvrir...
        </p>
      </div>
  
      <!-- Bouton Voir plus / Voir moins -->
      <button @click="toggleShowMore" class="see-more-button">
        {{ showMore ? 'Voir moins' : 'Voir plus' }}
      </button>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showMore: false, // Initialise l'état à faux pour cacher le texte
      };
    },
    methods: {
      toggleShowMore() {
        this.showMore = !this.showMore; // Inverse l'état pour afficher ou cacher le texte
      },
    },
  };
  </script>
  
  <style scoped>
  .presentation {
    padding: 40px 20px;
    margin: 20px auto;
    max-width: 800px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: justify;
    animation: fadeIn 1s ease-in-out;
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
  }
  
  .presentation h2 {
    text-align: center;
    color: #3498db;
    font-size: 2.2rem;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    animation: slideDown 0.8s ease-out;
  }
  
  .presentation h2::after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background: #3498db;
    margin: 10px auto 0;
    animation: growLine 0.5s forwards;
  }
  
  .additional-content {
    overflow: hidden;
    transition: max-height 0.5s ease-in-out; /* Transition pour un effet de déroulement */
  }
  
  .see-more-button {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    font-size: 1rem;
  }
  
  .see-more-button:hover {
    background-color: #2980b9;
  }
  
  /* Animation Keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes growLine {
    from {
      width: 0;
    }
    to {
      width: 50px;
    }
  }
  </style>
  
  