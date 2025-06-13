<template>
  <section class="slide">
    <h2>Latest Updates</h2>
    <ul>
      <li>✨ Published blog post on AI accessibility</li>
      <li>📦 Released my portfolio redesign</li>
      <li>🧠 Exploring attention mechanisms in LLMs</li>
    </ul>
  </section>
</template>

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

ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}
</style>