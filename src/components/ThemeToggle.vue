<template>
    <div class="theme-toggle-container">
      <button @click="toggleTheme" class="btn custom-btn">
        <i :class="themeIcon"></i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      currentTheme() {
        return this.$root.currentTheme; // Access the current theme from the root instance
      },
      themeIcon() {
        return this.currentTheme === 'light-theme' ? 'fas fa-sun' : 'fas fa-moon';
      }
    },
    methods: {
      toggleTheme() {
        this.$root.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
      }
    }
  }
  </script>
  
  <style scoped>
  .theme-toggle-container {
    position: fixed;
    bottom: 20px; /* Distance from the bottom */
    right: 20px; /* Distance from the right */
    z-index: 1000; /* Ensure it appears above other elements */
  }
  
  .custom-btn {
    background-color: var(--accent-color);
    color: var(--primary-bg-color);
    border: none; /* No border for a cleaner look */
    border-radius: 50%; /* Make it circular */
    width: 85px; /* Width of the button */
    height: 85px; /* Height of the button */
    font-size: 27px; /* Size of the icon */
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s; /* Smooth transition */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  }
  
  .custom-btn:hover {
    transform: scale(1.1); /* Slight enlargement on hover */
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3); /* Deeper shadow on hover */
  }
  
  .custom-btn:focus {
    outline: none; /* Remove outline */
    box-shadow: 0 0 0 4px rgba(0, 148, 255, 0.5); /* Outline for focus state */
  }
  </style>
  