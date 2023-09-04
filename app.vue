<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-09 11:09:55
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-04 09:36:18
 * @Description:
-->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// const { windowInfo } = useStore.BnApp()
const BnApp = useStore.BnApp()
const { themeType, windowInfo, scrollTop, headerClass } = storeToRefs(BnApp)
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
// 处理滚动条位置

onMounted(() => {
  setThemeType('light')
})

const  currentHeight = ref(0)
onBeforeMount(() => {
  windowInfo.value = {
    width: window.innerWidth,
    height: window.innerHeight
  }
  // 监听窗口大小
  window.addEventListener('resize', () => {
    windowInfo.value = {
      width: window.innerWidth,
      height: window.innerHeight
    }
    console.log(windowInfo.value, 'windowInfo')
  })
  // 监听滚动条高度
  window.addEventListener('scroll', () => {
    scrollTop.value =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const scroll = scrollTop.value - currentHeight.value
      currentHeight.value = scrollTop.value
      if (scrollTop.value < 100) {
        headerClass.value = 'fixed-top'
      } else if (scroll < 0) {
        headerClass.value = 'slideDown'
      } else {
        headerClass.value = 'slideUp'
      }
    })

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
