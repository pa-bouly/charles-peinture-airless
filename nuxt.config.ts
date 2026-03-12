// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app/',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
  },

  nitro: {
    preset: 'cloudflare_module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 300,
        ignored: ['**/.wrangler/**', '**/.output/**'],
      },
    },
  },
  googleFonts: {
    families: {
      Montserrat: [400, 600, 700],
      'Open Sans': [400, 600],
    },
    display: 'swap',
    preload: true,
  },
  app: {
    head: {
      title:
        'Charles Peinture Airless & Travaux - Peinture, Pose de Sol, Vitrification',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Spécialiste en peinture airless intérieure, pose de revêtement de sol, vitrification de parquet et ratissage. Qualité et précision avec Charles.',
        },
        {
          name: 'keywords',
          content:
            'peinture airless, pose de sol, vitrification parquet, ratissage, peinture intérieure, travaux, Lyon, France',
        },
        { name: 'author', content: 'Charles Peinture Airless & Travaux' },
        { property: 'og:title', content: 'Charles Peinture Airless & Travaux' },
        {
          property: 'og:description',
          content:
            'Spécialiste en peinture airless intérieure, pose de revêtement de sol, vitrification de parquet et ratissage.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', 'nitro-cloudflare-dev'],
});
