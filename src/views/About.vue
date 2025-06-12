<template>
  <div class="about-me">
    <header>
      <h1>{{ name }}</h1>
    </header>

    <section class="main-content">
      <div class="carousel-container">
        <Splide :options="{ type: 'loop', perPage: 1, autoplay: true }">
          <SplideSlide v-for="(img, index) in images" :key="index">
            <img :src="img" alt="Project Image" />
          </SplideSlide>
        </Splide>
      </div>

      <div class="summary">
        <h2>About Me</h2>
        <p>
          I'm a front-end developer passionate about building interactive and clean user experiences. Skilled in Vue, TypeScript, and modern web tooling.
        </p>
      </div>
    </section>

    <footer>
      <p>&copy; 2025 Kalpesh Chavan. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

const name = 'Kalpesh Chavan'
const images = [
  '/assets/sample1.jpg',
]
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* Header */
header {
  padding: 2rem 1rem 1rem;
  background-color: var(--header-bg-color, var(--bg-color));
}

header h1 {
  font-size: 2.5rem;
  margin: 0;
  color: var(--text-color);
}

/* Main Section */
.main-content {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
}

/* Carousel */
.carousel-container {
  max-width: 500px;
  width: 100%;
}

.carousel-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Summary */
.summary {
  max-width: 500px;
  width: 100%;
}

.summary h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.summary p {
  font-size: 1rem;
  line-height: 1.5;
  color: var(--text-color);
}

/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  background-color: var(--footer-bg-color, var(--bg-color));
  color: var(--text-color);
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    padding: 1rem;
  }

  header h1 {
    font-size: 2rem;
  }

  .summary h2 {
    font-size: 1.5rem;
  }
}
</style>