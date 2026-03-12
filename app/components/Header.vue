<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-900',
      isScrolled ? 'shadow-lg' : ''
    ]"
  >
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-2">
          <img
            src="/images/logo.png"
            alt="Charles Peinture Airless & Travaux"
            class="h-12 w-auto"
          />
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-6">
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="text-gray-300 hover:text-white font-body font-semibold transition-colors"
            @click.prevent="scrollTo(link.href)"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden text-gray-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!mobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden mt-4 pb-4 space-y-2"
      >
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="block text-gray-300 hover:text-white font-body font-semibold py-2 transition-colors"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Témoignages', href: '#temoignages' },
  { label: 'Contact', href: '#contact' }
]

const scrollTo = (href) => {
  const targetId = href.replace('#', '')
  const element = document.getElementById(targetId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    mobileMenuOpen.value = false
  }
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  window.addEventListener('scroll', handleScroll)
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>
