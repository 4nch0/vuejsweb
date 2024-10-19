<template>
  <div class="typing-container">
    <h1>Type Anything!</h1>
    <textarea
      v-model="text"
      @keydown="handleKeydown"
      placeholder="Start typing..."
      rows="10"
      class="form-control"
    ></textarea>
    <div
      class="color-burst"
      v-for="(burst, index) in bursts"
      :key="index"
      :style="{ backgroundColor: burst.color, left: burst.x + 'px', top: burst.y + 'px' }"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      sounds: [
        new Audio(require('@/assets/1.mp3')),
        new Audio(require('@/assets/2.mp3')),
        new Audio(require('@/assets/3.mp3')),
        new Audio(require('@/assets/7.mp3')),
        new Audio(require('@/assets/8.mp3')),
        new Audio(require('@/assets/9.mp3')),
        new Audio(require('@/assets/10.mp3')),
        new Audio(require('@/assets/4.mp3')),
        new Audio(require('@/assets/5.mp3')),
        new Audio(require('@/assets/6.mp3')),
      ],
      bursts: [],
    };
  },
  methods: {
    handleKeydown(event) {
      this.playSound(event);
      this.burstColors(event);
    },
    playSound(event) {
      // Play sound only for letter keys (A-Z and a-z)
      if ((event.key >= 'A' && event.key <= 'Z') || (event.key >= 'a' && event.key <= 'z')) {
        const soundIndex = Math.floor(Math.random() * this.sounds.length);
        const soundToPlay = this.sounds[soundIndex];

        soundToPlay.currentTime = 0; // Reset sound to start
        soundToPlay.play().catch((error) => console.error("Error playing sound:", error)); // Play the selected sound
      }
    },
    burstColors(event) {
      const rect = event.target.getBoundingClientRect();
      const burstCount = 5; // Number of bursts for each keypress

      for (let i = 0; i < burstCount; i++) {
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        const x = Math.random() * (rect.width - 15); // Adjust for burst size
        const y = Math.random() * (rect.height - 15); // Adjust for burst size

        this.bursts.push({ color, x, y });

        // Remove burst after animation
        setTimeout(() => {
          this.bursts.shift();
        }, 1000); // Duration of burst effect
      }
    },
  },
};
</script>

<style scoped>
.typing-container {
  text-align: center;
  margin-top: 50px;
  position: relative;
  max-width: 600px; /* Increase width for better aesthetics */
  margin-left: auto;
  margin-right: auto;
  padding: 20px; /* Add padding for spacing */
  border: 2px solid #9CCD62; /* Border color matching your theme */
  border-radius: 10px; /* Rounded corners */
  background-color: #F6F8E2; /* Light background color for contrast */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow for depth */
}

textarea {
  padding: 15px; /* More padding for comfort */
  font-size: 18px; /* Increase font size for better readability */
  width: 100%; /* Full width */
  height: 200px;
  resize: none;
  position: relative;
  z-index: 1; /* Ensure textarea is above bursts */
  border-radius: 5px; /* Rounded corners for textarea */
  border: 1px solid #ccc; /* Light border */
  outline: none; /* Remove default outline */
}

textarea:focus {
  border-color: #9CCD62; /* Focus border color */
}

.color-burst {
  position: absolute;
  width: 15px; /* Increase burst size */
  height: 15px; /* Increase burst size */
  border-radius: 50%;
  opacity: 0.8;
  animation: burst 1s ease-out forwards;
}

@keyframes burst {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-50px) scale(2); /* Burst goes up and enlarges */
    opacity: 0; /* Fade out */
  }
}
</style>
