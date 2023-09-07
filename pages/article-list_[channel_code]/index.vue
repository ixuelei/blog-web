<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-04-10 14:24:34
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-07 08:59:54
 * @Description:
-->

<template>
  <div class="bg-[url('@/static/images/mainBg.jpg')]">
    <!-- content -->
    <div class="container flex mx-auto max-md:flex-col">
      <div class="flex-1">
        <div class="">
          <li
            v-for="item in 8"
            :key="item"
            class="inline-block w-full p-4 mb-2 duration-300 bg-white group hover:shadow-lg wow animate__zoomIn"
          >
            <div class="flex justify-between gradient-line group-hover:gradient-line-hover">
              <NuxtLink to="/article-info_xmbs/1" class="flex-1 group/link">
                <h2 class="text-xl text-slate-700 line-clamp-1 group-hover/link:gradient-word">
                  {{
                    item != 4
                      ? 'Vue2的Object.defineProperty与Vue3的Proxy区别'
                      : 'TypeScript 定义 优势 环境搭建'
                  }}
                </h2>
                <p class="pt-1 pb-3 text-sm text-slate-400">
                  作者：<span class="mr-6">Gavin</span>分类：<span>项目介绍</span>
                </p>
              </NuxtLink>
              <div class="flex items-center">
                <div class="mr-2 text-4xl gradient-word">13</div>
                <div class="text-slate-400">
                  <div class="">05月</div>
                  <div class="">2023</div>
                </div>
              </div>
            </div>
            <div class="flex">
              <div v-if="item != 4" class="mr-2 overflow-hidden rounded">
                <img
                  class="object-cover w-32 duration-300 group-hover:scale-125"
                  :src="`https://picsum.photos/300/200?random=${item}`"
                  alt=""
                />
              </div>
              <div class="flex-col flex-1">
                <p class="flex-1 text-slate-400 ] line-clamp-2 h-[48px]">
                  {{
                    item != 4
                      ? 'Object.defineProperty 只能劫持对象的某一个属性，不能对整个对象进行劫持，如果需要监听某一个对象的所有属性，需要遍历对象的所有属性并对其进行劫持来进行监听。'
                      : '编译时静态类型检测：函数或方法传参或变量赋值不匹配时，会出现编译错误提示，规避了开发期间的大量低级错误，省时，省力自动提示更清晰明确'
                  }}
                </p>
                <div class="flex items-center justify-between mt-3 text-slate-400">
                  <div class="flex items-center">
                    <svg
                      version="1.1"
                      width="20"
                      height="20"
                      viewBox="0 0 1024 1024"
                      class="svg-icon icon-tag"
                      title="标签"
                    >
                      <path
                        d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-0.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-0.2-4.7 0.6-6.3 2.3L137.7 444.8c-3.1 3.1-3.1 8.2 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0z m62.6-651.7l224.6 19 19 224.6L477.5 694 233.9 450.5l311.9-311.9z m60.159 186.226a48 48 0 1 0 67.88-67.883 48 48 0 1 0-67.88 67.883zM889.7 539.8l-39.6-39.5c-3.1-3.1-8.2-3.1-11.3 0l-362 361.3-237.6-237c-3.1-3.1-8.2-3.1-11.3 0l-39.6 39.5c-3.1 3.1-3.1 8.2 0 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"
                        stroke="transparent"
                      ></path>
                    </svg>
                    <a href="" class="ml-1 mr-4"> 项目部署 </a>
                    <a href="" class=""> 文档 </a>
                  </div>
                  <div class="">
                    <!---->
                    <div class="flex">
                      <span class="flex items-center"
                        ><svg
                          version="1.1"
                          width="16"
                          height="16"
                          viewBox="0 0 1260 1024"
                          class="count-item svg-icon icon-blog-read-volume"
                          title="阅读量"
                        >
                          <path
                            d="M630.153846 51.593846c231.030154 0 437.169231 141.312 617.944616 417.319385a73.806769 73.806769 0 0 1 0 81.289846C1067.323077 826.289231 861.184 967.601231 630.153846 967.601231S192.984615 826.289231 12.209231 550.203077a73.806769 73.806769 0 0 1 0-81.289846C192.984615 192.984615 399.123692 51.593846 630.153846 51.593846z m30.011077 171.716923c-165.730462 0-300.110769 128.157538-300.110769 286.247385 0 158.089846 134.380308 286.247385 300.110769 286.247384s300.110769-128.157538 300.110769-286.247384c0-158.089846-134.380308-286.247385-300.110769-286.247385z m0 457.964308c99.406769 0 180.066462-76.878769 180.066462-171.716923 0-94.838154-80.659692-171.716923-180.066462-171.716923s-180.066462 76.878769-180.066461 171.716923c0 94.838154 80.659692 171.716923 180.066461 171.716923z"
                            fill="#8a8a8a"
                            stroke="transparent"
                          ></path>
                        </svg>
                        2823
                      </span>
                      <span class="flex items-center ml-4 text"
                        ><svg
                          version="1.1"
                          width="16"
                          height="16"
                          viewBox="0 0 1055 1024"
                          class="count-item svg-icon icon-blog-collect-volume"
                          title="收藏量"
                        >
                          <path
                            d="M887.808 426.496h-229.376c89.088-328.192-61.44-345.088-61.44-345.088-63.488 0-50.688 50.176-55.296 58.88 0 160.768-170.496 286.72-170.496 286.72v455.68c0 45.056 61.44 60.928 85.504 60.928h344.576c32.256 0 58.88-84.992 58.88-84.992 85.504-290.304 85.504-376.32 85.504-376.32-0.512-60.928-57.856-55.808-57.856-55.808zM276.992 426.496H139.264c-28.16 0-28.672 27.648-28.672 27.648l28.16 459.264c0 29.184 29.184 29.184 29.184 29.184H286.72c24.576 0 24.576-19.456 24.576-19.456V461.312c0.512-35.328-34.304-34.816-34.304-34.816z"
                            fill="#8a8a8a"
                            stroke="transparent"
                          ></path>
                        </svg>
                        0
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <div class="py-3 bg-white wow animate__zoomIn">
            <el-pagination
              small
              background
              layout="prev, pager, next"
              :total="500"
              class="justify-center"
            />
          </div>
        </div>
      </div>
      <div ref="fixedInfo" class="w-3/12 pl-3">
        <BnSearchBox @on-search="handleSearch" />
        <BnCard :padding="0" title="文章分类">
          <BnTypeList />
        </BnCard>

        <BnCard hover shadow class="mt-3" title="关于我">
          <BnAboutMe />
        </BnCard>
      </div>
    </div>
    <br />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'reserved'
})
function handleSearch(keyword: any) {
  console.log(keyword)
  // this.$router.push({ path: '/article/search', query: { keyword } })
}
</script>
