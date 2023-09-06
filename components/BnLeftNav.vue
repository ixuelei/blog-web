<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-26 21:27:33
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-22 10:47:46
 * @Description: 左侧二级导航
-->

<template>
  <section class="relative top-[-80px] mr-2 max-md:hidden">
    <div
      class="px-4 h-[80px] leading-[80px] text-center text-white text-xl bg-gradient-to-r from-error to-[#c5004a30]"
    >
      {{crumbColumn[0].name}}
    </div>
    <div class="bg-white min-w-[200px] border-l-4 border-secondary">
      <NuxtLink
        v-for="(item, index) in twoColumn"
        :key="index"
        class="block py-3 text-lg cursor-pointer hover:text-secondary"
        :to="`${item.htmlUrl}_${item.easyName}`"
        :class="
          item.easyName == crumbColumn[1].easyName
            ? 'text-secondary bg-[#c5004a10]'
            : 'border-transparent'
        "
      >
        <p class="px-2">{{ item.name }}</p>
        <!-- <BnIcon /> -->
      </NuxtLink>
    </div>
  </section>
</template>
<script setup lang="ts">
// defineProps({
//   active: {
//     type: [String, Number],
//     default: ''
//   },
//   navData: {
//     type: Array<any>,
//     default: () => {
//       return []
//     }
//   }
// })
const bnColumn = useStore.BnColumn()
const { twoColumn, crumbColumn } = storeToRefs(bnColumn)
</script>
