// useTheme.ts
import { ref, watch } from 'vue'

const defaultTheme = 'theme-dark'
const currentTheme = ref(localStorage.getItem('theme') || defaultTheme)

export function useTheme() {
  const setTheme = (theme: string) => {
    currentTheme.value = theme
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }

  // Only apply theme when it changes
  watch(currentTheme, (newTheme) => {
    document.body.className = newTheme
  }, { immediate: true })

  return {
    currentTheme,
    setTheme,
  }
}
