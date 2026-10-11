<template>
  <section id="about" class="py-24 px-4 sm:px-6 lg:px-8 relative">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="flex items-center gap-4 mb-12">
        <span class="font-mono text-emerald-600 dark:text-emerald-400 text-sm tracking-wider font-semibold">01 //</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">About Me</h2>
        <div class="flex-grow h-[1px] bg-slate-200 dark:bg-white/10 ml-4 max-w-xs"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <!-- Left: Narrative & Bio -->
        <div class="lg:col-span-7 space-y-6">
          <p
            v-for="(para, idx) in personal.bio"
            :key="idx"
            class="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            {{ para }}
          </p>

          <!-- Quick student pillars -->
          <div class="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="glass-card rounded-xl p-4">
              <div class="text-emerald-600 dark:text-emerald-400 font-mono text-sm font-semibold mb-1">Eager Learner</div>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                Quick to pick up modern frameworks, study system patterns, and solve programming challenges.
              </p>
            </div>
            <div class="glass-card rounded-xl p-4">
              <div class="text-emerald-600 dark:text-emerald-400 font-mono text-sm font-semibold mb-1">Clean Practice</div>
              <p class="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                Dedicated to writing well-structured, maintainable code with clear documentation.
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Code Snippet / Terminal Profile Card -->
        <div class="lg:col-span-5">
          <div class="glass-card rounded-2xl overflow-hidden shadow-2xl">
            <!-- Terminal Header -->
            <div class="bg-slate-100 dark:bg-surface-200/90 px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-white/5">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <span class="text-xs font-mono text-slate-500 dark:text-slate-400">student-profile.json</span>
              <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400">dev</span>
            </div>

            <!-- Terminal Body -->
            <div class="p-4 sm:p-5 font-mono text-xs sm:text-sm text-slate-800 dark:text-slate-300 space-y-2 overflow-x-auto bg-slate-50/80 dark:bg-[#0b0d14]/90">
              <div><span class="text-purple-600 dark:text-purple-400">const</span> <span class="text-blue-600 dark:text-blue-400">developer</span> = {</div>
              <div class="pl-4"><span class="text-slate-500 dark:text-slate-400">name:</span> <span class="text-emerald-600 dark:text-emerald-300">"{{ personal.name }}"</span>,</div>
              <div class="pl-4"><span class="text-slate-500 dark:text-slate-400">role:</span> <span class="text-emerald-600 dark:text-emerald-300">"{{ personal.title }}"</span>,</div>
              <div class="pl-4"><span class="text-slate-500 dark:text-slate-400">status:</span> <span class="text-emerald-600 dark:text-emerald-300">"{{ personal.status }}"</span>,</div>
              <div class="pl-4"><span class="text-slate-500 dark:text-slate-400">coreTech:</span> [</div>
              <div class="pl-8 text-amber-600 dark:text-amber-300">"HTML", "CSS", "JS", "PHP", "Laravel", "Tailwind"</div>
              <div class="pl-4">],</div>
              <div class="pl-4"><span class="text-slate-500 dark:text-slate-400">learningMindset:</span> <span class="text-cyan-600 dark:text-cyan-400">true</span></div>
              <div>}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Highlights Section -->
      <div class="mt-16">
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-6">Core Specializations</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="(highlight, i) in aboutHighlights"
            :key="i"
            class="glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-mono font-bold mb-4">
                0{{ i + 1 }}
              </div>
              <h4 class="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">{{ highlight.title }}</h4>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{{ highlight.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '../data/portfolioData'

const personal = portfolioData.personal
const aboutHighlights = portfolioData.aboutHighlights
</script>

