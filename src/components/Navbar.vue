<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-white/85 dark:bg-[#090a0f]/85 backdrop-blur-md border-b border-slate-200 dark:border-white/10 py-3 shadow-sm dark:shadow-lg dark:shadow-black/20'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <!-- Logo / Name -->
      <a
        href="#hero"
        class="group flex items-center gap-2.5 text-slate-800 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
      >
        <span class="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-sm flex items-center justify-center group-hover:scale-105 group-hover:border-emerald-500 transition-transform">
          LV
        </span>
        <span class="font-mono text-sm tracking-wider font-semibold">
          lance<span class="text-emerald-600 dark:text-emerald-400">.dev</span>
        </span>
      </a>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex items-center gap-1 bg-white/70 dark:bg-surface-100/60 border border-slate-200/80 dark:border-white/5 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm dark:shadow-none">
        <a
          v-for="item in navLinks"
          :key="item.href"
          :href="item.href"
          class="px-3.5 py-1.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200"
          :class="[
            activeSection === item.id
              ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 border border-emerald-500/30'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/5'
          ]"
        >
          <span class="text-emerald-600 dark:text-emerald-500/70 mr-1">{{ item.number }}</span>
          {{ item.name }}
        </a>
      </nav>

      <!-- Desktop CTA & Theme Toggle -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Theme Toggle Button -->
        <button
          type="button"
          @click="toggleTheme"
          class="p-2 rounded-xl bg-slate-100 dark:bg-surface-100 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-200 focus:outline-none"
          :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
          title="Toggle Theme"
        >
          <Sun v-if="isDark" class="w-4 h-4 text-amber-400 animate-spin-slow" />
          <Moon v-else class="w-4 h-4 text-slate-700" />
        </button>

        <div class="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300 font-mono">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Open to learn</span>
        </div>
        <a
          href="#contact"
          class="px-4 py-1.5 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors font-mono shadow-sm"
        >
          Let's Talk
        </a>
      </div>

      <!-- Mobile Right Controls (Theme Toggle & Menu) -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          type="button"
          @click="toggleTheme"
          class="p-2 rounded-lg bg-slate-100 dark:bg-surface-100 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 focus:outline-none"
          :aria-label="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
        >
          <Sun v-if="isDark" class="w-4 h-4 text-amber-400" />
          <Moon v-else class="w-4 h-4 text-slate-700" />
        </button>
        <button
          type="button"
          @click="isOpen = !isOpen"
          class="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <component :is="isOpen ? X : Menu" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isOpen"
        class="md:hidden bg-white/95 dark:bg-[#0c0e17]/95 border-b border-slate-200 dark:border-white/10 px-6 py-6 backdrop-blur-xl space-y-4 shadow-xl"
      >
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-700 dark:text-emerald-300 font-mono w-fit mb-4">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>Open to learn</span>
        </div>
        <div class="flex flex-col space-y-2">
          <a
            v-for="item in navLinks"
            :key="item.href"
            :href="item.href"
            @click="isOpen = false"
            class="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-mono text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            <span>{{ item.name }}</span>
            <span class="text-xs text-emerald-600 dark:text-emerald-500">{{ item.number }}</span>
          </a>
        </div>
        <a
          href="#contact"
          @click="isOpen = false"
          class="block text-center w-full mt-4 py-2 text-sm font-mono font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors shadow-sm"
        >
          Let's Talk
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const isOpen = ref(false)
const isScrolled = ref(false)
const activeSection = ref('hero')

const navLinks = [
  { name: 'About', href: '#about', id: 'about', number: '01' },
  { name: 'Skills', href: '#skills', id: 'skills', number: '02' },
  { name: 'Contact', href: '#contact', id: 'contact', number: '03' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  const sections = ['about', 'skills', 'contact']
  const scrollPosition = window.scrollY + 180

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = section
        return
      }
    }
  }
  if (window.scrollY < 200) {
    activeSection.value = 'hero'
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.rotate-fade-enter-active,
.rotate-fade-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
.rotate-fade-enter-from {
  opacity: 0;
  transform: rotate(-45deg) scale(0.85);
}
.rotate-fade-leave-to {
  opacity: 0;
  transform: rotate(45deg) scale(0.85);
}
</style>

