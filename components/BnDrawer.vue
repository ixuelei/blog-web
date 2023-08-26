<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-04-26 20:37:06
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 16:14:51
 * @Description: 页面顶部头图
-->
<template>
  <div
    id="bn_drawer"
    :style="{ zIndex }"
    class="fixed top-0  h-full duration-200 bg-secondary overflow-auto"
    :class="modelValue ? 'left-0 w-full' : 'w-0 left-[100vw]'"
    style="padding-top: 48px"
  >
    <slot />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  zIndex: {
    type: Number,
    default: 9
  },
  images: {
    type: Array<any>,
    default() {
      return []
    }
  }
})

watch(
  () => props.modelValue,
  (newVal, _oldVal) => {
    if (newVal) {
      stopOverflow()
    } else {
      moveOverflow()
    }
  }
)
const mo = (e: any) => {
  // 允许id：bn_drawer 滑动
  if (e.target.offsetParent.id !== 'bn_drawer') {
    e.preventDefault()
  }
}
// 禁止滚动-在显示遮罩层的时候调用
function stopOverflow() {
  document.body.style.overflow = 'hidden'
  document.addEventListener('touchmove', mo, { passive: false })
}

// 取消滑动限制-在关闭遮罩层的时候调用
function moveOverflow() {
  document.body.style.overflow = '' // 出现滚动条
  document.removeEventListener('touchmove', mo, false)
}
</script>
