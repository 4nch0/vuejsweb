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
                  description: "Control a motor's operation through input switches with real-time feedback on an LCD screen.",
                  src: require('@/assets/vid1.mp4'),
              },
              {
                  title: "Project 2: LED Message Display with Button Control",
                  description: "Display specific messages on a series of LEDs using button inputs for an engaging experience.",
                  src: require('@/assets/vid2.mp4'),
              },
              {
                  title: "Project 3: LED Patterns Control with Button Input",
                  description: "Create dynamic LED patterns using buttons, perfect for learning basic electronics.",
                  src: require('@/assets/vid3.mp4'),
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
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');

.showcase-container {
  text-align: center;
  padding: 50px 20px;
  background: linear-gradient(to right, #E0C3FC, #8C8DFF);
}

.showcase-title {
  font-family: 'Rubik', sans-serif;
  font-size: 3em;
  color: #4A4E69;
  margin-bottom: 40px;
  font-weight: 700;
}

.video-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px; /* Increased gap */
}

.video-card {
  background-color: white; /* Solid background for cards */
  border: 2px solid #9ccd62; /* Accent border */
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  max-width: 300px; /* Set max width for cards */
  margin: 20px; /* Margin around cards for spacing */
}

.video-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.2);
}

.video-thumbnail {
  width: 100%;
  border-radius: 12px 12px 0 0;
}

.video-title {
  font-family: 'Rubik', sans-serif;
  font-size: 1.6em;
  color: #4A4E69;
  margin: 15px 0;
}

.video-description {
  color: #4A4E69;
  padding: 0 15px;
  font-size: 0.9em;
  line-height: 1.5;
}
</style>
