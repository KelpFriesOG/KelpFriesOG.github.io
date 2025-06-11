<template>
  <div class="home">
    <header>
      <h1>{{ name }}</h1>
    </header>

    <section class="main-content">
      <div class="carousel-container">
        <Swiper
          :slides-per-view="1"
          :loop="true"
          class="swiper"
        >
          <SwiperSlide v-for="(img, index) in images" :key="index">
            <img :src="img" alt="Project Image" />
          </SwiperSlide>
        </Swiper>
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
import { Swiper, SwiperSlide } from 'swiper/vue'

const name = 'Kalpesh Chavan'
const images = [
  '/assets/sample1.jpg',
  '/assets/sample2.jpg',
  '/assets/sample3.jpg',
]
</script>

<style scoped>
/* Layout container */
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Header styles */
header {
  text-align: center;
  padding: 2rem 1rem 1rem;
  background-color: #f5f5f5;
}

header h1 {
  font-size: 2.5rem;
  margin: 0;
  color: #333;
}

/* Main section with flex layout */
.main-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

/* Carousel container */
.carousel-container {
  max-width: 500px;
  width: 100%;
}

.carousel-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

/* Summary text */
.summary {
  max-width: 500px;
  width: 100%;
}

.summary h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.summary p {
  font-size: 1rem;
  line-height: 1.5;
}

/* Footer */
footer {
  text-align: center;
  padding: 1rem;
  background-color: #222;
  color: white;
  font-size: 0.9rem;
  margin-top: auto;
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
