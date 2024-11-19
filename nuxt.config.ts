// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth'
    
  ],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: "HR The Jas", 
      meta: [
        // { name: "description", content: "คำอธิบายเว็บไซต์" },
        // { name: "keywords", content: "keyword1, keyword2, keyword3" }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap',
        },
      ],
      // link: [
      //   // เพิ่ม favicon
      //   { rel: 'icon', type: 'image/png', href: '/logo.png' }, 
      //   // เพิ่ม Apple Touch Icon (สำหรับอุปกรณ์ Apple)
      //   { rel: 'apple-touch-icon', href: '/logo.png' }
      // ]
    }
  },
  auth: {
    globalAppMiddleware: true,
    baseURL: 'http://localhost:7735/Hr_Stamp',

    // baseURL: process.env.api_base_url,
    provider: {
      type: 'local',
      endpoints: {
        signIn: { path: '/Login', method: 'post' },
        getSession: { path: '/Get_User', method: 'get' }
      },
      pages: { login: '/' },
      token: { signInResponseTokenPointer: '/token', maxAgeInSeconds: 60 * 10 * 10 },
      sessionDataType: {}
    },
    enableSessionRefreshPeriodically: 60 * 10 * 10,
    enableSessionRefreshOnWindowFocus: false,
    globalMiddlewareOptions: {
      allow404WithoutAuth: false,
      addDefaultCallbackUrl: '/'
    },
  },
})


