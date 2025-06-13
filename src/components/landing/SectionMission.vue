<template>
  <section class="slide">
    <!-- <div class="scroll-indicator-up">↑</div> -->
    <h2 class="header">The Mission</h2>
    <p style="font-size: clamp(0.5rem, 4vw, 2rem);">
  My goal as a developer is to create tools that are
  <span class="highlight-wrapper">
    <span class="highlight-bg"></span>
    <span class="highlight-text">accessible</span>
  </span>
  and
  <span class="highlight-wrapper">
    <span class="highlight-bg"></span>
    <span class="highlight-text">intuitive</span>
  </span>
  for those outside of the tech space.
</p>
    <p>
      I want to lift the veil off the mechanisms that affect everyone in mysterious ways: algorithms, artifical intelligence, 
      and the heavy biases embedded within our technology that have resulted in the disempowerment of many vunerable and 
      uneducated people.
    </p>
    <div class="scroll-indicator-down">↓</div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await nextTick() // wait until DOM is updated

  const highlights = gsap.utils.toArray<HTMLElement>('.highlight-bg')

  highlights.forEach(el => {
    gsap.fromTo(
      el,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none',
          // markers: true, // enable this for debugging
        }
      }
    )
  })
})
</script>

<style scoped>

.slide {
  position: relative; /* <-- This is the key */
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 2rem;
  padding-inline: clamp(1rem, 4vw, 4rem); /* horizontal only */
  padding-top: clamp(3rem, 8vh, 5rem); /* match your header height */
  text-align: center;
  font-family: var(--font-xenon);
  z-index: 1;
}

.slide::before {
  content: "";
  height: var(--navbar-height); /* or use fixed height if needed */
  display: block;
  flex-shrink: 0;
}

.header {
  font-size: clamp(2.0rem, 7vw, 6rem);
  font-family: var(--font-neon);
  line-height: 1.1;
  margin: 0;
}

.slide p {
  text-align: left;
}

.scroll-indicator-down {
  font-family: var(--font-neon);
  font-size: 1.5rem;
  animation: bounce 1.5s infinite ease-in-out;
  opacity: 0.6;
}

.scroll-indicator-up {
  position: absolute;
  top: 2rem;
  font-size: 1.5rem;
  animation: bounce-up 1.5s infinite ease-in-out;
  opacity: 0.6;
}

.highlight {
  position: relative;
  display: inline-block;
  z-index: 0;
}

.highlight::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0.1em;
  width: 100%;
  height: 100%;
  background: yellow; /* highlighter color */
  transform: scaleX(0);
  transform-origin: left;
  z-index: -1;
}

.highlight-wrapper {
  position: relative;
  display: inline-block;
}

.highlight-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: yellow;
  transform: scaleX(0);
  transform-origin: left;
  z-index: 0;
}

.highlight-text {
  position: relative;
  z-index: 1;
}


@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

</style>