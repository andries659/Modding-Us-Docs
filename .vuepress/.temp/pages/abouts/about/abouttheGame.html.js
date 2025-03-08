import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/abouts/about/abouttheGame.html.vue"
const data = JSON.parse("{\"path\":\"/abouts/about/abouttheGame.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"abouts/about/abouttheGame.md\"}")
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
