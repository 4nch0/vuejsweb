<template>
    <div class="profile-container" :class="currentTheme"> <!-- Use class to apply the theme -->
      <!-- Theme Toggle Button -->
      <ThemeToggle @toggle-theme="toggleTheme" />
  
      <!-- Profile Header with Picture and Name -->
      <div class="profile-header" v-if="isVisible" @animationend="handleAnimationEnd">
        <img class="profile-picture" src="@/assets/photo.jpg" alt="Vonn Garcia" />
        <h1 class="profile-name animate-title">Vonn Garcia</h1>
        <p class="profile-title animate-subtitle">Aspiring Full-Stack Developer | Tech Enthusiast</p>
      </div>
  
      <!-- About Me Section -->
      <div class="profile-content">
        <section class="about-me" v-if="isVisible" @animationend="handleAnimationEnd">
          <h2 class="float-in">About Me</h2>
          <p class="float-in">
            Hello! I’m <span class="highlight">Vonn Garcia</span>, a passionate and driven college student pursuing
            a degree in <span class="highlight">Computer Engineering</span>. I’m always eager to dive into new
            technologies and learn about innovative solutions. My interests span across <span class="highlight-underline">web development</span>,
            <span class="highlight-bold">IoT systems</span>, and <span class="highlight">database management</span>. 
            Currently, I'm working on exciting projects that blend cutting-edge technology with creativity!
          </p>
          <p class="fade-in">In my free time, I enjoy solving coding challenges, experimenting with new frameworks, and exploring the outdoors.</p>
        </section>
      </div>
  
      <!-- Skills Section -->
      <!-- Skills Section -->
<section class="skills" v-if="isVisible" @animationend="handleAnimationEnd">
  <h2 class="float-in">Skills</h2>
  <ul>
    <li 
      class="skill-item float-in" 
      v-for="(skill, index) in skills" 
      :key="index" 
      :style="{ animationDelay: `${index * 0.1}s` }">
      {{ skill }}
    </li>
  </ul>
</section>

    </div>
  </template>
  
  <script>
  import ThemeToggle from '../components/ThemeToggle.vue'; // Importing the ThemeToggle component
  
  export default {
    name: 'PortfolioProfile',
    components: { ThemeToggle },
    data() {
  return {
    isVisible: false,
    skills: [
      'HTML & CSS',
      'JavaScript & Vue.js',
      'Python and C',
      'Node.js & Express',
      'Firebase & Database Management',
      'IoT Devices'
    ]
  };
},
    computed: {
      currentTheme() {
        return this.$root.currentTheme; // Access the current theme from the root instance
      }
    },
    mounted() {
      this.isVisible = true;
    },
    methods: {
      handleAnimationEnd() {
        // Animation end handling logic can go here
      },
    }
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
    --contrast-text: #2A2A2A; /* New contrast color */
    --secondary-accent-color: #FF6347; /* New secondary accent color */
  }
  
  .light-theme {
    background-color: var(--light-background);
    color: var(--light-text-color);
  }
  
  .dark-theme {
    background-color: var(--dark-background);
    color: var(--dark-text-color);
  }
  
  /* Profile Container */
  .profile-container {
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto; /* Center horizontally */
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: background-color 0.5s ease, color 0.5s ease;
  position: relative;
  overflow: hidden; /* Prevents overflow */
}

  
  /* Profile Header */
  .profile-header {
    text-align: center;
    margin-bottom: 30px;
    animation: floatIn 1s ease forwards;
  }
  
  .profile-picture {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    border: 4px solid var(--accent-color);
    animation: bounceIn 1s ease forwards;
    transition: transform 0.3s ease;
  }
  
  .profile-picture:hover {
    transform: scale(1.1);
  }
  
  .profile-name {
    font-size: 2.8rem;
    font-weight: 700;
    margin: 10px 0 5px;
    color: var(--contrast-text); /* Updated color for contrast */
  }
  
  .profile-title {
    font-size: 1.4rem;
    font-weight: 500; /* Increased weight for distinction */
    margin-bottom: 15px;
    color: var(--secondary-accent-color); /* Added contrast */
  }
  
  /* About Me Section */
  .about-me h2 {
    font-size: 2.2rem;
    color: var(--accent-color);
    animation: floatIn 1.5s ease forwards;
  }
  
  .about-me p {
    font-size: 1.1rem;
    line-height: 1.6;
    animation: fadeIn 1.7s ease forwards;
    color: var(--contrast-text); /* Updated color for contrast */
  }
  
  /* Skills Section */
  .skills h2 {
    font-size: 2.2rem;
    color: var(--accent-color);
    animation: floatIn 2s ease forwards;
  }
  
  .skills ul {
    list-style: none;
    padding: 0;
  }
  
  .skills li {
    font-size: 1.1rem;
    font-weight: 500; /* Maintain medium weight */
    color: var(--highlight-text);
    padding: 0;
    animation: floatIn 2.2s ease forwards;
    transition: color 0.3s ease, transform 0.3s ease;
  }
  
  .skills li:hover {
    color: var(--accent-color);
    transform: translateX(10px);
  }
  
  /* Animations */
  @keyframes floatIn {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes bounceIn {
    0% {
      transform: scale(0.9);
      opacity: 0.7;
    }
    70% {
      transform: scale(1.05);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>
  