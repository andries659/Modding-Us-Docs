import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/changelogs.html.vue"
const data = JSON.parse("{\"path\":\"/changelogs.html\",\"title\":\"Changelogs\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Changelogs\",\"sidebar\":[{\"text\":\"Latest TOR-W Changelogs\",\"link\":\"/changelogs.html\"},{\"text\":\"Latest Modding Us Changelogs\",\"link\":\"/changelogs/modding-us/mu.html\"},{\"text\":\"Changelogs Tags\",\"link\":\"/changelogs/tags.html\"},{\"text\":\"All Stable Changelogs\",\"link\":\"/changelogs/stable.html\"},{\"text\":\"All Dev Changelogs\",\"link\":\"/changelogs/dev.html\"}]},\"headers\":[{\"level\":2,\"title\":\"Latest changelogs\",\"slug\":\"latest-changelogs\",\"link\":\"#latest-changelogs\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"changelogs.md\"}")
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
