/*
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-10 15:58:40
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-04 09:33:24
 * @Description:
 */
// http://www.syrr.cn/news/6199.html
// import { defineStore } from 'pinia'
export const BnApp = defineStore('BnApp', {
  state: () => {
    return {
      themeType: 'light', // 主题样式
      windowInfo: {
        width: 0,
        height: 0
      }, // 窗口宽高
      /**
       * 滚动条高度
       */
      scrollTop: 0,
      /**
       * 移动端菜单展示状态
      */
     isShowMenu: false,
     /**
       * 移动端导航样式
      */
     headerClass: 'fixed-top',
      name: null,
      counter: 17,
      age: 100,
      sex: 'male',
      navAll: [
        [
          {
            name: '学校概况',
            children: [],
            path: '/into_hos',
            model_view: '',
            channel_code: 'xxgk'
          },
          {
            name: '领导班子',
            children: [],
            path: '/details_lsyg/1',
            model_view: '',
            channel_code: 'lsyg'
          },
          {
            name: '地理位置',
            children: [],
            path: '',
            model_view: '',
            channel_code: ''
          },
          {
            name: '校长致辞',
            children: [],
            path: '',
            model_view: '',
            channel_code: ''
          },
          {
            name: '郑中视频',
            children: [],
            path: '',
            model_view: '',
            channel_code: ''
          },
          {
            name: '校史回眸',
            children: [],
            path: '',
            model_view: '',
            channel_code: ''
          }
        ]
      ]
    }
  },
  getters: {},
  // 初始化数据请求导航栏吗
  actions: {
    // async getAppConfig() {
    //   try {
    //     httpGet('/test-api/column').then((res: any) => {
    //       console.log(res,'resjjj')
    //       this.name = res.data
    //     })
    //   } catch (error) {}
    // }
  },
  // 状态持久化 默认存到cookie下只有4kb
  // persist: true
  // 存储到localStorage 5M
  persist: {
    storage: persistedState.sessionStorage
  }
})
