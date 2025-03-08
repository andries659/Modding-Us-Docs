import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles.html.vue"
const data = JSON.parse("{\"path\":\"/roles.html\",\"title\":\"Roles\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Roles\",\"image\":\"/images/roles.jpg\",\"sidebar\":[{\"text\":\"Crewmates\",\"link\":\"/roles/crewmates/crewmates.html\"},{\"text\":\"Impostors\",\"link\":\"/roles/impostors/impostors.html\"},{\"text\":\"Neutrals\",\"link\":\"/roles/neutrals/neutrals.html\"}],\"contributors\":false},\"headers\":[{\"level\":2,\"title\":\"Latest Versions\",\"slug\":\"latest-versions\",\"link\":\"#latest-versions\",\"children\":[]},{\"level\":2,\"title\":\"Role Summary\",\"slug\":\"role-summary\",\"link\":\"#role-summary\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"roles.md\"}")
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
