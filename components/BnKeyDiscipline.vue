<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-24 10:02:24
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:44:32
 * @Description: 重点学科
-->

<template>
  <div class="bnKeyDiscipline">
    <slot name="title">
      <h2 v-if="title" class="text-xl py-2.5">{{ title }}</h2>
    </slot>
    <swiper
      class="swiper"
      :modules="modules"
      :slides-per-view="windowInfoW"
      :space-between="20"
      :slides-per-group="3"
      :pagination="{ clickable: true }"
    >
      <swiper-slide v-for="(item, index) in list" :key="index" class="group">
        <div class="img overflow-hidden">
          <img class="object-cover duration-300 group-hover:scale-125" :src="item.img" alt="" />
        </div>
        <div class="pb-10">
          <h2
            class="text-base text-slate-700 py-2 text-center group-hover:text-error"
            :class="className.infoH2"
          >
            {{ item.title }}
          </h2>
          <p
            class="text-sm text-slate-400 line-clamp-2 group-hover:text-error"
            :class="className.infoP"
          >
            {{ item.subTitle }}
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Pagination, Navigation } from 'swiper'
const modules = ref([Pagination, Navigation])
const appPN = useStore.App()
const { windowInfo } = storeToRefs(appPN)
defineProps({
  title: {
    type: String,
    default: ''
  },
  list: {
    type: Array<any>,
    default() {
      return [
        {
          img: 'https://picsum.photos/300/200?random=1',
          title: '张三1',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=2',
          title: '张三2',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=3',
          title: '张三3',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=4',
          title: '张三4',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=5',
          title: '张三5',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=6',
          title: '张三6',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=7',
          title: '张三7',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=8',
          title: '张三8',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=9',
          title: '张三9',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        },
        {
          img: 'https://picsum.photos/300/200?random=10',
          title: '张三10',
          subTitle:
            '郑州中学高级教师，郑州大学硕士研究生导师, 郑州市首届名班主任工作室主持人,河南省最具智慧力班主任。'
        }
      ]
    }
  },
  // 自定义样式
  className: {
    type: Object,
    default() {
      return {
        titleH2: '',
        infoH2: '',
        infoP: ''
      }
    }
  }
})
const windowInfoW = computed(() => {
  const w = windowInfo.value.width

  if (w <= 1280 && w > 1024) {
    return 4
  } else if (w<= 1024&& w>768) {
    return 3
  } else if (w < 768) {
    return 2
  } else {
    return 6
  }
})
</script>
