<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-08 09:40:43
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:02:13
 * @Description:
-->
<template>
  <div class="errer">
    <div>
      <h1>哎呀!</h1>
      <h2>服务器爆吊了!</h2>
      <p>您正在寻找的页面被移动、移除、重命名或不存在.</p>
      <br />
      <el-button type="primary" @click="navigateTo('/')">回到首页</el-button>
      <el-button type="success">联系我们</el-button>
    </div>

    <img src="../static/images/errer.gif" alt="" />
  </div>
</template>
<script setup lang="ts">
// const errerImg = '@/img/errer.gif'
definePageMeta({
  layout: 'custom'
})
console.log('Vue3生命周期：setup')

// 渲染
onBeforeMount(() => {
  console.log('Vue3生命周期：onBeforeMount')
})
onMounted(() => {
  console.log('Vue3生命周期：onMounted')
  // if (process.client) {
  // }
})
// 更新
onBeforeUpdate(() => {
  console.log('Vue3生命周期：onBeforeUpdate')
})
onUpdated(() => {
  console.log('Vue3生命周期：onUpdated')
})
// 卸载
onBeforeUnmount(() => {
  console.log('Vue3生命周期：onBeforeUnmount')
})
onUnmounted(() => {
  console.log('Vue3生命周期：onUnmounted')
})
</script>
<style lang="scss" scoped>
.errer {
  background: #373740;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 22px;
  align-items: center;
  line-height: 42px;
  img {
    width: 440px;
    height: 440px;
  }
}
</style>
