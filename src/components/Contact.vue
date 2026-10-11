<template>
  <section id="contact" class="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100/40 dark:bg-[#0c0e15]/40 transition-colors duration-300">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Section Header -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400 font-mono mb-6">
        <span>03 // What's Next?</span>
      </div>

      <h2 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
        Let's Connect & Collaborate
      </h2>

      <p class="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
        Whether you have questions, advice for an aspiring developer, project collaboration ideas, or internship opportunities — my inbox and socials are always open!
      </p>

      <!-- Main Contact Card -->
      <div class="glass-card rounded-2xl p-4 xs:p-6 sm:p-10 mb-10 max-w-2xl mx-auto shadow-xl relative overflow-hidden">
        <div class="absolute -right-16 -top-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-100 dark:bg-surface-100/80 p-4 rounded-xl border border-slate-200 dark:border-white/5 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <Mail class="w-5 h-5" />
            </div>
            <div class="text-left">
              <div class="text-xs text-slate-500 dark:text-slate-400 font-mono">Direct Email</div>
              <div class="text-sm sm:text-base font-semibold text-slate-900 dark:text-slate-100 font-mono break-all">{{ personal.email }}</div>
            </div>
          </div>

          <div class="flex items-center gap-2 w-full sm:w-auto">
            <button
              @click="copyEmail"
              class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-transparent transition-all shadow-xs"
            >
              <component :is="copied ? Check : Copy" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{{ copied ? 'Copied!' : 'Copy' }}</span>
            </button>
            <a
              :href="'mailto:' + personal.email"
              class="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 dark:bg-emerald-400 hover:bg-emerald-600 dark:hover:bg-emerald-300 text-white dark:text-slate-950 font-mono text-xs font-semibold transition-all shadow-sm"
            >
              <span>Send Mail</span>
              <ArrowUpRight class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <!-- Social Channels Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between p-4 rounded-xl bg-slate-100/70 dark:bg-surface-200/50 hover:bg-slate-100 dark:hover:bg-surface-100 border border-slate-200/80 dark:border-white/5 hover:border-emerald-500/30 transition-all group shadow-xs"
          >
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-white dark:bg-white/5 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors shadow-xs">
                <component :is="getIcon(social.icon)" class="w-4 h-4" />
              </div>
              <div class="text-left">
                <div class="text-xs text-slate-500 dark:text-slate-400 font-mono">{{ social.name }}</div>
                <div class="text-sm font-medium text-slate-900 dark:text-slate-200">{{ social.handle }}</div>
              </div>
            </div>
            <ArrowUpRight class="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { Mail, Copy, Check, ArrowUpRight, Github, Facebook, Instagram } from 'lucide-vue-next'

const personal = portfolioData.personal
const socials = portfolioData.socials
const copied = ref(false)

const getIcon = (iconName) => {
  if (iconName === 'Github') return Github
  if (iconName === 'Facebook') return Facebook
  if (iconName === 'Instagram') return Instagram
  return Mail
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(personal.email)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2500)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}
</script>
