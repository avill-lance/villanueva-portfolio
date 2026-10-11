<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
  >
    <!-- Background glow spheres -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 -right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
    <div class="absolute bottom-10 -left-20 w-72 h-72 bg-violet-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

    <div class="max-w-5xl mx-auto w-full text-center relative z-10">
      <!-- Status Badge -->
      <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 dark:bg-surface-100/80 border border-emerald-500/30 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono shadow-sm dark:shadow-inner mb-6">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>{{ personal.status }}</span>
      </div>

      <!-- Profile Avatar Display -->
      <div class="flex justify-center mb-6">
        <div class="relative group">
          <div class="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
          <div class="relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full p-1 bg-white dark:bg-[#0c0e15] ring-2 ring-emerald-500/40 shadow-2xl">
            <img
              :src="profilePhoto"
              :alt="personal.name"
              class="w-full h-full object-cover object-[50%_38%] rounded-full filter contrast-[1.02] hover:scale-105 transition-transform duration-300"
              style="object-position: 50% 38%;"
              loading="eager"
            />
          </div>
          <span class="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#090a0f] flex items-center justify-center shadow-md" title="Active">
            <span class="w-2 h-2 rounded-full bg-white"></span>
          </span>
        </div>
      </div>

      <!-- Main Headline -->
      <h1 class="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 leading-tight break-words">
        Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500">{{ personal.name }}</span>
      </h1>

      <h2 class="text-base xs:text-lg sm:text-2xl md:text-3xl font-mono text-slate-700 dark:text-slate-300 font-medium mb-6 break-words">
        <span class="text-emerald-500 dark:text-emerald-400">&lt;</span>{{ personal.title }}<span class="text-emerald-500 dark:text-emerald-400"> /&gt;</span>
      </h2>

      <!-- Subheadline / Tagline -->
      <p class="max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 px-2 sm:px-0">
        {{ personal.tagline }}
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 max-w-md mx-auto">
        <a
          href="#about"
          class="w-full xs:w-auto group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 dark:bg-emerald-400 text-white dark:text-slate-950 font-semibold text-sm hover:bg-emerald-600 dark:hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>About My Journey</span>
          <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#contact"
          class="w-full xs:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/90 dark:bg-surface-100/90 hover:bg-slate-50 dark:hover:bg-surface-50 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium text-sm transition-all duration-200 hover:border-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
        >
          <Mail class="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
          <span>Get in Touch</span>
        </a>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
        <div
          v-for="stat in personal.stats"
          :key="stat.label"
          class="glass-card glass-card-hover rounded-2xl p-4 sm:p-5 text-center flex flex-col justify-center"
        >
          <div class="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400 mb-1">
            {{ stat.value }}
          </div>
          <div class="text-[11px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 font-medium leading-tight">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="mt-14 flex flex-col items-center justify-center">
        <a
          href="#about"
          class="group flex flex-col items-center gap-2 text-slate-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <span class="text-xs font-mono tracking-widest uppercase">Explore</span>
          <ChevronDown class="w-5 h-5 animate-bounce group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '../data/portfolioData'
import profilePhoto from '../villanueva-photo.jpeg'
import { ArrowRight, Mail, ChevronDown } from 'lucide-vue-next'

const personal = portfolioData.personal
</script>

