<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-29 14:09:34
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-04 08:54:58
 * @Description: 默认详情页面
-->
<template>
  <div class="details">
    <BnTopImg title="历史沿革" />
    <main class="container flex mx-auto">
      <!-- 二级导航  -->
      <BnLeftNav :nav-data="navAll[0]" :active="active" />
      <!-- {{ navData[active] }} -->
      <article class="p-4 bg-white" v-html="data"></article>
    </main>
  </div>
</template>
<script setup lang="ts">
const BnApp = useStore.BnApp()
const { navAll } = storeToRefs(BnApp)
const $route = useRoute()
const active = ref()
active.value = $route.params.channel_code
console.log($route.params, '$route.params')
// eslint-disable-next-line require-await
const { data } = await useAsyncData('count', async () => {
  // const html: any = await httpGet('/test-api/details/' + active.value)
  return `<div class="zhengwencontent">

        <h3 class="jianjietitle">这就是一个临时数据仅供参考</h3><br>

        <div class="xuexiaojianjie">

            <p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: rgb(255, 255, 255); font-family: 微软雅黑; color: rgb(117, 131, 157); line-height: 30px; white-space: normal;"><span style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 18px; vertical-align: baseline; background: transparent;">学校地址：郑州高新技术产业开发区樱花街2号（樱花街校区）</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: rgb(255, 255, 255); font-family: 微软雅黑; color: rgb(117, 131, 157); line-height: 30px; white-space: normal;">&nbsp;</p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: rgb(255, 255, 255); font-family: 微软雅黑; color: rgb(117, 131, 157); line-height: 30px; white-space: normal;"><span style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 18px; vertical-align: baseline; background: transparent;">乘车路线：</span></p><p style="margin-top: 0px; margin-bottom: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: rgb(255, 255, 255); font-family: 微软雅黑; color: rgb(117, 131, 157); line-height: 30px; white-space: normal;"><span style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 18px; vertical-align: baseline; background: transparent;">学校位于郑州市高新技术开发区（西开发区）樱花街2号，乘B12、B2、B27快速公交到瑞达路合欢街站下，乘31路公交车到郑州美术馆站下，乘B35、B66、B67、45路公交车到科学大道瑞达路站下。</span></p><p style="text-align: center;"><img src="../static/images/demo/1-22031G5215L54.jpg" title="1557107594547044.jpg" alt="1.jpg"></p><p><span style="color: rgb(117, 131, 157); font-family: 微软雅黑; font-size: 18px; background-color: rgb(255, 255, 255);">学校地址：郑州高新技术产业开发区红梅街2号（红梅街校区）</span></p><p><span style="color: rgb(117, 131, 157); font-family: 微软雅黑; font-size: 18px; background-color: rgb(255, 255, 255);"><br></span></p><p><span style="color: rgb(117, 131, 157); font-family: 微软雅黑; font-size: 18px; background-color: rgb(255, 255, 255);"></span></p><p style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: rgb(255, 255, 255); font-family: 微软雅黑; color: rgb(117, 131, 157); line-height: 30px;"><span style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 18px; vertical-align: baseline; background: transparent;">乘车路线：</span></p><p style="margin-top: 0px; margin-bottom: 0px; white-space: normal; padding: 0px; border: 0px; outline: 0px; font-size: 14px; vertical-align: baseline; background: rgb(255, 255, 255); font-family: 微软雅黑; color: rgb(117, 131, 157); line-height: 30px;"><span style="margin: 0px; padding: 0px; border: 0px; outline: 0px; font-size: 18px; vertical-align: baseline; background: transparent;">学校位于郑州市高新技术开发区（西开发区）红梅街街2号，乘S152、S150公交车到莲花街西连河站下，向西400米。</span></p><p style="text-align: center;"><img src="../static/images/demo/1-22031G5215L54.jpg" title="1677733822966352.jpg" alt="gaozhongditu.jpg"></p>
        </div>



    </div>`
})
</script>
