<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; // Assuming your NavBar is in a components folder

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style>
/* Global Styles */
body {
  font-family: 'Rubik', sans-serif; /* Set global font to Rubik */
  margin: 0;
  padding: 0;
  background-color: #F6F8E2; /* Light Cream */
  color: #3C3D42; /* Dark Charcoal for text */
}

h1, h2, h3 {
  color: #3C3D42; /* Use Dark Charcoal for headings */
}

p {
  font-weight: 400; /* Regular weight for paragraph text */
}
</style>
