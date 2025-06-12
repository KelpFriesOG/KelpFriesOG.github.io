import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/', // ← make sure this is correct for GitHub Pages
  plugins: [vue()],
  build: {
    outDir: 'docs' // for GitHub Pages
  }
})

