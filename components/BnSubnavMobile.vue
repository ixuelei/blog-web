<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-26 21:27:33
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:31:57
 * @Description: 二级导航手机端
-->

<template>
  <div class="bg-white">
    <ul class="container px-3 mx-auto overflow-auto">
      <div class="min-w-max">
        <NuxtLink
          v-for="(item, index) in navData"
          :key="index"
          class="inline-block py-3 mr-4 text-lg border-b-2 cursor-pointer hover:text-error"
          :class="index == 0 ? 'border-error text-error' : 'border-transparent'"
          :to="`${item.model_view ? item.model_view : item.path}`"
        >
          <!-- :class="{ 'border-error': item.channel_code == active }" -->

          {{ item.title }}
        </NuxtLink>
      </div>
    </ul>
  </div>

</template>
<script setup lang="ts">
defineProps({
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
</script>
<style lang="scss" scoped></style>
