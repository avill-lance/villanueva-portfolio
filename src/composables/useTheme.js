import { ref } from 'vue'

const isDark = ref(true)

export function useTheme() {
  const applyTheme = (dark) => {
    isDark.value = dark
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      applyTheme(saved === 'dark')
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      // Default to dark mode for developer portfolio aesthetic if not explicitly set
      applyTheme(prefersDark ?? true)
    }
  }

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
