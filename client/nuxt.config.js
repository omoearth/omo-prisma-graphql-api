export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "stylearth",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "the power of movement" },
      { name: "theme-color", content: "#ffffff" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "shortcut icon", href: "/favicon.ico" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  router: {
    base: '/'
  },
  /*
  ** Global CSS
  */
  // css: [
  // ],

  /*
  ** Plugins to load before mounting the App
  */
  // plugins: [
  // ],

  /*
  ** Nuxt.js modules
  */
  modules: [ '~/modules' ],
  
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://eu1.prisma.sh/samuel-andert-d264c8/stylearth/dev/',
        // wsEndpoint: 'wss://eu1.prisma.sh/samuel-andert-d264c8/stylearth/dev',
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}

