<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-09 11:09:55
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-15 15:10:17
 * @Description:
-->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// const { windowInfo } = useStore.App()
const pApp = useStore.App()
const { themeType, windowInfo } = storeToRefs(pApp)
// a.getAppConfig()

// useSeoMeta({
//   title: '444'
// })
// useServerSeoMeta({
//   title: '33'
// })
function setThemeType(type: string) {
  // 修改 html中class
  const html = document.querySelector('html')
  if (html) {
    html.className = type
  }
}

onMounted(() => {
  setThemeType('light')
})
// 监听浏览器窗口变化
onBeforeMount(() => {
  windowInfo.value = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  window.addEventListener('resize', () => {
    windowInfo.value = {
      width: window.innerWidth,
      height: window.innerHeight
    }
  })
  console.log(windowInfo)

  // if (process.client) {
  // }
})
// 监听切换主题
watch(themeType, (newVal) => {
  console.log(newVal)
  setThemeType(newVal)
})
</script>
<style lang="scss">
body {
  &::-webkit-scrollbar-track-piece {
    width: 5px;
    background-color: #c4c4c4;
  }
  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
    background-color: rgb(var(--color-primary));
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    border-radius: 5px;
    background-color: rgb(var(--color-primary));
  }
  &::-webkit-scrollbar-thumb:hover {
    width: 5px;
    border-radius: 5px;
    background-color: rgb(var(--color-primary));
  }
}
</style>
