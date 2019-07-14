const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Arenahub - a mtgArena blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src:'/js/libs.core.min.js',SSR:false},{src:'/js/cbs.min.js',SSR:false},{src:'/js/ops.js',SSR:false},{src:'/js/init.js',SSR:false},
      {src:"//app.storyblok.com/f/storyblok-latest.js?t=RrA1YQyLgMAWAfMRzp1Rqgtt"},
      {src:"https://cdnjs.cloudflare.com/ajax/libs/css-doodle/0.7.1/css-doodle.min.js"}

    ]
   
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/main.css'
  ],

 

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    ['storyblok-nuxt',{ accessToken: process.env.NODE_ENV == 'production' ? 'Ux2Q0XBlson3pFKVPBGwswtt':'RrA1YQyLgMAWAfMRzp1Rqgtt' , cacheProvider : 'memory'}],

    '@nuxtjs/bulma',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  /*
  ** Axios module configuration
  */
  

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  },
  transition:{
    name:'fade',
    mode:'out-in'
}
}
