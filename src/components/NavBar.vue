<template>
  <nav class="navbar navbar-expand-lg" :style="{ backgroundColor: currentBackgroundColor }">
    <a class="navbar-brand" :style="{ color: currentTextColor, fontWeight: 'bold', marginLeft: '15px' }">4nch0's Website</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="(link, index) in navLinks" :key="index">
          <a class="nav-link" :class="{ 'nav-link-hover': true }" :style="{ color: currentLinkColor }" :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      navLinks: [
        { text: 'Login', href: '/login' },
        { text: 'Profile', href: '/portfolio/profile' },
        { text: 'Showcase', href: '/portfolio/showcase' },
        { text: 'Contact', href: '/portfolio/contact' },
        { text: 'Creative', href: '/portfolio/creative' }
      ]
    };
  },
  computed: {
    currentBackgroundColor() {
      return this.$root.currentTheme === 'light-theme' ? '#3C3D42' : '#E0DDCA';
    },
    currentTextColor() {
      return this.$root.currentTheme === 'light-theme' ? '#F6F8E2' : '#9CCD62';
    },
    currentLinkColor() {
      return this.$root.currentTheme === 'light-theme' ? '#9CCD62' : '#3C3D42';
    },
  }
};
</script>

<style scoped>
.navbar-nav .nav-link {
  font-size: 1.25rem; /* Larger font size */
  margin: 0 15px; /* Equal spacing between links */
  border-radius: 5px; /* Rounded corners */
  padding: 5px 10px; /* Padding for better click area */
  transition: background-color 0.3s, color 0.5s; /* Smooth transition for hover effects */
}

/* Light theme hover effect */
.navbar-nav .nav-link-hover:hover {
  background-color: #1E1E1E; /* Lighter green for hover */
  color: #3C3D42; /* Dark text on hover */
}

/* Dark theme hover effect */
.dark-theme .navbar-nav .nav-link-hover:hover {
  background-color: #9ccd62; /* Darker shade for hover */
  color: #F6F8E2; /* Light text on hover */
}

:root {
  --light-hover-color: #9ccd62; /* Lighter hover color for light theme */
  --dark-hover-color: #1E1E1E; /* Darker hover color for dark theme */
  --dark-text: #F6F8E2; /* Text color for dark theme */
  --light-text: #3C3D42; /* Text color for light theme */
}
</style>
