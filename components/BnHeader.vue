<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-17 10:55:53
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-04 10:05:34
 * @Description:
-->
<template>
  <header
    :style="{ color: textColor, background: bgColor }"
    :class="[headerClass]"
    class="fixed top-0 w-full z-[99] duration-[.8s]"
  >
    <div class="bg-transparent max-sm:fixed max-md:fixed relative w-full z-[9999] shadow-md">
      <div class="container flex justify-between px-3 py-4 mx-auto">
        <!-- logo -->
        <BnIcon class="absolute top-[-20px]" :color="textColor" width="120px" name="icon-heylzh" />
        <!-- 栏目 -->
        <nav class="flex-1 hidden text-center pl-[120px] md:block">
          <nuxt-link class="px-4">HOME</nuxt-link>
          <nuxt-link class="px-4">ARTICLE</nuxt-link>
          <nuxt-link class="px-4">LIFE</nuxt-link>
          <nuxt-link class="px-4">ABOUT</nuxt-link>
          <nuxt-link class="px-4">CONTACT</nuxt-link>
        </nav>
        <!-- 其他 -->
        <div class="flex justify-end max-md:flex-1">
          <nuxt-link>
            <BnIcon :color="textColor" width="20px" name="icon-email" />
          </nuxt-link>
          <nuxt-link class="pl-3">
            <BnIcon :color="textColor" width="20px" name="icon-home_api" />
          </nuxt-link>
          <nuxt-link class="pl-2">
            <BnIcon :color="textColor" width="20px" name="icon-a-juejincopy" />
          </nuxt-link>
          <div class="pl-6 max-md:hidden">
            <BnIcon :color="textColor" width="20px" name="icon-search" />
          </div>
          <div
            class="pl-6 md:hidden"
            :class="isShowMenu ? 'hamburger active' : 'hamburger'"
            @click.stop="setDrawer"
          >
            <span
              :style="{ background: textColor }"
              class="w-8 h-0.5 block duration-75"
              :class="{ ' translate-y-2.5 rotate-[-45deg]': isShowMenu }"
            >
            </span>
            <span
              :style="{ background: textColor }"
              class="w-8 h-0.5 block my-2 duration-900"
              :class="{ 'opacity-0': isShowMenu }"
            >
            </span>
            <span
              :style="{ background: textColor }"
              class="w-8 h-0.5 block duration-75"
              :class="{ ' -translate-y-2.5 rotate-[45deg]': isShowMenu }"
            >
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden max-sm:inline-block max-md:inline-block h-[48px]"></div>
    <!-- 移动端二级栏目 -->
    <div v-if="twoColumn.length" class="hidden max-md:block">
      <ul class="bg-[#f0f2f5] flex px-4">
        <li>
          <el-icon size="28" color="rgb(var(--color-secondary))">
            <Back />
          </el-icon>
        </li>
        <div class="flex flex-1 text-secondary">
          <h2 class="flex-1 h-[22px] overflow-hidden text-center line-clamp-1">
            <!-- {{ crumbColumn[1].name  }} -->
          </h2>
          <el-icon size="28" color="rgb(var(--color-secondary))" @click="isNav = !isNav">
            <ArrowDown />
          </el-icon>
        </div>
      </ul>
      <ul
        class="grid grid-cols-3 px-4 pb-0 text-sm duration-300 bg-white gap-x-2"
        :style="{
          height: isNav ? ['50px', '85px', '120px'][Math.ceil(twoColumn.length / 3) - 1] : '0',
          paddingTop: isNav ? '10px' : '0'
        }"
      >
        <nuxt-link
          v-for="(item, index) in twoColumn"
          :key="index"
          class="mb-2 line-clamp-1 border-gray-200 border-[1px] p-1 text-center"
          :to="`${item.htmlUrl}_${item.easyName}`"
          :class="
            item.easyName == crumbColumn[1].easyName
              ? 'bg-secondary text-white border-transparent'
              : ''
          "
        >
          {{ item.name }}
        </nuxt-link>
      </ul>
    </div>
    <!-- 移动端搜索 -->
    <div
      class="fixed top-0 overflow-hidden flex items-center shadow-md w-full h-0 px-8 bg-[#f0f2f5] duration-300 z-[9]"
      :class="isSearch ? 'top-[48px] h-[60px]' : 'top-0 h-0'"
    >
      <el-input v-model="input3" placeholder="输入关键词...">
        <template #append>
          <el-button class="bg-white" :icon="Search">搜索</el-button>
        </template>
      </el-input>
    </div>
    <!-- <client-only>
      <el-drawer v-model="drawer" title="" size="100%" direction="ltr" :with-header="false">
        <div>3333</div>
      </el-drawer>
    </client-only> -->
    <BnDrawer v-model="isShowMenu">
      <div>
        <li
          v-for="(item, index) in navList"
          :key="index"
          class="group w-[60%] mx-auto border-[#1A5284] border-b-[1px] text-center"
          @click="setDrawer"
        >
          <nuxt-link
            v-if="item.children"
            class="w-full py-4 inline-block group-hover:bg-[#1A5284 ]"
            :to="`${item.children[0].htmlUrl}_${item.children[0].easyName}`"
            :class="
              item.easyName == crumbColumn[0].easyName ? 'active' : item.children ? 'pHover' : ''
            "
          >
            {{ item.name }}
          </nuxt-link>
          <nuxt-link
            v-else
            class="w-full py-4 inline-block group-hover:bg-[#1A5284 ]"
            :to="`${item.htmlUrl}`"
            :class="
              item.easyName == crumbColumn[0].easyName ? 'active' : item.children ? 'pHover' : ''
            "
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </div>
    </BnDrawer>
    <!-- 占位 -->
  </header>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
// defineProps({
//   menuActive: {
//     type: String,
//     default: 'specials'
//   }
// })
console.log('b')
const navList = ref()
const BnApp = useStore.BnApp()
const { headerClass, scrollTop, isShowMenu } = storeToRefs(BnApp)
const bnColumn = useStore.bnColumn()
const { column, crumbColumn, twoColumn } = storeToRefs(bnColumn)
// 处理菜单格式
navList.value = bnTree(column.value)

const input3 = ref('')
// 是否显示搜索框
const isSearch = ref(false)
// 是否展开二级目录
const isNav = ref(false)
// const drawer = ref(false)

// 监听路由变化
const $route = useRoute()
console.log($route)
watch(
  () => $route.fullPath,
  (_newVal: any, _oldVal: any) => {
    isSearch.value = false
    isNav.value = false
  }
)
// 导航部分数据处理

function setDrawer() {
  // drawer.value = !drawer.value
  isShowMenu.value = !isShowMenu.value
}
const whiteList = ref(['/', 'about'])
const textColor = computed(() => {
  if (whiteList.value.includes($route.path) && scrollTop.value < 150 && !isShowMenu.value  ) {
    return '#fff'
  } else {
    return '#4c4948'
  }
})
const bgColor = computed(() => {
  return isShowMenu.value || !whiteList.value.includes($route.path)
    ? 'rgba(255, 255, 255, 0.9)'
    : 'transparent'
})
onUpdated(() => {})
</script>

<style lang="scss" scoped>
.fixed-top {
  background: transparent;
}
.slideDown {
  background: rgba(255, 255, 255, 0.8) !important;
}
.slideUp {
  transform: translateY(-100px);
}
// .header {
//   nav {
//     li {
//       text-align: center;
//       border-right: 1px solid #475569;
//     }
//     li:last-child {
//       border-right: none;
//     }
//   }
// }
</style>
