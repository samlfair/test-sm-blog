export default {
  mode: "universal",
  target: "static",

  /*
   ** Headers of the page
   */
  head: {
    title: "Prismic + Nuxt Blog example",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "Prismic + Nuxt Blog example"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Lato:300,400,700,900"
      }
    ],
    script: [
      {
        src:
          "https://cdn.polyfill.io/v2/polyfill.min.js?features=Element.prototype.classList"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff"
  },

  /*
   ** Global CSS
   */
  css: [
    "@/assets/css/resetr.css",
    "@/assets/css/common.css",
    "vue-essential-slices/src/styles/styles.scss"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // modules for full static before `nuxt export` (coming in v2.12)
    "@/modules/static",
    "@/modules/crawler", // https://prismic-nuxt.js.org/
    "@nuxtjs/prismic",
    [
      "@nuxtjs/prismic",
      {
        endpoint: "",
        apiOptions: {
          routes: [
            {
              type: "page",
              path: "/:uid"
            }
          ]
        }
      }
    ],
    ["nuxt-sm"]
  ],
  prismic: {
    endpoint: "https://test-345734645968.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer"
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["vue"] = "vue/dist/vue.common";
    },

    transpile: ["vue-slicezone", "nuxt-sm"]
  },
  generate: {
    fallback: "404.html" // Netlify reads a 404.html, Nuxt will load as an SPA
  }
};
