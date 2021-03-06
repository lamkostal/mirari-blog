const pkg = require('./package');

const axios= require("axios");

module.exports = {
  target: 'static',
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: "Mirari - an MTGArena blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      {src:"https://cdnjs.cloudflare.com/ajax/libs/gsap/3.0.1/gsap.min.js"},
      {src:'/js/libs.core.min.js',SSR:true, defer:true},
      {src:'/js/perlin.js',SSR:true},
      {src:'/js/patch.js',SSR:true},

      
      {src:"//app.storyblok.com/f/storyblok-latest.js?t=RrA1YQyLgMAWAfMRzp1Rqgtt",defer:true},
      {src:"https://cdnjs.cloudflare.com/ajax/libs/css-doodle/0.7.1/css-doodle.min.js"},
     

    ]
   
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  // css: [
  //   '~assets/styles/main.css', '~assets/styles/style.scss'
  // ],

  css: [ '~assets/styles/style.scss','~assets/styles/main.css'],

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

    // '@nuxtjs/bulma',
    '@nuxtjs/markdownit'
  ],
  markdownit: {
    injected: true
  },
  /*
  ** Axios module configuration
  */
  generate:{
    routes: function(){
      return axios.get('https://api.storyblok.com/v1/cdn/stories?verion=published&token=Ux2Q0XBlson3pFKVPBGwswtt&starts_with=posts&cv=' + Math.floor(Date.now()/ 1e3))
      .then( res => {
        const blogPosts = res.data.stories.map( bp => bp.full_slug);
        return [
          "/",
          "/posts",
          "/about",
          ...blogPosts
        ]
      })
    }
  },

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
  pageTransition:{
    name:'fade',
    mode:'out-in'
  }
}
