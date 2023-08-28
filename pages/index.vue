<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-13 14:44:20
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-28 17:48:35
 * @Description:
-->
<template>
  <div class="home">
    <!-- 第一屏 -->
    <div class="h-[100vh] relative -top-[56px]  bg-[url('img/R-C.jpg')] bg-bottom bg-cover bg-no-repeat bg-fixed">
      <!-- 背景 -->
      <!-- <img
      class="absolute object-cover w-full h-full opacity-70"
        src="https://ts1.cn.mm.bing.net/th/id/R-C.7a94c55f7edd6bbbd98b4a0c215a5c38?rik=x7dacMJ9kgm1Xg&riu=http%3a%2f%2fwww.deskcar.com%2fdesktop%2ffengjing%2f20121123133616%2f20.jpg&ehk=Rc4Xbx2t7JhHUWjxuSHC883AM8Xys9OqMghTUPM7UgI%3d&risl=&pid=ImgRaw&r=0"
      /> -->
      <div class="container relative px-3 mx-auto text-center">
        <img class="rounded-full w-[220px] mt-[20vh]" src="../static/images/avatar.jpeg" />
        <p
          class="text-[#000] relative z-10 -mt-24 font-bold text-9xl font-Rubik"
          style="text-shadow: 0.4rem -0.4rem 0 #fff"
        >
          Hey.
        </p>
        <div class="mt-4 text-2xl font-Rubik md:text-4xl">
          <h2 class="text-center">I am Gavin.</h2>
          <h2 class="flex justify-center">
            <div class="mr-3">I am a</div>
            <div class="relative w-[7rem]">
              <strong :class="t == 0 ? 'is-visible' : 'absolute is-hidden'"> post-90s. </strong>
              <strong :class="t == 1 ? 'is-visible' : 'absolute is-hidden'"> blogger. </strong>
              <strong :class="t == 2 ? 'is-visible' : 'absolute is-hidden'"> programmer. </strong>
            </div>
          </h2>
        </div>
      </div>
    </div>
    <!-- 第二屏 -->

    <!-- <BnBanner :img-data="bannerPic" /> -->
    <!-- adv -->
    <!-- <div class="container px-3 mx-auto mt-4">
      <img
        v-if="tpggPic.length"
        :src="`https://go.ixuelei.com/prod-api/attachment/viewImage/${tpggPic[0].attaId}`"
        alt=""
      />
    </div> -->
    <!-- adv end -->
    <!-- news list start -->
    <!-- <div class="container flex-wrap px-3 mx-auto mt-4 lg:flex">
      <div class="lg:w-1/3">
        <BnHomeNews title="新闻中心" :list="list" />
      </div>
      <div class="lg:w-2/3 max-md:w-full">
        <BnNewsList :list="news" />
      </div>
    </div> -->
    <!-- news list end -->

    <!-- courseBox start -->
    <!-- <div class="w-full my-4">
      <div class="container px-3 mx-auto">
        <div class="px-3 bg-white">
           重点学科
          <BnKeyDiscipline title="名师推荐" />
        </div>
      </div>
    </div> -->
    <!-- courseBox end -->
    <!-- adv -->
    <!-- <div class="container px-3 mx-auto my-4">
      <img
        v-if="tpggPic.length > 1"
        :src="`https://go.ixuelei.com/prod-api/attachment/viewImage/${tpggPic[1].attaId}`"
        alt=""
        class="w-full"
      />
    </div> -->
    <!-- adv end -->
    <!-- experts start  -->
    <!-- ../static/images/demo/exprtsbg.jpg -->
    <!-- <div class="w-full py-3 bg-[url('img/demo/mhbg.png')] bg-cover bg-no-repeat bg-fixed">
      <div class="container px-3 mx-auto">
        <div class="px-3 bg-slate-400/80">
          <Bn-key-discipline :class-name="{ infoP: 'text-white', infoH2: 'text-white' }">
            <template #title>
              <div class="flex items-center justify-between text-white">
                <h2 class="text-xl py-2.5">校友风采</h2>
                <p class="text-sm border-b-2 border-transparent cursor-pointer hover:border-error">
                  MORE+
                </p>
              </div>
            </template>
          </Bn-key-discipline>
        </div>
      </div>
    </div> -->
    <!-- experts end -->
    <!-- news1 style start -->
    <!-- <div class="mt-4 mb-2">
      <ul class="container grid px-3 mx-auto gap-x-4 md:grid-cols-2 lg:grid-cols-4">
        <li class="my-2">
          <BnNews1 title="医疗动态" />
        </li>
        <li class="my-2">
          <BnNews1 title="教学科研" />
        </li>
        <li class="my-2">
          <BnNews1 title="党建工作" />
        </li>
        <li class="my-2">
          <BnNews1 title="党建工作" />
        </li>
      </ul>
    </div> -->
    <!-- news1 style end -->

    <div class="container px-3 mx-auto">
      <div class="bg-white">
        <BnSpecial title="友情链接" />
      </div>
    </div>
    <br />
  </div>
