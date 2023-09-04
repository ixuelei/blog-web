/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-09-02 17:24:55
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-02 17:53:09
 * @Description:
 */
import 'animate.css'
import 'animate.css/animate.compat.css'
export default defineNuxtPlugin(async () => {
  if (process.client) {
    const {default:WOW} = await import('wow.js')
    console.log(WOW,'jj')
    new WOW().init()
  }
})
