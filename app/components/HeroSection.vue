<template>
  <section
    id="accueil"
    class="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
    style="background-image: url('/images/hero/hero-airless.png')"
  >
    <!-- Placeholder pour image de fond : remplacer par une vraie photo de peintre avec équipement airless -->
    <div class="container mx-auto px-4 z-10 text-center text-white">
      <img
        src="/images/logo.png"
        alt="Logo Charles Peinture Airless"
        class="mx-auto mb-6 h-32 w-auto rounded-2xl md:h-40"
      />
      <h1
        class="text-4xl md:text-6xl font-heading font-bold mb-6 animate-fade-in"
      >
        Peinture Airless & Travaux
      </h1>
      <p class="text-xl md:text-2xl mb-4 font-body">
        Qualité et Précision avec Charles
      </p>
      <p class="text-lg md:text-xl mb-8 font-body max-w-3xl mx-auto">
        Spécialiste en peinture intérieure, pose de revêtement de sol,
        vitrification de parquet et ratissage.
      </p>
      <button
        @click="scrollToContact"
        class="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-heading font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Demander un devis gratuit
      </button>
    </div>
  </section>
</template>

<script setup>
const scrollToContact = () => {
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>
