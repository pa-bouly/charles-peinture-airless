<template>
  <section id="realisations" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2
        class="text-4xl font-heading font-bold text-center mb-12 text-gray-800"
      >
        Nos Réalisations
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          <!-- Placeholder pour images avant/après -->
          <div
            class="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center bg-cover bg-center"
            :style="{
              backgroundImage: project.image ? `url(${project.image})` : 'none',
            }"
          >
            <div
              v-if="!project.image"
              class="text-gray-400 text-sm text-center p-4"
            >
              <div class="text-4xl mb-2">{{ project.icon }}</div>
              <div>{{ project.placeholder }}</div>
            </div>
          </div>
          <!-- Overlay au survol -->
          <div
            class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
          >
            <div
              class="text-white text-center p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <h3 class="text-xl font-heading font-semibold mb-2">
                {{ project.title }}
              </h3>
              <p class="text-sm font-body">{{ project.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    icon: '🎨',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80',
    placeholder: 'Photo avant/après - Peinture Airless',
    title: 'Peinture Airless Salon',
    description:
      "Transformation complète d'un salon avec peinture airless haute qualité",
  },
  {
    icon: '🎨',
    image:
      'https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&w=1200&q=80',
    placeholder: 'Photo avant/après - Peinture Airless',
    title: 'Peinture Airless Chambre',
    description: "Rénovation d'une chambre avec finition impeccable",
  },
  {
    icon: '🏗️',
    image:
      'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80',
    placeholder: 'Photo avant/après - Pose de Sol',
    title: 'Pose Carrelage Cuisine',
    description: 'Installation de carrelage moderne dans une cuisine',
  },
  {
    icon: '✨',
    image: '/images/gallery/vitrification-parquet-ancien.png',
    placeholder: 'Photo avant/après - Vitrification',
    title: 'Vitrification Parquet Ancien',
    description: "Rénovation complète d'un parquet ancien avec vitrification",
  },
  {
    icon: '✨',
    image: '/images/gallery/vitrification-parquet-moderne.png',
    placeholder: 'Photo avant/après - Vitrification',
    title: 'Vitrification Parquet Moderne',
    description: 'Protection et brillance pour un parquet neuf',
  },
  {
    icon: '🧹',
    image:
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80',
    placeholder: 'Photo avant/après - Ratissage',
    title: 'Ratissage et Préparation',
    description: 'Préparation de surface avant peinture',
  },
  {
    icon: '🎨',
    image:
      'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=1200&q=80',
    placeholder: 'Photo avant/après - Projet Complet',
    title: 'Rénovation Complète',
    description: 'Projet complet : ratissage, peinture et finitions',
  },
];
</script>
