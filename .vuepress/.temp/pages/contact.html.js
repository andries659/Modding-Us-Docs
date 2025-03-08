import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/contact.html.vue"
const data = JSON.parse("{\"path\":\"/contact.html\",\"title\":\"Contact us\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Contact us\"},\"headers\":[{\"level\":2,\"title\":\"Get in touch\",\"slug\":\"get-in-touch\",\"link\":\"#get-in-touch\",\"children\":[]},{\"level\":2,\"title\":\"Social media\",\"slug\":\"social-media\",\"link\":\"#social-media\",\"children\":[]}],\"git\":{\"updatedTime\":1731789808000,\"contributors\":[{\"name\":\"AndriesWorks\",\"email\":\"andries46565@gmail.com\",\"commits\":1,\"url\":\"https://github.com/AndriesWorks\"}]},\"filePathRelative\":\"contact.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
