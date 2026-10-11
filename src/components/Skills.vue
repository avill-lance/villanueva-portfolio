<template>
  <section id="skills" class="py-24 px-4 sm:px-6 lg:px-8 relative bg-slate-100/40 dark:bg-[#0c0e15]/40 transition-colors duration-300">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="flex items-center gap-4 mb-4">
        <span class="font-mono text-emerald-600 dark:text-emerald-400 text-sm tracking-wider font-semibold">02 //</span>
        <h2 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">Tech Stack</h2>
        <div class="flex-grow h-[1px] bg-slate-200 dark:bg-white/10 ml-4 max-w-xs"></div>
      </div>
      <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mb-12">
        A focused toolkit of languages, frameworks, databases, and creative design software I practice and build with.
      </p>

      <!-- Category Tabs (Filter or View All) -->
      <div class="flex flex-wrap gap-2 mb-10">
        <button
          v-for="cat in categories"
          :key="cat.key"
          @click="activeCategory = cat.key"
          class="px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200"
          :class="[
            activeCategory === cat.key
              ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 shadow-sm'
              : 'bg-white dark:bg-surface-100 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills Cards / Badges Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div
          v-for="category in visibleCategories"
          :key="category.key"
          class="glass-card glass-card-hover rounded-2xl p-6"
        >
          <div class="flex items-center justify-between mb-5 pb-3 border-b border-slate-200 dark:border-white/5">
            <h3 class="text-base font-semibold text-slate-900 dark:text-white font-mono flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
              {{ category.label }}
            </h3>
            <span class="text-xs font-mono text-slate-500">
              {{ skills[category.key]?.length || 0 }} items
            </span>
          </div>

          <div class="flex flex-wrap gap-2.5">
            <span
              v-for="skill in skills[category.key]"
              :key="skill"
              class="px-3.5 py-2 rounded-lg bg-slate-100 dark:bg-surface-100/90 hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300 hover:border-emerald-500/30 border border-slate-200/80 dark:border-white/5 text-xs font-mono text-slate-800 dark:text-slate-300 transition-all duration-200 cursor-default shadow-xs"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { portfolioData } from '../data/portfolioData'

const skills = portfolioData.skills
const activeCategory = ref('all')

const categories = [
  { key: 'all', label: 'All Technologies' },
  { key: 'languages', label: 'Core Languages' },
  { key: 'frameworks', label: 'Frameworks & Styling' },
  { key: 'databases', label: 'Databases & Backend' },
  { key: 'toolsAndCreative', label: 'Tools & Creative Media' }
]

const visibleCategories = computed(() => {
  const allList = [
    { key: 'languages', label: 'Core Languages' },
    { key: 'frameworks', label: 'Frameworks & Styling' },
    { key: 'databases', label: 'Databases & Backend' },
    { key: 'toolsAndCreative', label: 'Tools & Creative Media' }
  ]

  if (activeCategory.value === 'all') {
    return allList
  }
  return allList.filter(c => c.key === activeCategory.value)
})
</script>

