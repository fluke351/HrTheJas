// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  modules: [
    '@nuxtjs/tailwindcss'
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
      // link: [
      //   // เพิ่ม favicon
      //   { rel: 'icon', type: 'image/png', href: '/logo.png' }, 
      //   // เพิ่ม Apple Touch Icon (สำหรับอุปกรณ์ Apple)
      //   { rel: 'apple-touch-icon', href: '/logo.png' }
      // ]
    }
  }
})


