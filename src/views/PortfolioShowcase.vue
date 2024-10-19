<template>
    <div :class="currentTheme">
      <div class="showcase-container">
        <h1 class="showcase-title">My Video Showcase</h1>
        <div class="video-grid">
          <div v-for="(video, index) in videos" :key="index" class="video-card">
            <video
              :src="video.src"
              controls
              muted
              class="video-thumbnail"
              @mouseover="playVideo(video)"
              @mouseleave="pauseVideo(video)"
            ></video>
            <h2 class="video-title">{{ video.title }}</h2>
            <p class="video-description">{{ video.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [
          {
            title: "Project 1: Motor Control System with LCD Display",
            description:
              "This Arduino project enables users to control a motor's operation through a set of input switches while providing real-time feedback on an LCD screen.",
            src: require('@/assets/vid1.mp4'),
          },
          {
            title: "Project 2: LED Message Display with Button Control",
            description:
              "This project enables users to display specific messages on a series of LEDs using button inputs.",
            src: require('@/assets/vid2.mp4'),
          },
          {
            title: "Project 3: LED Patterns Control with Button Input",
            description:
              "This project allows users to create dynamic LED patterns using a set of buttons.",
            src: require('@/assets/vid3.mp4'),
          },
        ],
      };
    },
    computed: {
      currentTheme() {
        return this.$root.currentTheme;
      },
    },
    methods: {
      playVideo(video) {
        const videoElement = document.querySelector(`video[src="${video.src}"]`);
        videoElement.play();
      },
      pauseVideo(video) {
        const videoElement = document.querySelector(`video[src="${video.src}"]`);
        videoElement.pause();
      },
    },
  };
  </script>
  
  <style scoped>
  .showcase-container {
    text-align: center;
    padding: 50px 20px;
    background: linear-gradient(135deg, #f6f8e2 0%, #e0ddca 100%); /* Soft gradient */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    font-family: 'Rubik', sans-serif; /* Rubik font */
  }
  
  .showcase-title {
    font-size: 3em;
    color: #3c3d42;
    margin-bottom: 40px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }
  
  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 30px;
  }
  
  .video-card {
    background-color: #ffffff;
    border: 2px solid #9ccd62;
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  }
  
  .video-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  }
  
  .video-thumbnail {
    width: 100%;
    height: auto;
    border-bottom: 4px solid #9ccd62;
    border-radius: 15px 15px 0 0;
  }
  
  .video-title {
    font-size: 1.8em;
    color: #3c3d42;
    margin: 15px 0 10px;
    font-weight: bold;
  }
  
  .video-description {
    color: #6c757d;
    padding: 0 15px 20px;
    font-size: 1em;
    line-height: 1.5;
  }
  </style>
  