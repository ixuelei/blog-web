<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-26 20:37:06
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-16 14:57:34
 * @Description: 页面顶部头图
-->
<template>
  <div class="BnTopImg">
    <div v-if="images.length <= 1" class="">
      <slot name="title">
        <!-- <h2 v-if="title" class="title">
          {{ title }}
        </h2> -->
      </slot>
      <img
        v-if="!images.length"
        class="min-h-[8rem] max-h-[22rem] w-full object-cover"
        src="../static/images/demo/1-22031G5215L54.jpg"
        alt=""
      />
      <img
        v-else
        class="min-h-[8rem] max-h-[22rem] w-full object-cover"
        :src="`https://go.ixuelei.com/prod-api/attachment/viewImage/${images[0]}`"
        alt=""
      />
    </div>

    <swiper
      v-else
      class="swiper"
      :modules="modules"
      :slides-per-view="1"
      :slides-per-group="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{
        delay: 4500,
        disableOnInteraction: false
      }"
    >
      <swiper-slide v-for="(item, index) in images" :key="index" class="swiper-slide">
        <div class="img">
          <img
            class="min-h-[8rem] max-h-[22rem] w-full object-cover"
            :src="`https://go.ixuelei.com/prod-api/attachment/viewImage/${item}`"
            alt=""
          />
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
