import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/blogs.html.vue"
const data = JSON.parse("{\"path\":\"/blogs.html\",\"title\":\"Blogs\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Blogs\"},\"headers\":[{\"level\":2,\"title\":\"Blog Posts\",\"slug\":\"blog-posts\",\"link\":\"#blog-posts\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"blogs.md\"}")
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
