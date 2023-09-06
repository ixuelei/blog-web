<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-09-05 09:02:49
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-05 10:49:03
 * @Description:友情链接
-->
<template>
  <div class="w-full">
    <slot name="title">
      <div v-if="title" class="flex items-center justify-between pt-1">
        <h2 class="text-xl py-2.5 text-slate-700">
          {{ title }}
        </h2>
        <NuxtLink
          class="text-xs border-b-2 border-transparent cursor-pointer text-slate-500 hover:border-error"
          >MORE+
        </NuxtLink>
      </div>
    </slot>
    <ul class="grid grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <li v-for="(item, index) in list"  :key="index" class="link_item">
        <div class="">
          <a :href="item.url" target="_blank" class="relative z-10 block p-4 duration-700 bg-white">
            <div class="flex">
              <div class="pr-2">
                <img
                  v-if="item.logo"
                  class="w-16 h-16 rounded-full bg-[#c3c4ce]"
                  :src="item.logo"
                  alt="资源海报"
                />
                <div
                  v-else
                  class="bg-[#c3c4ce] w-16 h-16 rounded-full text-white text-center text-2xl leading-[4rem]"
                >
                  {{ item.name.substring(0, 1) }}
                </div>
              </div>
              <div class="flex-1">
                <h4 class="text-xl font-bold">{{ item.name }}</h4>
                <p :title="item.desc" class="pt-2 text-sm h-11 text-slate-400 line-clamp-2">{{ item.desc }}</p>
              </div>
            </div>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  list: {
    type: Array<any>,
    default() {
      return [
        {
          name: '小九同学',
          logo: 'https://todo.jiangly.com/favicon.ico',
          url: 'https://baidu.com',
          desc: '开源的todolist效率小工具'
        },
        {
          name: '干式',
          logo: 'https://blog.xingyijun.cn/user.jpg',
          url: 'https://baidu.com',
          desc: '你对世界所付出的善意，终究会开花结果。'
        },
        {
          name: '粥里有勺糖',
          logo: 'https://oss.cui10.com/uploads/imgs/my_logo.jpg',
          url: 'https://baidu.com',
          desc: '专注于云原生、SRE、DevOps等技术领域。'
        },
        {
          name: '花喵电台',
          logo: 'https://file.jiangly.com/images/29749833.png',
          url: 'https://baidu.com',
          desc: '梁典典的博客'
        },
        {
          name: '小白龙博客',
          logo: 'https://pic.fmcat.top/head.jpg?x-oss-process=image/auto-orient,1/resize,m_fill,w_110,h_110/quality,q_90',
          url: 'https://baidu.com',
          desc: '“崇拜魔法”是编程学习者的大忌，“好奇心”才是我们成长与进步的阶梯。'
        },
        {
          name: '张红尘的个人博客',
          logo: 'https://oss.cui10.com/uploads/imgs/my_logo.jpg',
          url: 'https://baidu.com',
          desc: '纵你阅人何其多，始终无人恰似我'
        }
      ]
    }
  },
  images: {
    type: Array<any>,
    default() {
      return []
    }
  }
})
</script>
<style lang="scss" scoped>
.link_item {
  position: relative;
  a {
    border: 1px solid #eaeaea;
  }
  &:hover a {
    transform: translateY(10px);
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
  }
  &::before {
    content: '';
    background-color: #fff;
    height: 3px;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    left: 0.25rem;
    right: 0.5rem;
    bottom: -4px;
    border: 1px solid #eaeaea;
    border-top: none;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    z-index: 2;
  }
  &::after {
    content: '';
    background-color: #fff;
    height: 8px;
    margin-left: auto;
    margin-right: auto;
    position: absolute;
    bottom: -8px;
    left: 0.5rem;
    right: 0.25rem;
    border: 1px solid #eaeaea;
    border-top: none;
    box-shadow: 0 4px 8px 0 rgba(7, 17, 27, 0.1);
    z-index: 1;
  }
}
</style>
