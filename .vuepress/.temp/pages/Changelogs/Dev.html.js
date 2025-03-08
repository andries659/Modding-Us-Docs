import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs/dev.html.vue"
const data = JSON.parse("{\"path\":\"/changelogs/dev.html\",\"title\":\"Dev Changelogs\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Dev Changelogs\",\"sidebar\":[{\"text\":\"Latest Changelogs\",\"link\":\"/changelogs.html\"},{\"text\":\"Changelogs Tags\",\"link\":\"/changelogs/tags.html\"},{\"text\":\"All Stable Changelogs\",\"link\":\"/changelogs/stable.html\"},{\"text\":\"All Dev Changelogs\",\"link\":\"/changelogs/dev.html\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"changelogs/dev.md\"}")
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
