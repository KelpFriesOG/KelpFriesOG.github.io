<template>
  <div class="landing-wrapper">
    <SectionHero />
    <SectionMission />
    <SectionRecent />
    <SectionQuote />
  </div>
</template>

<script setup lang="ts">
import SectionHero from '../components/landing/SectionHero.vue'
import SectionMission from '../components/landing/SectionMission.vue'
import SectionRecent from '../components/landing/SectionRecent.vue'
import SectionQuote from '../components/landing/SectionQuote.vue'
</script>

<style scoped>
.landing-wrapper {
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
}
</style>
