<template>
  <div class="login-container">
    <div :class="['card p-4 custom-card', currentTheme]">
      <h2 class="text-center mb-4 login-heading">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group mb-3">
          <label for="email" class="form-label">Email address</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="fas fa-envelope"></i>
            </span>
            <input 
              type="email" 
              class="form-control custom-input" 
              id="email" 
              v-model="email" 
              placeholder="Enter your email" 
              required 
            />
          </div>
        </div>
        <div class="form-group mb-3">
          <label for="password" class="form-label">Password</label>
          <div class="input-group">
            <span class="input-group-text">
              <i class="fas fa-lock"></i>
            </span>
            <input 
              type="password" 
              class="form-control custom-input" 
              id="password" 
              v-model="password" 
              placeholder="Enter your password" 
              required 
            />
          </div>
        </div>
        <button type="submit" class="btn custom-btn w-100">
          <i class="fas fa-sign-in-alt"></i> Login
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  computed: {
    currentTheme() {
      return this.$root.currentTheme; // Access the current theme from the root instance
    }
  },
  methods: {
    handleLogin() {
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--primary-bg-color); /* Use gradient for background */
}

.custom-card {
  background-color: rgba(255, 255, 255, 0.9); /* Default semi-transparent white for contrast */
  color: var(--primary-text-color);
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: left;
  transition: background 0.5s ease; /* Transition for card background */
}

/* Define colors based on the theme */
.light-theme .custom-card {
  background-color : #3C3D42;/* Light theme color */
  color: #F6F8E2;
}

.dark-theme .custom-card {
  background-color: rgba(255, 255, 255, 0.9); /* Dark theme color */
  color: #3C3D42 /* Change text color for readability */
}

.login-heading {
  font-weight: 700;
  font-size: 2rem;
}

.form-label {
  font-weight: 500;
}

.custom-input {
  background-color: var(--secondary-color);
  border: 1px solid var(--accent-color);
  color: var(--primary-text-color);
  transition: background 0.3s, color 0.3s; /* Transition for input */
}

.custom-btn {
  background-color: var(--accent-color);
  color: var(--primary-bg-color);
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.3s, transform 0.3s; /* Transition for button */
}

.custom-btn:hover {
  background-color: var(--primary-text-color);
  color: var(--primary-bg-color);
  transform: scale(1.05); /* Slight enlargement on hover */
}
</style>
