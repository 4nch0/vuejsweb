<template>
  <div id="app" :class="currentTheme">
    <router-view />
    <button class="theme-toggle-btn" @click="toggleTheme">
      <i class="fas" :class="currentTheme === 'light-theme' ? 'fa-sun' : 'fa-moon'"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: 'light-theme', // Default theme
    };
  },
  methods: {
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@100;400;500;700&display=swap');

#app {
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh; /* Full height for background effect */
  transition: background 0.5s ease; /* Smooth transition for background */
}

.light-theme {
  --primary-bg-color: linear-gradient(135deg, #E0DDCA 35%, #9ccd62 65%); /* Light Gradient */
  --primary-text-color: #3C3D42; 
  --accent-color: #9CCD62; 
  --secondary-color: #E0DDCA; 
}

.dark-theme {
  --primary-bg-color: linear-gradient(45deg, #E0DDCA 15%, #1E1E1E 85%); /* Dark Gradient */
  --primary-text-color: #F6F8E2; 
  --accent-color: #9CCD62; 
  --secondary-color: #E0DDCA; 
}

body {
  background: var(--primary-bg-color);
  color: var(--primary-text-color);
}

.theme-toggle-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--accent-color);
  color: var(--primary-text-color);
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.35s, transform 0.3s; /* Add transition for button */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow */
}

.theme-toggle-btn:hover {
  background-color: var(--secondary-color);
  transform: scale(1.1); /* Slightly enlarge button on hover */
}

.theme-toggle-btn .fas {
  font-size: 20px;
  transition: color 0.3s; /* Smooth transition for icon color */
}
</style>
