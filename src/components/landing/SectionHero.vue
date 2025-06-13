<template>
  <section class="hero">
    <h1>Hello, I'm <b ref="text" class="highlight breathing-text" style="font-family: var(--font-ananda);">Kalpesh</b></h1>
    <p class="tagline" style="padding: clamp(1rem, 5vw, 4rem); font-size: clamp(1.5rem, 4vw, 6rem);">I build ethical, intentional AI tools.</p>
    <div class="scroll-indicator">↓</div>
  </section>
</template>

<script setup lang="ts">

import gsap from 'gsap'
import { onMounted, ref } from 'vue';

const text = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!text.value) return;

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
    tl.to(text.value, {
      color,
      scale: 1.04,
      duration: 1.5,
      ease: 'sine.inOut',
    });
  });
});

</script>

<style scoped>
.hero {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(ellipse at center, #1e1e1e, #111);
  color: var(--text-color);
  text-align: center;
  font-family: var(--font-heading);
  position: relative;

  font-size: clamp(2.5rem, 8vw, 6rem);
  line-height: 1.1;
  margin: 0;
}

.breathing-text {
  transition: all 0.3s;
}

.highlight {
  color: var(--accent-color);
  font-weight: bold;
  opacity: 0.85;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  font-size: 1.5rem;
  animation: bounce 1.5s infinite ease-in-out;
  opacity: 0.6;
}

.tagline {
  font-family: var(--font-code)
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
</style>
