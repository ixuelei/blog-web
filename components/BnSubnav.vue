<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-26 21:27:33
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-16 16:50:47
 * @Description: 二级导航
-->

<template>
  <div class="bg-white">
    <ul class="container px-3 mx-auto overflow-auto">
      <div class="min-w-max">
        <NuxtLink
          v-for="(item, index) in navData"
          :key="index"
          class="inline-block py-3 mr-4 text-lg border-b-2 cursor-pointer hover:text-secondary"
          :class="item.channel_code == active ? 'border-secondary text-secondary' : 'border-transparent'"
          :to="`${item.model_view ? item.model_view : item.path}`"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </ul>

  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  active: {
    type: [String, Number],
    default: ''
  },
  navData: {
    type: Array<any>,
    default: () => {
      return []
    }
  }
})
function a() {
  console.log(props.navData)
}
a()
</script>
