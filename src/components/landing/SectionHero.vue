<template>
  <section class="hero">
    <h1>Hello, I'm <b ref="breathing_text" class="highlight breathing-text" style="font-family: var(--font-ananda);">Kalpesh</b></h1>
    <p ref="typewriter_text" class="tagline" style="font-size: clamp(1.5rem, 4vw, 6rem);">I build ethical, intentional AI tools.</p>
    <div class="scroll-indicator-down">↓</div>
  </section>
</template>

<script setup lang="ts">

import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin';
import { onMounted, ref } from 'vue';

gsap.registerPlugin(TextPlugin)

const breathing_text = ref<HTMLElement | null>(null)
const typewriter_text = ref<HTMLElement | null>(null)

onMounted(() => {
  
  // Handling Breathing text

  if (!breathing_text.value) return;

  const oceanColors = [
    '#66ffcc', // mint green
    '#33cccc', // teal
    '#3399ff', // sky blue
    '#66ccff', // baby blue
    '#33ffcc', // aqua
    '#00cc99', // sea green

    // Chopper's Suggestions

    // '#cc0000', // deep red
    // '#990000', // dark crimson
    
  ];

  const tl = gsap.timeline({ repeat: -1 });

  oceanColors.forEach((color) => {
    tl.to(breathing_text.value, {
      color,
      scale: 1.04,
      duration: 1.5,
      ease: 'sine.inOut',
    });
  });

  // Handling typewriter effect
  if (!typewriter_text.value) return;

  typewriter_text.value.innerHTML = ''

  const t2 = gsap.timeline()

  // Typewriter effect
  t2.to(typewriter_text.value, {
    text: 'I build ethical, transparent, and useful AI tools.',
    duration: 2,
    ease: 'none',
    delay: 0.5,
  })

});

</script>

<style scoped>
.hero {
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  background: var(--hero-bg);
  color: var(--text-color);
  text-align: center;
  font-family: var(--font-heading);
  position: relative;

  font-size: clamp(2.5rem, 8vw, 6rem);
  line-height: 1.1;
  margin: 0;
}

.hero::before {
  content: "";
  height: var(--navbar-height); /* or use fixed height if needed */
  display: block;
  flex-shrink: 0;
}

.breathing-text {
  transition: all 0.3s;
}

.highlight {
  font-weight: bold;
  opacity: 0.85;
  font-size: clamp(2.5rem, 15vw, 8rem);
}

.scroll-indicator-down {
  font-family: var(--font-neon);
  font-size: 1.5rem;
  animation: bounce 1.5s infinite ease-in-out;
  opacity: 0.6;
}

.tagline {
  font-family: var(--font-ui)
}

.tagline::after {
  content: '|';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
</style>
