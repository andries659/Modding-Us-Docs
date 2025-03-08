import comp from "C:/Users/User/Desktop/vuepress-starter/docs/.vuepress/.temp/pages/roles/modding-us/roles.html.vue"
const data = JSON.parse("{\"path\":\"/roles/modding-us/roles.html\",\"title\":\"TOR-W Roles\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"TOR-W Roles\",\"image\":\"/images/roles.jpg\",\"sidebar\":[{\"text\":\"Crewmates\",\"link\":\"/roles/tor-w/crewmates/crewmates.html\"},{\"text\":\"Impostors\",\"link\":\"/roles/tor-w/impostors/impostors.html\"},{\"text\":\"Neutrals\",\"link\":\"/roles/tor-w/neutrals/neutrals.html\"}],\"contributors\":false},\"headers\":[{\"level\":2,\"title\":\"Latest Versions\",\"slug\":\"latest-versions\",\"link\":\"#latest-versions\",\"children\":[]},{\"level\":2,\"title\":\"Role Summary\",\"slug\":\"role-summary\",\"link\":\"#role-summary\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"roles/modding-us/roles.md\"}")
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
