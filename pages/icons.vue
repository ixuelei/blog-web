<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-12 15:50:54
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-03 17:54:16
 * @Description:
-->
<template>
  <div class="container px-3 mx-auto flex flex-wrap">
    其他：
    <div v-for="(item, index) in icons" :key="index" class="p-4 text-center">
      <el-icon size="32px">
        <component :is="item.name" />
      </el-icon>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// const req = require.context('@/assets/svg', false, /\.svg$/)
// const modules = import.meta.glob('@/assets/svg/**/*.svg')
import * as icons from '@element-plus/icons-vue'
definePageMeta({
  layout: 'blank'
})
// let svgArr: (string|undefined)[] = []
// const demo = async () => {
//   const regex = /\/([^/.]+)\.\w+$/
//   for (const path in modules) {
//     let name = path.match(regex)?.[1]
//     svgArr.push(name)
//   }
//   console.log(svgArr)
// }
// demo()
// const iconsData = `<el-icon size="32px">
//       <Edit />
//     </el-icon>`
</script>
