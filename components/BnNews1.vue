<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-24 15:04:24
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:34:32
 * @Description:
-->

<template>
  <div class="group bg-white">
    <div class="overflow-hidden">
      <img
        class="w-full object-cover duration-300 hover:scale-125"
        src="../static/images/demo/yiliao.png"
        alt=""
      />
    </div>
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
    <div class="border-t-[1px] border-zinc-200 py-2">
      <ul class="px-3">
        <NuxtLink v-for="(item, index) in list" v-show="index < 4" :key="index" to="#">
          <i />
          <h2 class="text-sm text-slate-700 my-2 line-clamp-1">
            {{ item.title }}
          </h2>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">

defineProps({
  title: {
    type: String,
    default: '新闻中心'
  },
  list: {
    type: Array<any>,
    default() {
      return [
        {
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        },
        {
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
          subTitle:
            '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
        }
      ]
    }
  }
})
</script>
<style lang="scss" scoped></style>
