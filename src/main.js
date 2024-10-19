import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import ThemeToggle from './components/ThemeToggle.vue'; // Adjust the path if necessary

// Create the app instance
const app = createApp(App);

// Register ThemeToggle globally
app.component('ThemeToggle', ThemeToggle);

// Set the default theme on a reactive property
app.config.globalProperties.currentTheme = 'light-theme'; // Default theme

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
