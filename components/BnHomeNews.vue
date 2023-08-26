<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-21 14:50:37
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:42:44
 * @Description:
-->
<template>
  <div class="homeNews">
    <h2 v-if="title" class="text-xl py-2.5 max-md:text-right">
      {{ title }}
    </h2>
    <swiper
      class="swiper bg-white"
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 3500,
        disableOnInteraction: false
      }"
    >
      <swiper-slide v-for="(item, index) in list" :key="index" class="bg-white p-4">
        <div class="img overflow-hidden">
          <img class="h-[224px] w-full object-cover" :src="item.img" alt="" />
        </div>
        <div>
          <h2 class="text-slate-700 py-2 line-clamp-2">{{ item.title }}</h2>
          <p class="text-sm text-slate-400 line-clamp-2">{{ item.subTitle }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Pagination, Autoplay, Navigation } from 'swiper'
const modules = ref([Pagination, Navigation, Autoplay])
defineProps({
  title: {
    type: String,
    default: '新闻中心'
  },
  list: {
    type: Array<any>,
    default: () => []
  }
})

// function callback(e: any) {}
</script>
<style lang="scss" scoped>
:deep(.swiper-pagination) {
    width: max-content;
    bottom: 130px;
    right: 2rem;
    left: auto;
    text-align: right;
}
</style>
