<template>
  <section class="slide">
    <blockquote>
      "Technology is best when it brings people together."
    </blockquote>
    <p>– Matt Mullenweg</p>
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
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 2rem;
  font-style: italic;
  text-align: center;
}
blockquote {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
