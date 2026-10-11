<template>
  <section id="projects" class="py-24 px-4 sm:px-6 lg:px-8 relative">
    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <span class="font-mono text-emerald-400 text-sm tracking-wider font-semibold">03 //</span>
            <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
            <div class="hidden sm:block flex-grow h-[1px] bg-white/10 ml-4 max-w-xs"></div>
          </div>
          <p class="text-slate-400 text-sm sm:text-base max-w-xl">
            Selected works showing end-to-end craftsmanship, from concept to deployment.
          </p>
        </div>

        <!-- Filter tabs -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="filter in projectFilters"
            :key="filter"
            @click="activeFilter = filter"
            class="px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200"
            :class="[
              activeFilter === filter
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-surface-100/70 text-slate-400 hover:text-slate-200 border border-white/5'
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <!-- Project Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="project in filteredProjects"
          :key="project.id"
          class="group glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-500/10"
        >
          <div class="p-6">
            <!-- Header with Category and Links -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <span class="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-emerald-400 border border-emerald-500/20">
                {{ project.category }}
              </span>

              <div class="flex items-center gap-3">
                <a
                  :href="project.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-400 hover:text-white transition-colors"
                  :aria-label="'View ' + project.title + ' source on GitHub'"
                >
                  <Github class="w-4 h-4" />
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-slate-400 hover:text-emerald-400 transition-colors"
                  :aria-label="'View ' + project.title + ' live preview'"
                >
                  <ExternalLink class="w-4 h-4" />
                </a>
              </div>
            </div>

            <!-- Title & Description -->
            <h3 class="text-lg font-bold text-slate-100 group-hover:text-emerald-400 transition-colors mb-2.5">
              {{ project.title }}
            </h3>

            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              {{ project.description }}
            </p>
          </div>

          <!-- Tech stack tags -->
          <div class="p-6 pt-0">
            <div class="flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-surface-100 border border-white/5"
              >
                {{ t }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { portfolioData } from '../data/portfolioData'
import { Github, ExternalLink } from 'lucide-vue-next'

const projects = portfolioData.projects
const activeFilter = ref('All')

const projectFilters = ['All', 'Full Stack', 'Frontend', 'Backend', 'DevOps']

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter(p => p.category === activeFilter.value)
})
</script>
