<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-05-29 10:37:38
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:39:28
 * @Description: 科室
-->

<template>
  <div class="bnDepartment">
    <slot name="title">
      <h2 v-if="title" class="text-xl py-2.5">
        {{ title }}
      </h2>
    </slot>

    <swiper
      class="swiper pb-10"
      :modules="modules"
      :slides-per-view="windowInfoW"
      :space-between="20"
      :slides-per-group="3"
      :pagination="{ clickable: true }"
    >
      <swiper-slide
        v-for="(item, index) in list"
        :key="index"
        class="flex justify-center py-4 border-[1px] border-white rounded-md box-border"
      >
        <div class="pr-2">
          <BnIcon class="text-[3rem]" :name="item.icon" width="1em" color="#fff" />
        </div>
        <div class="introduce">
          <h2 class="text-white text-base">{{ item.title }}</h2>
          <span class="block w-10/12 h-1 border-b-[1px] border-white" />
          <p class="text-sm text-white">{{ item.subTitle }}</p>
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
  list: {
    type: Array<any>,
    default: (): any => {
      return [
        {
          icon: 'bn_icon_guke',
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '心血管内科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_stomach',
          img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
          title: '消化内科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_syringe',
          img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
          title: '呼吸与危重症医学科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_chaoshengzhenduanyi',
          img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
          title: '肾脏病学科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_meirong',
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '风湿免疫学科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_shenjing',
          img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
          title: '伸进内科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_dachang',
          img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
          title: '肛肠科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_fei',
          img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
          title: '内分泌代谢科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_-yiliao-fangshe',
          img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
          title: '骨科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_neifenmike',
          img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
          title: '肠胃外科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_microscope-full',
          img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
          title: '美容整形烧伤外科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_fengshi',
          img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
          title: '麻醉科',
          subTitle: '省医学重点学科'
        },
        {
          icon: 'bn_icon_xindiantu',
          img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
          title: '心血管内科',
          subTitle: '省医学重点学科'
        }
      ]
    }
  }
})
const appPN = useStore.App()
const { windowInfo } = storeToRefs(appPN)
const windowInfoW = computed(() => {
  const w = windowInfo.value.width

  if (w <= 1280 && w > 1024) {
    return 4
  } else if (w <= 1024 && w > 768) {
    return 3
  } else if (w < 768) {
    return 2
  } else {
    return 6
  }
})
</script>
