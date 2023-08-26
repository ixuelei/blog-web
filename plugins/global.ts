/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-16 09:56:25
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:23:44
 * @Description:
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default defineNuxtPlugin((NuxtApp: any) => {
  // nuxtApp包含的属性可看文档 https://nuxt.com/docs/guide/going-further/internals
  // 全局组件引入
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    NuxtApp.vueApp.component(key, component)
  }
})
