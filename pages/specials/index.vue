<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-11 15:45:17
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:04:15
 * @Description: 活动专题列表
-->

<template>
  <div class="">
    <BnTopImg title="活动专题列表" />
    <!-- content -->
    <div class="container px-3 mt-4 mx-auto grid gap-4 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3">
      <div v-for="item in 10" :key="item">
        <NuxtLink to="/" title="心血管内科" class="group block overflow-hidden relative">
          <img
            class="w-full object-cover duration-300 group-hover:scale-125"
            src="https://upload.cyfyy.cn/2022/1102/20221102031726548.jpg"
            alt=""
          />
          <h2
            class="bg-primary/70 text-base py-1 text-white w-full text-center absolute  duration-300 bottom-[-40px] group-hover:bottom-0"
          >
            重点学科
          </h2>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// let $route = useRoute()
// let $router = useRouter()
// const searchVal = ref('')
// const activeName = ref('1')
</script>

<style lang="scss" scoped></style>
