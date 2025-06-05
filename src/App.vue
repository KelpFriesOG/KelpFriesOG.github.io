<template>
  <main class="container">
    <h1>{{ name }}</h1>
    <p class="title">{{ role }}</p>

    <section>
      <h2>About Me</h2>
      <p>{{ bio }}</p>
    </section>

    <section>
      <h2>Projects</h2>
      <ul>
        <li v-for="(project, index) in projects" :key="index">
          <strong>{{ project.name }}</strong>: {{ project.description }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('Kalpesh Chavan');
const role = ref('Software Developer | ML Enthusiast');
const bio = ref('I am a CS graduate passionate about full-stack development and machine learning.');

const projects = ref([
  { name: 'Eunoia AI', description: 'An ethical AI companion app for philosophers.' },
  { name: 'MNIST Trainer', description: 'Wrote a neural net from scratch to recognize digits.' }
]);
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 2rem auto;
  font-family: sans-serif;
}
.title {
  font-size: 1.25rem;
  color: #666;
}
</style>
