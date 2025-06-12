<template>
  <div class="home">
    <header style="align-self: center;">
      <h1>Hello I'm 
        <b ref="title" style="font-family: var(--font-ananda);" class="breathing-text">Kelpo</b>
      </h1>
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
          I'm a back-end developer with a deep interest in how AI can be used to build a more equitable and transparent future. 
          My work is driven by a desire to help others navigate the mathematical, scientific, and political forces shaping today’s rapid advances in artificial intelligence.
        </p>

        <p>
          <strong>
            I’m fully aware of the harm AI has caused — and will continue to cause if left unchecked. 
            But I believe its rise is inevitable, which is why we must focus on using it deliberately for the greater good: 
            by democratizing access, minimizing environmental impact, and expanding ethical dialogue around its applications and consequences.
          </strong>
        </p>

        <p>
          This site is more than a portfolio. It’s a reflection of who I am — my work, my beliefs, and the ideas that drive me.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'

const title = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!title.value) return;

  const oceanColors = [
    '#66ffcc', // mint green
    '#33cccc', // teal
    '#3399ff', // sky blue
    '#66ccff', // baby blue
    '#33ffcc', // aqua
    '#00cc99', // sea green
  ];

  const tl = gsap.timeline({ repeat: -1 });

  oceanColors.forEach((color) => {
    tl.to(title.value, {
      color,
      scale: 1.04,
      duration: 1.5,
      ease: 'sine.inOut',
    });
  });
});

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
  font-family: var(--font-header);
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

.breathing-text {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  opacity: 0.8;
  transition: all 0.3s;
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