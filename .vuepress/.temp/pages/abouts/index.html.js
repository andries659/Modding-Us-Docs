import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouts/index.html.vue"
const data = JSON.parse("{\"path\":\"/abouts/\",\"title\":\"About\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About\"},\"headers\":[{\"level\":2,\"title\":\"Contact Us\",\"slug\":\"contact-us\",\"link\":\"#contact-us\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"abouts/README.md\"}")
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
