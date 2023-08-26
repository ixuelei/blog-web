<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-06-15 09:42:37
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-11 09:38:34
 * @Description:
-->
<template>
  <div class="bnNewsList">
    <div class="flex flex-wrap justify-end max-lg:mt-4">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="cursor-pointer px-3 py-1 max-sm:px-2"
        :class="{ 'bg-primary text-white': tabIndex == index }"
        @mousemove="mouseFun(index)"
      >
        {{ item.tabName }}
      </li>
    </div>
    <div class="p-4 mt-4 sm:ml-3 bg-white">
      <ul
        v-for="(item, index) in list"
        v-show="index == tabIndex"
        :key="index"
        class="md:flex md:flex-wrap"
      >
        <li v-for="(li, i) in item.list" :key="i" class="md:w-1/2 lg:1/3 flex p-2 justify-between my-2">
          <div class="flex-1 flex flex-col justify-between">
            <h2 class="text-slate-700 line-clamp-2">{{ li.title }}</h2>
            <p class="text-xs text-slate-600 line-clamp-1">
              <span>2022-4-24</span>
              <span>|文章来源，河南第一附属医院</span>
            </p>
          </div>
          <div v-if="i != 3" class="w-32 pl-3">
            <img src="https://picsum.photos/300/200" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
 defineProps({
  list: {
    type: Array<{ tabName: String; list: any }>,
    default: () => []
  }
})
const tabIndex = ref(0)
function mouseFun(index: number) {
  if (tabIndex.value !== index) {
    tabIndex.value = index
  }
}
</script>
