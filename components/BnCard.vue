<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-09-06 10:57:43
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-06 14:23:58
 * @Description:
-->
<template>
  <div class="bg-white">
    <slot name="title">
      <h2 class="py-5 text-lg font-bold text-center border-b border-[#f0f0f0]">
        {{ title }}
      </h2>
    </slot>

    <div :style="stylesBody" class="h-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: () => ''
  },
  padding: {
    type: [String, Number],
    default: '20px'
  }
})

const stylesBody = computed(() => {
  return {
    padding: typeof props.padding === 'number' ? `${props.padding}px` : props.padding
  }
})
</script>
