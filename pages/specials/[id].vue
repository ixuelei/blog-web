<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-29 16:37:15
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:11:32
 * @Description:
-->
<template>
  <header class="header">
    <div class="headerBox">
      <div class="pNav">
        <div class="logo">
          <div class="lt">
            <img src="@/static/images/test/logo.png" alt="" />
            <h2>党史学习教育活动</h2>
          </div>
          <!-- <div>返回主站首页</div> -->
        </div>
      </div>
    </div>
  </header>
  <BnTopImg
    title="历史沿革"
    :images="['https://upload.cyfyy.cn/2022/1102/20221102031625779.jpg']"
  />
  <nav>
    <div class="box">
      <NuxtLink to="/" class="active">专题首页</NuxtLink>
      <NuxtLink to="/">专题首页</NuxtLink>
      <NuxtLink to="/">专题首页</NuxtLink>
      <NuxtLink to="/">专题首页</NuxtLink>
      <NuxtLink to="/">专题首页</NuxtLink>
    </div>
  </nav>
  <div class="content">jjj</div>
  <bn-footer />
  <bn-back-top />
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
</script>
