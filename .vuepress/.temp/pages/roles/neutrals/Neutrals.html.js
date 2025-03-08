import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/neutrals/neutrals.html.vue"
const data = JSON.parse("{\"path\":\"/roles/neutrals/neutrals.html\",\"title\":\"Neutral Roles\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Neutral Roles\",\"prev\":\"/roles.md\",\"next\":\"/roles.html\",\"sidebar\":[{\"text\":\"Crewmates\",\"link\":\"/roles/crewmates/crewmates.html\"},{\"text\":\"Impostors\",\"link\":\"/roles/impostors/impostors.html\"},{\"text\":\"Neutrals\",\"link\":\"/roles/neutrals/neutrals.html\"}]},\"headers\":[{\"level\":2,\"title\":\"Chaos\",\"slug\":\"chaos\",\"link\":\"#chaos\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"roles/neutrals/neutrals.md\"}")
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
