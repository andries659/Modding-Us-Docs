import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/about/aboutUs.html.vue"
const data = JSON.parse("{\"path\":\"/about/aboutUs.html\",\"title\":\"About Us\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"About Us\"},\"headers\":[{\"level\":2,\"title\":\"Our Mission\",\"slug\":\"our-mission\",\"link\":\"#our-mission\",\"children\":[]},{\"level\":2,\"title\":\"What We Offer\",\"slug\":\"what-we-offer\",\"link\":\"#what-we-offer\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"about/aboutUs.md\"}")
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
