<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-08-28 09:05:07
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-03 16:38:16
 * @Description:
-->
<template>
  <footer class="border-t border-[#06060b] bg-[#06060b]">
    <div
      class="container flex items-center justify-between px-3 py-8 mx-auto max-sm:pt-0 max-sm:flex-col-reverse max-sm:text-center"
    >
      <div class="text-sm text-slate-400">
        <p>坚持，终将收获更好的自己。</p>
        <p>
          小陈（Gavin），一位来自98年的前端程序员；在一个偶然的机会下接触到前端这个职业，沉醉其中，喜欢安安静静的写代码，在代码的世界里奔跑。
        </p>
        <!-- 快捷入口 -->
        <div class="flex mt-2 max-sm:justify-center">
          <nuxt-link>
            <BnIcon color="#94a3b8" width="22px" name="icon-email" />
          </nuxt-link>
          <nuxt-link class="pl-4">
            <BnIcon color="#94a3b8" width="22px" name="icon-home_api" />
          </nuxt-link>
          <nuxt-link class="pl-3">
            <BnIcon color="#94a3b8" width="22px" name="icon-a-juejincopy" />
          </nuxt-link>
        </div>
        <p class="mt-3 text-xs">[Gavin] - 个人博客</p>
        <p class="mt-2 text-xs">
          <img class="inline-block w-4" src="../static/images/demo/police.png" alt="" />
          备案编号:<a href="https://beian.miit.gov.cn/" target="_blank"> 蜀ICP备13028783号-2 </a>
        </p>
        <p class="mt-1 text-xs">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011402000238"
            target="_blank"
          >
            <span>Copyright © 2020-2021 jiangly.com All Rights Reserved. </span>
          </a>
        </p>
      </div>
      <div>
        <BnIcon color="#94a3b8" width="160px" name="icon-heylzh" />
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
