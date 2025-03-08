import "C:/Users/User/Desktop/Modding-Us/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "C:/Users/User/Desktop/Modding-Us/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "C:/Users/User/Desktop/Modding-Us/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "C:/Users/User/Desktop/Modding-Us/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "C:/Users/User/Desktop/Modding-Us/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "C:/Users/User/Desktop/Modding-Us/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
