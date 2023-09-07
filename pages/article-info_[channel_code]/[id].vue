<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-29 14:09:34
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-07 17:57:20
 * @Description: 新闻详情页面
-->
<template>
  <div class="bg-[url('@/static/images/mainBg.jpg')]">
    <div class="container grid grid-cols-4 gap-4 px-3 mx-auto">
      <!-- 主内容 -->
      <div class="col-span-3">
        <BnTopImg title="历史沿革" />
        <br>
        <BaseBnTag icon="icon-a-juejincopy" size="small" theme="gradient"   shape="rect">巅峰时刻</BaseBnTag>
      </div>
      <!-- 右边栏目 -->
      <div class="bg-white" style="color: ">right</div>
    </div>
    <br />
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'reserved'
})
</script>
