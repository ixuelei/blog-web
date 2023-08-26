<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-26 20:37:06
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:38:59
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
<style lang="scss" scoped>
// .bn_banck_top {
//   position: fixed;
//   z-index: 100;
//   top: 35vh;
//   right: 0;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background: #fff;
//   box-shadow: -5px 5px 5px rgba(0,0,0,0.0980392157);
//   padding-top: 12px;
//   border-top: 5px solid $mainColor;
//   a{
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     padding: 4px 12px;
//     small{
//       color: #333;
//       font-size: $fs24;
//       margin: 8px 0;
//     }
//   }
//   .top_back{
//     background: $mainColor;;
//     width: 100%;
//     text-align: center;
//     padding: 12px 0;
//   }
// }
</style>
