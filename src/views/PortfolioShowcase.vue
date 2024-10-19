<template>
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
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [
          {
            title: "Project 1: Motor Control System with LCD Display",
            description:
              "This Arduino project enables users to control a motor's operation through a set of input switches while providing real-time feedback on an LCD screen. The system features three control modes: powering the motor on/off, forward movement, and reverse movement.",
            src: require('@/assets/vid1.mp4'), // Add your video paths here
          },
          {
            title: "Project 2: LED Message Display with Button Control",
            description:
              "This Arduino project enables users to display specific messages on a series of LEDs using button inputs. Each button corresponds to a different message.",
            src: require('@/assets/vid2.mp4'), // Add your video paths here
          },
          {
            title: "Project 3: LED Patterns Control with Button Input",
            description:
              "This Arduino project allows users to create dynamic LED patterns using a set of buttons. Each button activates a different lighting sequence.",
            src: require('@/assets/vid3.mp4'), // Add your video paths here
          },
        ],
      };
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
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    border-radius: 15px; /* Rounded container */
  }
  
  .showcase-title {
    font-size: 3em; /* Larger title */
    color: #3c3d42; /* Dark color for the title */
    margin-bottom: 40px;
    font-weight: bold; /* Bold title */
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Shadow for better readability */
  }
  
  .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); /* Responsive grid */
    gap: 30px; /* Increased space between cards */
  }
  
  .video-card {
    background-color: #ffffff; /* White background for contrast */
    border: 2px solid #9ccd62; /* Accent border */
    border-radius: 15px; /* Rounded corners */
    overflow: hidden; /* Clip excess content */
    transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition */
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  }
  
  .video-card:hover {
    transform: translateY(-8px); /* Slight lift effect */
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2); /* More pronounced shadow on hover */
  }
  
  .video-thumbnail {
    width: 100%; /* Full width */
    height: auto; /* Maintain aspect ratio */
    border-bottom: 4px solid #9ccd62; /* Accent border for video */
    border-radius: 15px 15px 0 0; /* Rounded top corners */
  }
  
  .video-title {
    font-size: 1.8em; /* Slightly larger title */
    color: #3c3d42; /* Dark color for title */
    margin: 15px 0 10px; /* Margin adjustments */
    font-weight: bold; /* Bold title */
  }
  
  .video-description {
    color: #6c757d; /* Lighter gray for description */
    padding: 0 15px 20px; /* Padding adjustments */
    font-size: 1em; /* Normal font size */
    line-height: 1.5; /* Improved line height */
  }
  </style>
  