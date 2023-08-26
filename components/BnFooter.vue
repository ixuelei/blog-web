<template>
  <footer class="bg-primary text-sm pb-10 mt-4">
    <div class="container px-3 mx-auto">
      <div class="flex flex-wrap justify-center sm:justify-between py-4">
        <div class="flex  text-slate-300">
          <p class="pr-2">关于我们</p>
          <p class="pr-2">网站地图</p>
          <p class="pr-2">法律责任</p>
          <p class="pr-2">意见建议</p>
        </div>
        <div class="mt-2 ms:mt-0">
          <client-only>
            <el-dropdown class="mr-2">
              <el-button link type="info">
                <span class="text-slate-300">行政监督</span>
                <el-icon class="el-icon--right">
                  <arrow-down class="text-slate-300" />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>国家卫星健康委员会</el-dropdown-item>
                  <el-dropdown-item>四川省卫生健康委员会</el-dropdown-item>
                  <el-dropdown-item>成都医学院</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown class="mr-2">
              <el-button link type="info">
                <span class="text-slate-300">医疗机构</span>

                <el-icon class="el-icon--right">
                  <arrow-down class="text-slate-300" />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>国家卫星健康委员会</el-dropdown-item>
                  <el-dropdown-item>四川省卫生健康委员会</el-dropdown-item>
                  <el-dropdown-item>成都医学院</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown>
              <el-button link type="info">
                <span class="text-slate-300">医疗机构</span>

                <el-icon class="el-icon--right">
                  <arrow-down class="text-slate-300" />
                </el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>国家卫星健康委员会</el-dropdown-item>
                  <el-dropdown-item>四川省卫生健康委员会</el-dropdown-item>
                  <el-dropdown-item>成都医学院</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </client-only>
        </div>
      </div>
    </div>
    <div class="container px-3 mx-auto">
      <div class="flex justify-evenly md:justify-between items-center text-slate-300">
        <div class="w-16">
          <img src="../static/images/demo/qualification.png" alt="" />
        </div>
        <div class="hidden sm:inline-block">
          <dl class="flex">
            <dt />
            <dd>新蔡县体育运动中学</dd>
          </dl>
          <dl class="flex">
            <dt>地址：</dt>
            <dd>新蔡县振新南路4号路</dd>
          </dl>
          <dl class="flex">
            <dt>邮编：</dt>
            <dd>610500</dd>
          </dl>
          <dl class="flex">
            <dt><a href="http://www.ruifox.com/" target="_blank">网站建设</a>：</dt>
            <dd><a href="http://www.ruifox.com/" target="_blank">锐狐网络</a></dd>
          </dl>
        </div>
        <div class="">
          <dl class="flex">
            <dt>校长邮编：</dt>
            <dd>school@163.com</dd>
          </dl>
          <dl class="flex">
            <dt>电话总机：</dt>
            <dd>0396-56525469</dd>
          </dl>
          <dl class="flex">
            <dt>招生办：</dt>
            <dd>0396-83016600 &emsp;</dd>
          </dl>
          <dl class="flex">
            <dt>招生办：</dt>
            <dd>0396-83023460 &emsp;</dd>
          </dl>
        </div>
        <div class="hidden md:grid gap-x-2 grid-cols-2 text-center">
          <NuxtLink to="">
            <img src="../static/images/demo/weibo.jpg" alt="" />
            <p>官方微博</p>
          </NuxtLink>
          <NuxtLink to="#">
            <img src="../static/images/demo/weixin.jpg" alt="" />
            <p>官方微信</p>
          </NuxtLink>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="inline-block sm:hidden text-slate-300 pt-3 w-full">
      <dl class="flex justify-center">
        <dt />
        <dd>新蔡县体育运动中学</dd>
      </dl>
      <dl class="flex justify-center">
        <dt>地址：</dt>
        <dd>新蔡县振新南路4号路</dd>
      </dl>
      <dl class="flex justify-center">
        <dt>邮编：</dt>
        <dd>610500</dd>
        <dt class="pl-2">
          <a href="#" target="_blank"> 网站建设： </a>
        </dt>
        <dd>
          <a href="#" target="_blank"> 河南讯喜 </a>
        </dd>
      </dl>
    </div>
    <div class="container px-3 mt-2 mx-auto text-slate-300 text-center opacity-40">
      <span>Copyright©2022 cyfyy All rights reserved.</span> | <span>川卫网审[2013-344]号</span> |
      <span>
        备案编号：
        <a href="https://beian.miit.gov.cn/" target="_blank"> 蜀ICP备13028783号-2 </a>
      </span>
      |
      <span>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=51011402000238"
          target="_blank"
        >
          <img class="inline-block w-4" src="../static/images/demo/police.png" alt="" />
          <span>川公网安备 51011402000238号</span>
        </a>
      </span>
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
