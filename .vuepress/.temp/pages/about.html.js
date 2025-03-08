import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/about.html.vue"
const data = JSON.parse("{\"path\":\"/about.html\",\"title\":\"About\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About\"},\"headers\":[{\"level\":2,\"title\":\"Contact Us\",\"slug\":\"contact-us\",\"link\":\"#contact-us\",\"children\":[]}],\"git\":{\"updatedTime\":1731789808000,\"contributors\":[{\"name\":\"AndriesWorks\",\"email\":\"andries46565@gmail.com\",\"commits\":1,\"url\":\"https://github.com/AndriesWorks\"}]},\"filePathRelative\":\"about.md\"}")
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
