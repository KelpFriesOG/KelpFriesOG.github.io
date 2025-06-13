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
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-alt);
  color: var(--text-color);
  padding: 2rem;
  text-align: center;
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