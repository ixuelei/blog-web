<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-25 10:10:50
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-05-02 16:09:46
 * @Description:
-->
<template>
    <svg
      class="icon"
      aria-hidden="true"
      :style="{
        color: color,
        width: width,
        height: height ? height : width
      }"
    >
      <use :xlink:href="'#' + name"></use>
    </svg>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
    default: ''
  },
  color: {
    type: String,
    default: '#000'
  },
  width: {
    type: String,
    default: '30px'
  },
  height: {
    type: String,
    default: ''
  }
})

</script>
<style lang="scss" scoped>
.icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
