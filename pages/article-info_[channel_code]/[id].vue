<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-29 14:09:34
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-08 17:58:10
 * @Description: 新闻详情页面
-->
<template>
  <div class="bg-[url('@/static/images/mainBg.jpg')]">
    <div class="container grid grid-cols-4 gap-4 px-3 mx-auto">
      <!-- 主内容 -->
      <div class="col-span-3">
        <KitBnBillBoard
          is-home-page
          sticky
          :title="'article.title'"
          :title-sub="'2023 年 05 月 13 日'"
        >
          <div>
            <BaseBnTag
              class="mr-2"
              icon="icon-a-juejincopy"
              size="small"
              theme="gradient"
              shape="rect"
              >巅峰时刻
            </BaseBnTag>
            <BaseBnTag icon="icon-a-juejincopy" size="small" theme="gradient" shape="rect"
              >巅峰时刻
            </BaseBnTag>
          </div>
        </KitBnBillBoard>
        <div class="h-[100vh}">3</div>
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
