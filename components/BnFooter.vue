<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-08-28 09:05:07
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-28 10:32:25
 * @Description:
-->
<template>
  <footer class="border-t border-[#d6d6d6]">
    <div class="container flex items-center justify-between px-3 py-5 mx-auto max-sm:flex-col-reverse max-sm:text-center">
      <div>
        <p>Fake it till you make it.</p>
        <!-- 快捷入口 -->
        <div class="flex mt-2 max-sm:justify-center">
          <nuxt-link>
            <BnIcon width="22px" name="icon-email" />
          </nuxt-link>
          <nuxt-link class="pl-4">
            <BnIcon width="22px" name="icon-home_api" />
          </nuxt-link>
          <nuxt-link class="pl-3">
            <BnIcon width="22px" name="icon-a-juejincopy" />
          </nuxt-link>
        </div>
        <p class="mt-3 text-xs">[Heylzh] - 个人博客</p>
        <p class="mt-2 text-xs">
          备案编号：
          <a href="https://beian.miit.gov.cn/" target="_blank"> 蜀ICP备13028783号-2 </a>
        </p>
        <p class="mt-1 text-xs">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011402000238"
            target="_blank"
          >
            <img class="inline-block w-4 mr-2" src="../static/images/demo/police.png" alt="" />
            <span>川公网安备 51011402000238号</span>
          </a>
        </p>
      </div>
      <div>
        <BnIcon width="160px" name="icon-heylzh" />
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
const color = useColorMode()
computed({
  get: () => color.value === 'light',
  set: () => (color.preference = color.value === 'dark' ? 'light' : 'dark')
})
</script>
