<template>
  <div class="min-h-screen bg-slate-50 dark:bg-[#090a0f] text-slate-800 dark:text-slate-100 relative selection:bg-emerald-500/30 selection:text-emerald-700 dark:selection:text-emerald-300 transition-colors duration-300 overflow-x-hidden">
    <!-- Ambient Grid Background -->
    <div class="fixed inset-0 bg-grid-pattern opacity-70 pointer-events-none -z-20"></div>

    <!-- Ambient Vignette -->
    <div class="fixed inset-0 bg-gradient-to-b from-transparent via-slate-100/40 to-slate-50 dark:via-[#090a0f]/50 dark:to-[#090a0f] pointer-events-none -z-10 transition-colors duration-300"></div>

    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Content Sections -->
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import { useTheme } from './composables/useTheme'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

