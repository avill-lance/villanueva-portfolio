<template>
  <footer class="border-t border-slate-200 dark:border-white/5 py-12 px-4 sm:px-6 lg:px-8 relative bg-slate-100 dark:bg-[#07080c] transition-colors duration-300">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Left: Brand & Copyright -->
      <div class="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
        <a href="#hero" class="text-sm font-mono font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
          {{ personal.shortName }}<span class="text-emerald-600 dark:text-emerald-400">.dev</span>
        </a>
        <span class="hidden sm:inline text-slate-400 dark:text-slate-600">/</span>
        <p class="text-xs text-slate-500 font-mono">
          Designed & Built with Vue 3 & Tailwind CSS &bull; &copy; {{ currentYear }}
        </p>
      </div>

      <!-- Center / Right: Quick Navigation & Back to Top -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-1"
            :aria-label="social.name"
          >
            <component :is="getIcon(social.icon)" class="w-4 h-4" />
          </a>
        </div>

        <button
          @click="scrollToTop"
          class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-surface-100/80 hover:bg-slate-50 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/5 hover:border-emerald-500/30 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all shadow-xs"
          aria-label="Back to top"
        >
          <span>Top</span>
          <ArrowUp class="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { portfolioData } from '../data/portfolioData'
import { ArrowUp, Github, Facebook, Instagram, Mail } from 'lucide-vue-next'

const personal = portfolioData.personal
const socials = portfolioData.socials
const currentYear = new Date().getFullYear()

const getIcon = (iconName) => {
  if (iconName === 'Github') return Github
  if (iconName === 'Facebook') return Facebook
  if (iconName === 'Instagram') return Instagram
  return Mail
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

