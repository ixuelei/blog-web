<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-21 15:30:47
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-20 15:20:36
 * @Description:首页banner
-->
<template>
  <!-- <div>333</div> -->
  <!-- :slides-per-view="1"
      :slidesPerGroup="1"
      :space-between="24" -->
  <div>
    <swiper
      class="swiper"
      :modules="modules"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false
      }"
    >
      <swiper-slide v-for="(item, index) in imgData" :key="index" class="swiper-slide">
        <img
          class="min-h-[9rem] max-h-[28rem] w-full object-cover"
          :src="`https://go.ixuelei.com/prod-api/attachment/viewImage/${item.attaId}`"
          :alt="item.title"
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import { Pagination, Autoplay, Navigation } from 'swiper'
const modules = ref([Pagination, Navigation, Autoplay])
defineProps({
  imgData: {
    type: Array<any>,
    required: true,
    default: () => []
  },
})
</script>
