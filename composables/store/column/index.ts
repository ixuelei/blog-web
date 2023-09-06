/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-10 15:58:40
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-06 09:31:02
 * @Description:
 */
// http://www.syrr.cn/news/6199.html
// import { defineStore } from 'pinia'
export const BnColumn = defineStore('BnColumn', {
  state: () => {
    return {
      /**
       * 全部菜单
       */
      column: [] as any,
      /**
       * 面包屑
       */
      crumbColumn: [] as any,

      /**
       * 同级导航 Gavin:三级及以上使用
       */
      sameColumn: [] as any,

      /**
       * 当前二级菜单相邻导航
       */
      twoColumn: [] as any,
      /**
       * 分类
       */
      typeIndex: 0,
      /**
       * 分类list
       */
      typeList: [
        {
          value: '/article-list_all',
          name: '全部'
        },
        {
          value: '/article-list_qdkj',
          name: '前端框架'
        },
        {
          value: '/article-list_qdgch',
          name: '前端工程化'
        },
        {
          value: '/article-list_xmbs',
          name: '项目部署'
        }
      ] as any
    }
  },
  // 初始化数据请求导航栏吗
  actions: {
    async getColumn() {
      try {
        const { code, data }: any = await httpGet('/prod-api/platform/getColumn')
        if (code === 200) {
          this.column = data
        }
      } catch (error) {
        console.log(error, 'error')
      }
    }
  },
  // persist: true
  // 状态持久化 默认存到cookie下只有4kb
  // persist: true
  // 存储到localStorage 5M
  persist: {
    storage: persistedState.sessionStorage
  }
})
