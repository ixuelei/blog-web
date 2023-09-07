<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-26 20:37:06
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-07 11:26:13
 * @Description: 页面顶部头图
-->
<template>
  <div class="bn_banck_top">
    <!-- <nuxt-link to="/physician">
      <bn-icon name="bn_icon_zhuanjia" color="#999" />
      <small>专家介绍</small>
    </nuxt-link>
    <nuxt-link to="/">
      <bn-icon name="bn_icon_shipin" color="#999" />
      <small>医院宣传片</small>
    </nuxt-link>
    <nuxt-link to="/">
      <bn-icon name="bn_icon_zhengcezhinanzhen" color="#999" />

      <small>就医指南</small>
    </nuxt-link>
    <div class="top_back">
      <bn-icon name="bn_icon_xiangshangjiantou" color="#fff" />
    </div> -->
  </div>
</template>
<script setup lang="ts">
 defineProps({
  title: {
    type: String,
    default: ''
  },
  images: {
    type: Array<any>,
    default() {
      return []
    }
  }
})
</script>