</template>

<script setup lang="ts">
// useHead({
//   title: 'My App'
// })
// 首页轮播图
const { data: bannerPic }: any = await httpGet('/prod-api/platform/getImages', { imgTypeId: 22 })
/**
 * 首页通屏广告
 */
const { data: tpggPic }: any = await httpGet('/prod-api/platform/getImages', { imgTypeId: 2 })
const t = ref(0)
setInterval(() => {
  if (t.value >= 2) {
    t.value = 0
  } else {
    t.value++
  }
}, 3000)
const news = [
  {
    tabName: '医院新闻',
    list: [
      {
        img: 'http://www.zzms.com/ueditor/php/upload/image/20200430/1588211889686789.jpg',
        title: '刘校铭，2020届毕业生。在校期间荣获二等奖学金、三好学生等荣誉称号。',
        subTitle:
          '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
        title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
        subTitle:
          '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
        title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
        subTitle:
          '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
        title: '刘校铭，2020届毕业生。在校期间荣获二等奖学金、三好学生等荣誉称号。',
        subTitle:
          '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
        title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
        subTitle:
          '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1116/thumb_390_250_20211116120329394.jpg',
        title: '成医附院援藏医生“冒险”为83岁高海拔肺癌患者手术',
        subTitle:
          '近日,成医附院胸心外科医生何小平根据上级工作安排,前往阿坝州马尔康市人民医院支援,用了极短时间适'
      }
    ]
  },
  {
    tabName: '媒体新闻',
    list: [
      {
        img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
        title: '成医附院获“四川省援外医疗工作先进集体”称号',
        subTitle:
          '2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
        title: '成医附院获“四川省援外医疗工作先进集体”称号',
        subTitle:
          '2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
        title: '成医附院获“四川省援外医疗工作先进集体”称号',
        subTitle:
          '2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
        title: '成医附院获“四川省援外医疗工作先进集体”称号',
        subTitle:
          '2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
        title: '成医附院获“四川省援外医疗工作先进集体”称号',
        subTitle:
          '2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康'
      },
      {
        img: 'http://upload.cyfyy.cn/2021/1215/thumb_390_250_20211215053902240.jpg',
        title: '成医附院获“四川省援外医疗工作先进集体”称号',
        subTitle:
          '2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康2021年12月14日,四川援外医疗45周年纪念会议暨2021年援外医疗队回国总结会在成都召开。四川省卫生健康'
      }
    ]
  },
  {
    tabName: '通知公告',
    list: [
      {
        img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
        title: '【喜讯】我院获批临床医学一级学科硕士学位授权点',
        subTitle:
          '近日,国务院学位委员会印发了《国务院学位委员会关于下达2020年审核增列的博士、硕士学位授权点名单的'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
        title: '【喜讯】我院获批临床医学一级学科硕士学位授权点',
        subTitle:
          '近日,国务院学位委员会印发了《国务院学位委员会关于下达2020年审核增列的博士、硕士学位授权点名单的'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
        title: '【喜讯】我院获批临床医学一级学科硕士学位授权点',
        subTitle:
          '近日,国务院学位委员会印发了《国务院学位委员会关于下达2020年审核增列的博士、硕士学位授权点名单的'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
        title: '【喜讯】我院获批临床医学一级学科硕士学位授权点',
        subTitle:
          '近日,国务院学位委员会印发了《国务院学位委员会关于下达2020年审核增列的博士、硕士学位授权点名单的'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
        title: '【喜讯】我院获批临床医学一级学科硕士学位授权点',
        subTitle:
          '近日,国务院学位委员会印发了《国务院学位委员会关于下达2020年审核增列的博士、硕士学位授权点名单的'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0422/thumb_390_250_20220422094724681.jpg',
        title: '【喜讯】我院获批临床医学一级学科硕士学位授权点',
        subTitle:
          '近日,国务院学位委员会印发了《国务院学位委员会关于下达2020年审核增列的博士、硕士学位授权点名单的'
      }
    ]
  },
  {
    tabName: '招标公告',
    list: [
      {
        img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
        title: '疫情下的温情产检',
        subTitle:
          '近日,由于成都市新都区本地出现新冠确诊病例,部分小区采取了风控管理措施,这可让需要定期产检的二胎'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
        title: '疫情下的温情产检',
        subTitle:
          '近日,由于成都市新都区本地出现新冠确诊病例,部分小区采取了风控管理措施,这可让需要定期产检的二胎'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
        title: '疫情下的温情产检',
        subTitle:
          '近日,由于成都市新都区本地出现新冠确诊病例,部分小区采取了风控管理措施,这可让需要定期产检的二胎'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
        title: '疫情下的温情产检',
        subTitle:
          '近日,由于成都市新都区本地出现新冠确诊病例,部分小区采取了风控管理措施,这可让需要定期产检的二胎'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
        title: '疫情下的温情产检',
        subTitle:
          '近日,由于成都市新都区本地出现新冠确诊病例,部分小区采取了风控管理措施,这可让需要定期产检的二胎'
      },
      {
        img: 'http://upload.cyfyy.cn/2022/0420/thumb_390_250_20220420093503597.jpg',
        title: '疫情下的温情产检',
        subTitle:
          '近日,由于成都市新都区本地出现新冠确诊病例,部分小区采取了风控管理措施,这可让需要定期产检的二胎'
      }
    ]
  }
]
const list = [
  {
    img: './img/demo/1588211889686789.jpg',
    title: '刘校铭，2020届毕业生。在校期间荣获二等奖学金、三好学生等荣誉称号。',
    subTitle:
      '刘校铭，2020届毕业生。在校期间荣获二等奖学金、三好学生等荣誉称号。多次作为志愿者为外国大学招生官、留学生做翻译。'
  },
  {
    img: './img/demo/1588211777759970.jpg',
    title: '李睿钰，2020届毕业生，曾荣获一等奖学金、三好学生等荣誉称号',
    subTitle:
      '李睿钰，2020届毕业生，曾荣获一等奖学金、三好学生等荣誉称号。在校期间曾策划关于保护流浪动物和救助站志愿者等相关领导力活动，多次作为志愿者为留学生和招生官进行翻译。'
  },
  {
    img: './img/demo/1588211606931738.jpg',
    title: '杨宸，2019届毕业生，曾担任国际部学生会主席，社团联合会副主席，连续三年担任班长。',
    subTitle: '杨宸，2019届毕业生，曾担任国际部学生会主席，社团联合会副主席，连续三年担任班长。'
  },
  {
    img: './img/demo/1588211620822626.jpg',
    title: '王清清，2016届毕业生。托福104，ACT 30分',
    subTitle:
      '王清清，2016届毕业生。托福104，ACT 30分。高二时在中国日报社“21世纪杯”全国中小学英语演讲比赛中获得河南省二等奖，并在全国物理竞赛中取得华北地区第七名。'
  }
]
// function test (){

