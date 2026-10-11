import { onMounted, onUnmounted, ref } from 'vue'

export function useScrollReveal(options = {}) {
  const isVisible = ref(false)
  const targetRef = ref(null)

  let observer = null

  onMounted(() => {
    if (!targetRef.value) return

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (options.once !== false) {
          observer?.disconnect()
        }
      } else if (options.once === false) {
        isVisible.value = false
      }
    }, {
      threshold: options.threshold || 0.15,
      rootMargin: options.rootMargin || '0px 0px -40px 0px',
      ...options
    })

    observer.observe(targetRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    targetRef,
    isVisible
  }
}
