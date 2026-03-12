<template>
  <section id="services" class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-heading font-bold text-center mb-12 text-gray-800">
        Nos Services
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
        >
          <div class="text-5xl mb-4 text-center">{{ service.icon }}</div>
          <h3 class="text-xl font-heading font-semibold mb-3 text-gray-800 text-center">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 font-body text-center">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    icon: '🎨',
    title: 'Peinture Airless Intérieure',
    description: 'Application professionnelle de peinture avec équipement airless haute pression pour un rendu impeccable et uniforme.'
  },
  {
    id: 2,
    icon: '🏠',
    title: 'Pose de Revêtement de Sol',
    description: 'Installation de tous types de revêtements de sol : carrelage, parquet, vinyle, lino avec finition soignée.'
  },
  {
    id: 3,
    icon: '✨',
    title: 'Vitrification de Parquet',
    description: 'Rénovation et protection de votre parquet avec des produits de qualité pour une finition durable et brillante.'
  },
  {
    id: 4,
    icon: '🧹',
    title: 'Ratissage',
    description: 'Préparation des surfaces avant peinture : ratissage, rebouchage et ponçage pour un résultat parfait.'
  }
]
</script>
