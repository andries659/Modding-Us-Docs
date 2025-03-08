import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"Posts\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Posts\"},\"headers\":[{\"level\":2,\"title\":\"Posts\",\"slug\":\"posts\",\"link\":\"#posts\",\"children\":[]}],\"git\":{\"updatedTime\":1731789808000,\"contributors\":[{\"name\":\"AndriesWorks\",\"email\":\"andries46565@gmail.com\",\"commits\":1,\"url\":\"https://github.com/AndriesWorks\"}]},\"filePathRelative\":\"posts/README.md\"}")
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
