<template>
  <nav class="navbar navbar-expand-lg" style="background-color: #3C3D42;"> <!-- Dark Charcoal -->
    <a class="navbar-brand" href="#" style="color: #F6F8E2;">My Website</a> <!-- Light Cream -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/portfolio/profile">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/portfolio/showcase">Showcase</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/portfolio/contact">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/portfolio/creative">Creative</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
.navbar-nav .nav-link {
  color: #9CCD62; /* Primary Color */
  font-size: 1.25rem; /* Larger font size */
  margin: 0 15px; /* Equal spacing between links */
  border-radius: 5px; /* Rounded corners */
  padding: 5px 10px; /* Padding for better click area */
}

.navbar-nav .nav-link:hover {
  background-color: #9CCD62; /* Tertiary Color for hover effect */
  color: #3C3D42; /* Dark Charcoal text on hover */
  transition: background-color 0.75s ease, color 0.5s ease; /* Slower transition effect */
}
</style>
