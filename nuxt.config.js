
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'WeJapa | Your Job Search Ends Here',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://kit.fontawesome.com/0df96dc054.js',
        type: 'text/javascript'
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js',
        type: 'text/javascript'
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js',
        type: 'text/javascript'
      }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#00FFB8'
    // continuous: true
  },
  loadingIndicator: {
    name: 'pulse',
    color: '#1DBF69',
    background: 'white'
  },

  /*
  ** Page Transition
  */
  pageTransition: {
    name: 'fade',
    mode: 'out-in'
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/styles.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '~/plugins/client-plugins.js',
      mode: 'client'
    }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-validate', { lang: 'en', events: 'change|blur' }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://wejapabackend.herokuapp.com/api/'
  },

  /*
  ** Environment variables
  */
  env: {
    baseUrl: process.env.BASE_URL || 'https://wejapabackend.herokuapp.com/api/'
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
