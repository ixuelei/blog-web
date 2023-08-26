<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-24 16:25:03
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-11 09:09:07
 * @Description:
-->

<template>
  <div class="">
    <slot name="title">
      <div v-if="title" class="flex justify-between items-center px-3 pt-1">
        <h2 class="text-xl py-2.5 text-slate-700">
          {{ title }}
        </h2>
        <NuxtLink
          class="text-xs cursor-pointer text-slate-500 border-b-2 border-transparent hover:border-error"
          >MORE+
        </NuxtLink>
      </div>
    </slot>
    <div class="p-4 pt-2 grid gap-x-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      <NuxtLink v-for="(item, index) in dataList" :key="index" class="inline-block mb-2">
        <img class="pop cursor-pointer" :src="item.img" alt="" />
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  dataList: {
    type: Array<any>,
    default() {
      return [
        {
          img: 'http://upload.cyfyy.cn/2021/0317/20210317112102388.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2020/0129/thumb_282_115_20200129014805555.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2022/0418/thumb_282_115_20220418093012805.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2019/1129/thumb_282_115_20191129102841119.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2020/0129/thumb_282_115_20200129014805555.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
@keyframes popFadeUp {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  50% {
    opacity: 0.5;
    transform: translate3d(0, 10%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
.pop:hover {
  animation: popFadeUp 0.8s;
}
</style>
