<template>
  <div class="contact-form-container">
    <h2>Contactez-moi</h2>
    <form
      @submit="handleSubmit"
      action="mailto:pro.jordanv@gmail.com"
      method="post"
      enctype="text/plain"
      class="contact-form"
    >
      <div class="form-group">
        <label for="name">Nom</label>
        <input type="text" id="name" name="name" placeholder="Votre nom" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Votre email" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Votre message" required></textarea>
      </div>
      <button type="submit" class="submit-button">Envoyer</button>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      event.target.submit();
    },
  },
};
</script>

<style scoped>
.contact-form-container {
  background: linear-gradient(145deg, #1c1f26, #2b2f3a);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
}

h2 {
  color: #fff;
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  position: relative;
}

h2::after {
  content: '';
  display: block;
  width: 100px;
  height: 4px;
  background: #3498db;
  margin: 10px auto 0;
  border-radius: 5px;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.form-group label {
  flex: 1;
  color: #ccc;
  margin-right: 15px;
  font-weight: 600;
  font-size: 1em;
  text-align: left;
}

.form-group input,
.form-group textarea {
  flex: 2;
  padding: 12px;
  border: 1px solid #555;
  border-radius: 8px;
  background-color: #2d3442;
  color: #ddd;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  font-family: 'Montserrat', sans-serif;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #3498db;
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.5);
}

textarea {
  resize: none;
  height: 120px;
}

.submit-button {
  padding: 12px 25px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1em;
  font-family: 'Montserrat', sans-serif;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  margin-top: 10px;
}

.submit-button:hover {
  background-color: #2980b9;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(41, 128, 185, 0.4);
}
</style>
