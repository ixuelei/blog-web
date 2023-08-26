<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-10 14:24:34
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-21 10:28:40
 * @Description:新闻列表图文模型
-->

<template>
  <div class="">
    <BnTopImg title="图片列表" :images="[36]" />
    <!-- content -->
    <div class="container flex mx-auto max-md:flex-col">
      <!-- 左侧二级导航  -->
      <BnLeftNav :nav-data="navData" :active="channelCode" />
      <div class="grid grid-cols-3 gap-4 gap-x-2 max-xl:grid-cols-1 max-xl:gap-x-0">
        <div class="col-span-2">
          <div class="">
            <div class="flex p-4 pb-0 mb-2 text-lg bg-white border-gray-300">
              <li class="flex items-center h-full pb-1 mr-4 border-b-2 border-error">
                时间
                <el-icon>
                  <Bottom class="text-xs" />
                </el-icon>
              </li>
              <li class="flex items-center pb-1 border-b-2 border-transparent">
                阅读
                <el-icon>
                  <Bottom class="text-xs" />
                </el-icon>
              </li>
            </div>
            <ul class="">
              <NuxtLink
                v-for="item in 8"
                :key="item"
                to=""
                class="flex p-4 mb-2 duration-300 bg-white cursor-pointer group hover:shadow-lg"
              >
                <div v-if="item != 4" class="overflow-hidden rounded">
                  <img
                    class="object-cover w-32 duration-300 group-hover:scale-125"
                    :src="`https://picsum.photos/300/200?random=${item}`"
                    alt=""
                  />
                </div>
                <div class="flex flex-col flex-1 pl-2">
                  <h2 class="text-base text-slate-700 line-clamp-1 group-hover:text-error">
                    {{
                      item != 4
                        ? '临床医学院、第一附属医院举办“欧林杯”成都医学院第八届互联网+大学生创新创业大赛初赛路演'
                        : '临床医学院、第一附属医院举办“欧林杯”成都医学院第八届互联网'
                    }}
                  </h2>
                  <p class="flex-1 text-sm text-slate-400 line-clamp-2">
                    {{
                      item != 4
                        ? '临床医学院、第一附属医院举办“欧林杯”成都医学院第八届互联网+大学生创新创业大赛初赛路演'
                        : '简介:临床医学院、第一附属医院举办“欧林杯”成都医学院第八届互联网+大学生创新创业大赛初赛路演                    临床医学院、第一附属医院举办“欧林杯”成都医学院第八届互联网+大学生创新创业大赛初赛路演临床医学院第一附属医院举办“欧林杯”成都医学院第八届互联网+大学生创新创业大赛初赛路演'
                    }}
                  </p>
                  <p class="text-sm text-slate-400 line-clamp-2">
                    发布时间：2022-04-26 来自： 临床医学院、第一附属医院学生科
                  </p>
                </div>
              </NuxtLink>
              <div class="py-3 bg-white">
                <el-pagination small background layout="prev, pager, next" :total="500" class="justify-center" />
              </div>
            </ul>
          </div>
        </div>
        <div>
          <div class="">
            <div class="p-4 pb-0 mb-2 bg-white">
              <h2 class="text-lg">图片新闻</h2>
              <i class="block w-12 mt-1 border-b-2 border-error" />
            </div>
            <div class="grid grid-cols-2 gap-2">
              <NuxtLink
                v-for="(item, index) in listData"
                :key="index"
                to=""
                class="p-2 duration-300 bg-white cursor-pointer group hover:shadow-lg"
              >
                <div class="overflow-hidden rounded">
                  <img
                    class="object-cover w-full duration-300 group-hover:scale-105"
                    :src="item.img"
                    alt=""
                  />
                </div>
                <h2 class="h-12 py-2 text-sm text-slate-700 line-clamp-2 group-hover:text-error">
                  {{ item.title }}
                </h2>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const navData = [
  {
    name: '校园新闻',
    channel_code: 'xyxw',
    model_view: '',
    path: '/list-pic_xyxw',
    url: ''
  },
  {
    name: '通知公告',
    path: '/list-pic_tzgg',
    model_view: '',
    channel_code: 'tzgg'
  },
  {
    name: '校务信息',
    channel_code: 'xwxx',
    model_view: '',
    path: '',
    url: ''
  }
]
const listData = [
  {
    img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
    title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
    time: '2022年4月26日',
    subTitle:
      '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
  },
  {
    img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
    time: '2022年4月26日',
    title:
      '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
    subTitle:
      '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
  },
  {
    img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
    time: '2022年4月26日',
    title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
    subTitle:
      '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
  },
  {
    img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
    time: '2022年4月26日',
    title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
    subTitle:
      '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
  }
]
const $route = useRoute()
const channelCode = ref()
channelCode.value = $route.params.channel_code
</script>
