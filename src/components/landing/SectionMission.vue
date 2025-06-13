<template>
  <section class="slide">
    <!-- <div class="scroll-indicator-up">↑</div> -->
    <h2 class="header">Understanding AI</h2>
    
    <div class="scroll-indicator-down">↓</div>
  </section>
</template>

<style scoped>
.slide {
  position: relative; /* <-- This is the key */
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 2rem;
  text-align: center;
  font-family: var(--font-xenon);
}

.header {
  font-size: clamp(2.0rem, 7vw, 6rem);
  font-family: var(--font-neon);
  line-height: 1.1;
  margin: 0;
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

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

</style>