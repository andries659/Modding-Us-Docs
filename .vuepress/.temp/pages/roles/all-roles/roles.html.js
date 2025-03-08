import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/all-roles/roles.html.vue"
const data = JSON.parse("{\"path\":\"/roles/all-roles/roles.html\",\"title\":\"Roles\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Roles\",\"image\":\"/images/roles.jpg\",\"sidebar\":[{\"text\":\"Crewmates\",\"link\":\"/roles/crewmates/Crewmates.html\"},{\"text\":\"Impostors\",\"link\":\"/roles/impostors/Impostors.html\"},{\"text\":\"Neutrals\",\"link\":\"/roles/neutrals/Neutrals.html\"}],\"contributors\":false},\"headers\":[],\"git\":{},\"filePathRelative\":\"roles/all-roles/roles.md\"}")
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
