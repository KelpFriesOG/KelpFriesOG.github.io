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

blockquote {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
