<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #3C3D42;"> <!-- Dark Charcoal -->
      <a class="navbar-brand" href="#" style="color: #F6F8E2;">My Website</a> <!-- Light Cream -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/login" style="color: #9CCD62;">Login</a> <!-- Primary Color -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio/profile" style="color: #9CCD62;">Profile</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio/showcase" style="color: #9CCD62;">Showcase</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio/contact" style="color: #9CCD62;">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/portfolio/creative" style="color: #9CCD62;">Creative</a>
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
  .navbar-nav .nav-link:hover {
    background-color: #E0DDCA; /* Tertiary Color for hover effect */
    color: #3C3D42; /* Dark Charcoal text on hover */
  }
  </style>
  