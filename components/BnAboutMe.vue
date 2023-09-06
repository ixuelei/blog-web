<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-09-06 10:57:43
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-06 15:05:34
 * @Description:
-->

<template>
  <div class="tag" :style="{ background: color }">
    <div class="tag-container">
      <div
        v-for="(item, index) in aboutMeList"
        :key="index"
        class="flex mb-2 border h-[40px] leading-[40px] group"
        :style="{ borderColor: item.color }"
      >
        <div class="flex items-center flex-1 w-[calc(100%-80px)] duration-300 group-hover:w-[calc(100%-110px)]">
          <BnIcon class="mx-2" :color="item.color" width="20px" :name="item.icon" />
          <p class="break-words cursor-pointer line-clamp-1 " @click="open(item, index)">
            {{ item.msg }}
          </p>
        </div>
        <div
          class="text-white w-[80px] text-sm leading-[40px] text-center  duration-300 group-hover:w-[110px]"
          :style="{ background: item.color }"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: () => 'transparent'
  }
})
const aboutMeList = [
  // {
  //   title: 'QQ群',
  //   number: '999999999',
  //   color: '#eb6841',
  //   icon: 'qq-group'
  // },
  { title: 'QQ号', number: '2425238338', color: '#5aa98f', msg: '2425238338', icon: 'icon-a-juejincopy' },
  {
    title: 'Email号',
    content: 'xl@ixuelei.com',
    color: '#51a0e2',
    msg: 'xl@ixuelei.com',
    icon: 'icon-email'
  },
  {
    title: 'Github',
    content: 'https://github.com',
    color: '#000000',
    msg: 'github.com',
    icon: 'icon-home_api'
  },
  {
    title: 'Gitea',
    content: 'https://git.ixuelei.com/',
    color: '#c83838',
    msg: 'git.ixuelei.com',
    icon: 'icon-a-juejincopy'
  },
  {
    title: '掘金',
    content: 'https://juejin.cn/user/3861140568811576',
    color: '#4b80fc',
    msg: 'juejin.cn/user/3861140568811576',
    icon: 'icon-search'
  }
]

function open(item: any, index: number) {
  const { content } = item
  index > 1 && window.open(content)
}
</script>
