<template>
  <header class="site-header">
    <nav class="nav-container">
      <div class="nav-left">
        <a href="/" class="logo">
          <img src="/assets/logo.png" alt="Logo" />
        </a>
      </div>
      <button class="menu-toggle" @click="menuOpen = !menuOpen">
        ☰
      </button>
      <ul class="nav-links" :class="{ open: menuOpen }">
        <li class="dropdown">
          <a href="#about">About Me</a>
        </li>
        <li class="dropdown">
          <a href="#projects">Projects</a>
          <ul class="submenu">
            <li><a href="#ml">Machine Learning</a></li>
            <li><a href="#ai">AI Experiments</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#blog">Blog</a>
          <ul class="submenu">
            <li><a href="#devlogs">Devlogs</a></li>
            <li><a href="#articles">Articles</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const menuOpen = ref(false);
</script>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--header-bg-color);
  height: 80px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
}

.nav-left {
  display: flex;
  align-items: center;
}

.logo img {
  height: 60px;
  transition: transform 0.3s ease;
}

.logo:hover img {
  transform: scale(1.05);
}

.menu-toggle {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  padding: 0;
  margin: 0;
}

.nav-links li {
  position: relative;
}

.nav-links li a {
  text-decoration: none;
  color: var(--text-color);
  font-size: 1.1rem;
  position: relative;
}

.nav-links li a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--text-color);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-links li a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.submenu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--header-bg-color);
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  list-style: none;
  padding: 0.5rem 0;
  min-width: 150px;
  z-index: 1000;
}

.submenu li a {
  display: block;
  padding: 0.5rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  white-space: nowrap;
}

.submenu li a:hover {
  background-color: rgba(255,255,255,0.05);
}

.dropdown:hover .submenu {
  display: block;
}

.site-content {
  padding-top: 80px;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: var(--header-bg-color);
    position: absolute;
    top: 80px;
    left: 0;
    padding: 1rem;
    z-index: 998;
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links li {
    margin: 0.5rem 0;
  }

  .dropdown:hover .submenu {
    position: static;
    box-shadow: none;
  }

  .submenu {
    position: static;
    display: none;
  }

  .dropdown:hover .submenu {
    display: block;
  }
}
</style>
