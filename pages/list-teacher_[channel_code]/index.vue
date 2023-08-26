<template>
  <div class="">
    <BnTopImg title="图片列表" :images="[36]" />
    <!-- content -->
    <div class="container flex mx-auto max-md:flex-col">
      <!-- 左侧二级导航  -->
      <BnLeftNav />
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
            <div>
              <ul class="grid grid-cols-2 gap-2 max-sm:grid-cols-1 max-sm:gap-x-0">
                <NuxtLink
                  v-for="(item, index) in listData"
                  :key="index"
                  to=""
                  class="flex p-4 duration-300 bg-white cursor-pointer group hover:shadow-lg"
                >
                  <div class="overflow-hidden rounded h-[140px]">
                    <img
                      class="object-cover w-32 duration-300 group-hover:scale-125"
                      :src="`https://picsum.photos/300/400?random=${index}`"
                      alt=""
                    />
                  </div>
                  <div class="flex flex-col flex-1 pl-2">
                    <h2 class="text-base text-slate-700 line-clamp-1 group-hover:text-error">
                      {{ item.title }}
                    </h2>
                    <p class="mt-2 text-sm text-slate-400 line-clamp-3">
                      简介：{{ item.subTitle }}
                    </p>
                    <!-- <p class="text-sm text-slate-400 line-clamp-2">
                      发布时间：2022-04-26 来自： 临床医学院、第一附属医院学生科
                    </p> -->
                  </div>
                </NuxtLink>
              </ul>
              <ul class="py-3 mt-2 bg-white">
                <el-pagination
                  small
                  background
                  layout="prev, pager, next"
                  :total="500"
                  class="justify-center"
                />
              </ul>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div class="p-4 pb-0 mb-2 bg-white">
            <h2 class="text-lg">老师相关新闻（老师获奖等相关动态）</h2>
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
</template>

<script lang="ts" setup>
const listData = [
  {
    img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
    title: '唐乐乐',
    time: '2022年4月26日',
    subTitle:
      '高中部教科室主任,中学历史高级教师，河南省教育厅学术技术带头人，河南省教学技能大赛一等奖，河南省课题评比一等奖，郑州市名师，郑州市“五一”劳动奖章获得者，郑州市教学技能竞赛特等奖，郑州市教研室中心组成员，郑州大学研究生基地特聘导师。'
  },
  {
    img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
    time: '2022年4月26日',
    title: '刘行',
    subTitle:
      '中学物理一级教师，河南省教学标兵，省教学技能竞赛一等奖，所带队学生多次在国家级、省级机器人竞赛中获一、二等奖，被授予国家级、省级青少年机器人竞赛优秀辅导员称号，区优秀教师，区优秀班主任。主持课题两次获郑州市一等奖。'
  },
  {
    img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
    time: '2022年4月26日',
    title: '夏东海',
    subTitle:
      '中学数学高级教师，东北师范大学数学教育专业毕业，河南省数学优质课一等奖，市优质课一等奖，国家一级奥赛教练员，课题研究多次获得省、市级一等奖。多次参与各级市的联考命题工作，所教学生30多人考入清华北大。'
  },
  {
    img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
    time: '2022年4月26日',
    title: '王启明',
    subTitle:
      '河南省五一劳动奖章，河南省教学技能竞赛特等奖，河南省教学标兵， 郑州市技术标兵，郑州市优质课一等奖，郑州市观摩示范课，郑州市教育教学先进个人。'
  }
]

const $route = useRoute()
const channelCode = ref()
channelCode.value = $route.params.channel_code
</script>
