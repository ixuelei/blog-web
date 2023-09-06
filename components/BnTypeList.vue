<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-09-05 17:37:20
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-06 14:17:23
 * @Description:
-->
<template>
  <div class="bg-white">
    <ul v-if="true" class="relative" @mouseleave="checkPathname">
      <li
        v-for="(nav, index) in typeList"
        :key="index"
        class="relative z-10 px-3"
        @mouseover="changeTop(index)"
      >
        <router-link
          :to="nav.value"
          exact
          active-class="text-slate-700"
          class="h-[50px] block leading-[50px] pl-2 border-b border-[#f0f0f0]  text-slate-500 hover:text-slate-700"
        >
          {{ nav.name }}
        </router-link>
      </li>
      <li :style="{ top: typeIndex * 50 + 'px' }" class="block duration-200 absolute h-[50px] w-full border-r-4 border-[#282828] bg-[#f0f0f080] z-0 "></li>
    </ul>
    <!-- <no-data v-else style="height: 260px" /> -->
  </div>
</template>

<script setup lang="ts">
const pUser = useStore.BnColumn()
const { typeIndex, typeList } = storeToRefs(pUser)
// 当前路由
const $route = useRoute()
const fullPath = $route.fullPath


function checkPathname() {
  typeList.value.forEach((item: { value: any }, index: any) => {
    console.log(fullPath,item.value,index, 'jjj')
    if (item.value === fullPath) {
      changeTop(index)
    }
  })
}
checkPathname()
function changeTop(index: any) {
  typeIndex.value = index
}
</script>
<style lang="scss" scoped>




//   .category-item-link {
//     display: block;
//     padding-left: 15px;
//     height: 40px;
//     line-height: 40px;
//     text-decoration: none;
//     border-top: 1px solid #f0f0f0;
//   }

//  .category-item-link:hover  {
//     color: #333;
//   }

  // .category-item-slider {
  //   position: absolute;
  //   z-index: 0;
  //   top: 0;
  //   left: 0;
  //   height: 40px;
  //   width: 100%;
  //   border-right: 4px solid #282828;
  //   background-color: #f0f0f080;
  //   transition: top 0.2s;
  // }

</style>
