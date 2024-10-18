<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; // Adjust the path if necessary

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style>
/* Import Rubik font from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@100;400;500;700&display=swap');

/* Global Styles */
#app {
  font-family: 'Rubik', sans-serif; /* Apply Rubik font globally */
  margin: 0px;
  padding: 0px;
  background-color: #F6F8E2; /* Light Cream background */
  color: #3C3D42; /* Dark Charcoal for text */
}

h1, h2, h3 {
  color: #3C3D42; /* Use Dark Charcoal for headings */
}

p {
  font-weight: 400; /* Regular weight for paragraph text */
}

/* Font weight for h1 */
h1 {
  font-weight: 500; /* Medium weight for h1 */
}

/* Button styling */
button {
  background-color: #9CCD62; /* Tropical Kiwi Green */
  color: #F6F8E2; /* Light Cream */
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

/* Link styling */
a {
  color: #9CCD62; /* Tropical Kiwi Green for links */
}

/* Additional global styles */
a:hover {
  color: #3C3D42; /* Dark Charcoal on hover */
}
</style>
