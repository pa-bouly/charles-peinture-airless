<template>
  <section id="contact" class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-heading font-bold text-center mb-12 text-gray-800">
        Contactez-nous
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Formulaire de contact -->
        <div>
          <form
            action="https://formsubmit.co/votre-email@example.com"
            method="POST"
            class="space-y-6"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_next" value="/" />
            
            <div>
              <label for="name" class="block text-gray-700 font-body font-semibold mb-2">
                Nom *
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label for="email" class="block text-gray-700 font-body font-semibold mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                placeholder="votre.email@example.com"
              />
            </div>

            <div>
              <label for="phone" class="block text-gray-700 font-body font-semibold mb-2">
                Téléphone *
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                name="phone"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                placeholder="06 12 34 56 78"
              />
            </div>

            <div>
              <label for="project-type" class="block text-gray-700 font-body font-semibold mb-2">
                Type de projet *
              </label>
              <select
                id="project-type"
                v-model="form.projectType"
                name="project_type"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
              >
                <option value="">Sélectionnez un type de projet</option>
                <option value="peinture-airless">Peinture Airless Intérieure</option>
                <option value="pose-sol">Pose de Revêtement de Sol</option>
                <option value="vitrification">Vitrification de Parquet</option>
                <option value="ratissage">Ratissage</option>
                <option value="autre">Autre</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-gray-700 font-body font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                required
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-body"
                placeholder="Décrivez votre projet..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-secondary text-white px-6 py-4 rounded-lg font-heading font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Envoyer
            </button>
          </form>
        </div>

        <!-- Coordonnées et carte -->
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-heading font-semibold mb-6 text-gray-800">
              Nos coordonnées
            </h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="text-primary text-2xl mr-4">📍</div>
                <div>
                  <p class="font-body text-gray-700">
                    Coutances, Manche
                  </p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-primary text-2xl mr-4">📞</div>
                <div>
                  <a href="tel:+33612345678" class="font-body text-gray-700 hover:text-primary transition-colors">
                    <!-- Remplacer par le numéro réel -->
                    +33 6 12 34 56 78
                  </a>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-primary text-2xl mr-4">✉️</div>
                <div>
                  <a :href="`mailto:${contactEmail}`" class="font-body text-gray-700 hover:text-primary transition-colors">
                    {{ contactEmail }}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Maps -->
          <iframe
            src="https://www.google.com/maps?q=49.085827,-1.2579634&z=14&hl=fr&output=embed"
            class="w-full h-64 rounded-lg"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Localisation Charlo Peinture Airless"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  projectType: '',
  message: ''
})

// Obfuscation de l'email pour réduire le scraping par les robots
// L'email est reconstruit côté client à partir de ses parties
const emailParts = {
  user: 'contact',
  domain: 'charles-peinture',
  tld: 'fr'
}

const contactEmail = computed(() => {
  return `${emailParts.user}@${emailParts.domain}.${emailParts.tld}`
})

const handleSubmit = async (e) => {
  // Le formulaire sera soumis via FormSubmit avec captcha activé
  // Ici on peut ajouter une validation supplémentaire ou un message de confirmation
  const formElement = e.target
  formElement.submit()
}
</script>