//   console.log(bnTree)
// }
// test()
// const pUser = useStore.pUser()
// 新加内容
// const navList = [
//   {
//     lable: '专家介绍',
//     icon: 'bn_icon_zhuanjia'
//   },
//   {
//     lable: '门诊查询',
//     icon: 'bn_icon_rili'
//   },
//   {
//     lable: '预约挂号',
//     icon: 'bn_icon_yuyue'
//   },
//   {
//     lable: '就医指南',
//     icon: 'bn_icon_zhengcezhinanzhen'
//   },
//   {
//     lable: '健康体检',
//     icon: 'bn_icon_tijian'
//   },
//   {
//     lable: '交通信息',
//     icon: 'bn_icon_xiazai19'
//   },
//   {
//     lable: '人才招聘',
//     icon: 'bn_icon_zhuanjia'
//   },
//   {
//     lable: '意见建议',
//     icon: 'bn_icon_tousujianyi'
//   }
// ]

// const handleSelect = (key: string | number) => {
// message.info(String(key))
// }
// console.log(data.value, 'data')

// const pUser = useStore.App()
// const { name: ttt } = storeToRefs(pUser)
// const changeName = () => {
//   pUser.name = 'Mark'
//   console.log(name)
// }
</script>
<style lang="scss" scoped>
@keyframes rotate-1-in {
  0% {
    transform: rotateX(180deg);
    opacity: 0;
  }
  35% {
    transform: rotateX(120deg);
    opacity: 0;
  }
  65% {
    opacity: 0;
  }
  to {
    transform: rotateX(1turn);
    opacity: 1;
  }
}
@keyframes rotate-1-out {
  0% {
    transform: rotateX(0deg);
    opacity: 1;
  }
  35% {
    transform: rotateX(-40deg);
    opacity: 1;
  }
  65% {
    opacity: 0;
  }
  to {
    transform: rotateX(180deg);
    opacity: 0;
  }
}
strong.is-visible {
  opacity: 1;
  display: block;
  transform: rotateX(0deg);
  -webkit-animation: rotate-1-in 1s;
  animation: rotate-1-in 1s;
}
strong.is-hidden {
  opacity: 0;
  transform: rotateX(180deg);
  -webkit-animation: rotate-1-out 1s;
  animation: rotate-1-out 1s;
}
strong {
  position: absolute;
  top: 0;
  left: 0;
  font-weight: bolder;
  opacity: 0;
  display: block;
  transition: 0.8s;
  transform-origin: 0 100%;
  transform-style: preserve-3d;
  white-space: nowrap;
}
</style>
