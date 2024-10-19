<template>
    <div class="message-form" :class="currentTheme">
      <h2 class="form-title">Drop a Message</h2>
      <form @submit.prevent="submitMessage">
        <label for="user" class="form-label">User</label>
        <input type="text" id="user" v-model="user" class="form-input" required />
  
        <label for="message" class="form-label">Message</label>
        <textarea id="message" v-model="message" class="form-textarea" required></textarea>
  
        <button type="submit" class="submit-button">Submit</button>
      </form>
  
      <div class="contact-buttons">
        <a :href="'mailto:' + email" class="contact-button">Email Me</a>
        <a :href="facebookUrl" class="contact-button">Facebook</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: '',
        message: '',
        email: 'your_email@example.com', // Replace with your email
        facebookUrl: 'https://www.facebook.com/4nch0/',
      };
    },
    computed: {
      currentTheme() {
        return this.$root.currentTheme; // Access the current theme from the root instance
      },
    },
    methods: {
      submitMessage() {
        // Logic to handle message submission can be added here
        alert(`Message from ${this.user}: ${this.message}`);
        this.user = '';
        this.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  :root {
    --light-background: #F6F8E2;
    --dark-background: #3C3D42;
    --light-text-color: #3C3D42;
    --dark-text-color: #F6F8E2;
    --accent-color: #9CCD62;
    --highlight-color: #E0DDCA;
    --highlight-text: #3C3D42;
    --contrast-text: #2A2A2A;
    --secondary-accent-color: #FF6347;
  }
  
  .light-theme {
    background-color: var(--light-background);
    color: var(--light-text-color);
  }
  
  .dark-theme {
    background-color: var(--dark-background);
    color: var(--dark-text-color);
  }
  
  .message-form {
    max-width: 600px;
    margin: 40px auto; /* Increased margin to create space from NavBar */
    padding: 30px;
    border: #3C3D42;
    border-radius: 15px;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
    transition: background-color 0.5s ease, color 0.5s ease;
    border: 2px solid var(--highlight-color); /* Border for the form */
  }
  
  .form-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 35px;
    color: var(--accent-color);
    text-align: center;
    text-transform: uppercase;
  }
  
  .form-label {
    font-size: 1.3rem;
    font-weight: 600;
    display: block;
    border: #9CCD62;
    margin-bottom: 5px;
  }
  
  .form-input,
  .form-textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 20px;
    border: 0.5px solid #9CCD62; /* Border color using #9CCD62 */
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--contrast-text);
    background-color: transparent; /* Make background transparent for themes */
    transition: border-color 0.3s ease, box-shadow 0.3s ease; /* Added transition for box-shadow */
  }
  
  .form-input:focus,
  .form-textarea:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 5px var(--accent-color); /* Glow effect on focus */
  }
  
  .submit-button {
    background-color: var(--accent-color);
    color: var(--dark-text-color);
    padding: 12px 24px;
    border: 2px solid #E0DDCA;
    border-radius: 15px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-size: 1.2rem;
    display: block;
    margin: 0 auto;
  }
  
  .submit-button:hover {
    background-color: #9CCD62;
    border: 1px solid #3C3D42;
    color: #3C3D42;
    transform: translateY(-3px); /* Slightly move up on hover */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Add shadow on hover */
  }
  
  .contact-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .contact-button {
    text-decoration: none;
    color: var(--highlight-text);
    padding: 10px 15px;
    border: 2px solid var(--highlight-color);
    border-radius: 6px;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease; /* Added transform transition */
    font-weight: 600;
    flex: 1; /* Allow equal spacing */
    text-align: center; /* Center the text */
    margin: 0 5px; /* Add margin between buttons */
  }
  
  .contact-button:hover {
    background-color: #3C3D42;
    color: #9CCD62;
    transform: translateY(-2px); /* Slightly move up on hover */
  }
  </style>
  