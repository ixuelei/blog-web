/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-10 15:58:40
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-05-02 15:24:42
 * @Description:
 */
// http://www.syrr.cn/news/6199.html
// import { defineStore } from 'pinia'
export const pUser = defineStore('pUser', {
  state: () => {
    return {
      name: 'Dragon Wu123',
      age: 100,
      sex: 'male',
      token: 'xxx'
    }
  },
  persist: true
})
