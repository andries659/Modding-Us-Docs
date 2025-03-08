import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/crewmates/crewmates.html.vue"
const data = JSON.parse("{\"path\":\"/roles/crewmates/crewmates.html\",\"title\":\"Crewmate Roles\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Crewmate Roles\",\"prev\":\"/roles.html\",\"next\":\"/roles.html\",\"sidebar\":[{\"text\":\"Crewmates\",\"link\":\"/roles/crewmates/crewmates.html\"},{\"text\":\"Impostors\",\"link\":\"/roles/impostors/impostors.html\"},{\"text\":\"Neutrals\",\"link\":\"/roles/neutrals/neutrals.html\"}]},\"headers\":[{\"level\":2,\"title\":\"Support\",\"slug\":\"support\",\"link\":\"#support\",\"children\":[]},{\"level\":2,\"title\":\"Power\",\"slug\":\"power\",\"link\":\"#power\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"roles/crewmates/crewmates.md\"}")
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
