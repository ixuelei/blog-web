<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-11 15:45:17
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:27:50
 * @Description: 科室导航
-->

<template>
  <div class="departments">
    <BnTopImg title="科室导航" />
    <!-- 搜索框 -->
    <div class="key_box">
      <div class="key">
        <!-- <el-row :gutter="20">
          <el-col :span="2"> 科室索引： </el-col>
          <el-col :span="22">
            <div
              :class="item == 'all' ? 'abc active' : 'abc'"
              circle
              v-for="item in abc"
              :key="item"
              >{{ item }}</div
            >
          </el-col>
        </el-row> -->
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <div v-for="li in 4" :key="li" class="li">
        <h2 class="title">重点学科</h2>
        <!-- <el-row :gutter="20">
          <el-col :span="6" v-for="item in 10" :key="item">
            <NuxtLink :to="'./departments/' + item" title="心血管内科">心血管内科</NuxtLink>
          </el-col>
        </el-row> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// const abc = [
//   'all',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F',
//   'G',
//   'H',
//   'I',
//   'J',
//   'K',
//   'L',
//   'M',
//   'N',
//   'O',
//   'P',
//   'Q',
//   'R',
//   'S',
//   'T',
//   'U',
//   'V',
//   'W',
//   'X',
//   'Y',
//   'Z'
// ]
// const $route = useRoute()
// const $router = useRouter()
// const searchVal = ref('')
// const activeName = ref('1')

// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
//   console.log(activeName.value)
// }
</script>
