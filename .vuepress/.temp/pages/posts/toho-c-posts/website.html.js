import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/posts/toho-c-posts/website.html.vue"
const data = JSON.parse("{\"path\":\"/posts/toho-c-posts/website.html\",\"title\":\"Website Changes\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Website Changes\",\"prev\":\"/posts/toho-c-posts/toho-c-v1.0.0.html\",\"next\":\"/posts/posts.html\"},\"headers\":[{\"level\":2,\"title\":\"⚒️ Changes\",\"slug\":\"changes\",\"link\":\"#changes\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/toho-c-posts/website.md\"}")
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
