<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-29 14:09:34
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-06 17:56:12
 * @Description: 新闻详情页面
-->
<template>
  <div class="bg-[url('@/static/images/mainBg.jpg')]">
    <div class="container grid grid-cols-4 gap-4 px-3 mx-auto ">
      <!-- 主内容 -->
      <div class="col-span-3"><BnTopImg title="历史沿革" /></div>
      <!-- 右边栏目 -->
      <div class="bg-white">right</div>
    </div>
    <br>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'reserved'
})
</script>
