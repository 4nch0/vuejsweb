<template>
  <div id="app" :class="currentTheme">
    <NavBar v-if="!shouldHideNavBar" />
    <router-view />
    <ThemeToggle :currentTheme="currentTheme" @themeToggle="ThemeToggle" />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import ThemeToggle from './components/ThemeToggle.vue'; // Import the new ThemeToggle component

export default {
  components: {
    NavBar,
    ThemeToggle,
  },
  data() {
    return {
      currentTheme: 'light-theme', // Default theme
    };
  },
  computed: {
    shouldHideNavBar() {
      return this.$route.meta.hideNavBar === true && this.$route.name !== 'Login';
    },
  },
  methods: {
    ThemeToggle() {
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
}

.dark-theme {
  --primary-bg-color: linear-gradient(60deg, #1E1E1E 15%,  #E0DDCA 85%); /* Dark Gradient */
  --primary-text-color: #F6F8E2; 
}

body {
  background: var(--primary-bg-color);
  color: var(--primary-text-color);
}

.light-theme {
  background-color: #f6f8e2; /* Light theme background */
  color: #3C3D42; /* Light theme text color */
}

.dark-theme {
  background-color: #3C3D42; /* Dark theme background */
  color: #F6F8E2; /* Dark theme text color */
}

</style>
