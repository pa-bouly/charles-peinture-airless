<template>
  <section id="temoignages" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-heading font-bold text-center mb-12 text-gray-800">
        Ce que disent nos clients
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center mb-4">
            <div
              v-for="i in 5"
              :key="i"
              class="text-secondary text-xl"
            >
              ★
            </div>
          </div>
          <p class="text-gray-700 font-body mb-4 italic">
            "{{ testimonial.quote }}"
          </p>
          <div class="border-t pt-4">
            <p class="font-heading font-semibold text-gray-800">
              {{ testimonial.name }}
            </p>
            <p class="text-gray-600 text-sm font-body">
              {{ testimonial.location }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    quote: 'Charles a transformé notre salon avec une précision incroyable ! Le travail est impeccable et le rendu dépasse nos attentes. Je recommande vivement.',
    name: 'Famille Dupont',
    location: 'Granville'
  },
  {
    id: 2,
    quote: 'Service professionnel de A à Z. La vitrification de notre parquet a redonné vie à notre intérieur. Travail soigné et respect des délais.',
    name: 'Marie Martin',
    location: 'Saint-Lô'
  },
  {
    id: 3,
    quote: 'Excellent rapport qualité-prix. Charles a su conseiller et réaliser la pose de notre nouveau sol avec beaucoup de professionnalisme. À refaire sans hésitation !',
    name: 'Jean-Pierre Bernard',
    location: 'Agon-Coutainville'
  }
]
</script>
