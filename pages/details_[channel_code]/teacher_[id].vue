<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-08-04 15:44:51
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:19:42
 * @Description: 教师详情页面
-->

<template>
  <div class="details">
    <BnTopImg title="历史沿革" />
    <!-- 二级导航  -->
    <BnSubnav :nav-data="navAll[0]" :active="active" />
    <!-- {{ navData[active] }} -->
    <article class="container px-3 mx-auto" v-html="data.details"></article>
  </div>
</template>
<script setup lang="ts">
const App = useStore.App()
const { navAll } = storeToRefs(App)
const $route = useRoute()
const active = ref()
active.value = $route.params.channel_code

const { data } = await useAsyncData('count', async () => {
  const html: any = await httpGet('/test-api/details/' + active.value)
  return html.data
})
</script>