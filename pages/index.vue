<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-08-28 09:05:07
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-05 17:46:20
 * @Description:
-->
<template>
  <div class="home">
    <!-- 第一屏 -->
    <div class="h-[100vh] bg-[url('img/R-C.jpg')] bg-bottom bg-cover bg-no-repeat bg-fixed">
      <!-- 背景 -->
      <!-- <img
      class="absolute object-cover w-full h-full opacity-70"
        src="https://ts1.cn.mm.bing.net/th/id/R-C.7a94c55f7edd6bbbd98b4a0c215a5c38?rik=x7dacMJ9kgm1Xg&riu=http%3a%2f%2fwww.deskcar.com%2fdesktop%2ffengjing%2f20121123133616%2f20.jpg&ehk=Rc4Xbx2t7JhHUWjxuSHC883AM8Xys9OqMghTUPM7UgI%3d&risl=&pid=ImgRaw&r=0"
      /> -->
      <div class="container relative px-3 mx-auto text-center">
        <img class="rounded-full w-[220px] mt-[20vh]" src="../static/images/avatar.jpeg" />
        <p
          class="relative z-10 -mt-24 font-bold text-white text-9xl font-Rubik"
          style="text-shadow: 0.6rem -0.6rem 0 #000"
        >
          Hey.
        </p>
        <div class="mt-4 text-2xl text-white md:text-4xl">
          <div class="">
            <BnRotatingText :words="words"  />
            <span class="ml-4"> 、而后风生水起</span>
          </div>
          <div class="font-Rubik">
            <BnRotatingText :words="words2" />
            <span class="ml-2"> 、say never</span>
          </div>
          <!-- <h2 class="text-center">I am Gavin.</h2>
          <h2 class="flex justify-center">
            <div class="mr-3">I am a</div>
            <div class="relative w-[7rem]">
              <strong :class="t == 0 ? 'is-visible' : 'absolute is-hidden'"> post-90s. </strong>
              <strong :class="t == 1 ? 'is-visible' : 'absolute is-hidden'"> blogger. </strong>
              <strong :class="t == 2 ? 'is-visible' : 'absolute is-hidden'"> programmer. </strong>
            </div>
          </h2> -->
        </div>
      </div>
    </div>

    <!-- 第二屏 -->
    <section class="pb-8 bg-white">
      <div class="container px-3 mx-auto">
        <div class="pt-24 text-center">
          <div class="text-2xl">网站介绍</div>
          <div class="mt-4 text-base text-slate-500">主要介绍网站各个模块用到了哪些技术</div>
        </div>
        <div data-wow-duration="1s" class="mt-4 wow animate__zoomIn">
          <!-- style="visibility: visible; animation-duration: 1s" -->
          <div class="flex items-center justify-center section-module">
            <div class="section-module-img max-lg:hidden">
              <BnIcon width="160px" name="icon-heylzh" />
            </div>
            <div class="lg:section-module-card">
              <div class="relative flex justify-start lg:left-[-74px] my-8">
                <div
                  class="bg-[#f1f1f1] rounded-full w-[40px] h-[40px] flex justify-center items-center"
                >
                  <svg
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    class="icon svg-icon icon-home_article"
                  >
                    <path
                      d="M704 914.474667c2.901333-2.304 5.504-4.736 7.808-7.253334l112.64-122.368c8.704-9.472 16.469333-23.552 21.76-38.186666H768c-35.541333 0-64 28.586667-64 64.213333v103.594667z m-42.666667 21.162666v-124.757333A106.581333 106.581333 0 0 1 768 704h85.333333V159.530667C853.333333 118.698667 822.784 85.333333 785.066667 85.333333H238.933333C201.344 85.333333 170.666667 118.570667 170.666667 159.573333v704.853334c0 41.045333 30.549333 74.24 68.266666 74.24h401.365334c6.528 0 13.738667-1.066667 21.034666-2.986667zM640.298667 981.333333H238.933333C176.810667 981.333333 128 928.256 128 864.426667V159.573333C128 95.786667 176.896 42.666667 238.933333 42.666667h546.133334C847.146667 42.666667 896 95.829333 896 159.530667v551.168c0 34.389333-16.853333 77.696-40.192 103.04l-112.64 122.410666c-24.021333 26.112-67.413333 45.184-102.826667 45.184z"
                      stroke="transparent"
                    ></path>
                    <path
                      d="M320 256h256a21.333333 21.333333 0 1 0 0-42.666667h-256a21.333333 21.333333 0 0 0 0 42.666667zM320 426.666667h341.333333a21.333333 21.333333 0 1 0 0-42.666667h-341.333333a21.333333 21.333333 0 0 0 0 42.666667zM320 597.333333h341.333333a21.333333 21.333333 0 1 0 0-42.666666h-341.333333a21.333333 21.333333 0 1 0 0 42.666666z"
                      stroke="transparent"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1 ml-6">
                  <p class="">
                    <span>前端服务</span>
                  </p>
                  <div class="text-sm text-slate-500">
                    采用 NuxtJs 实现一套 SSR 服务端渲染的Blog系统。
                  </div>
                </div>
              </div>
              <div class="relative flex justify-start lg:left-[-32px] my-8">
                <div
                  class="bg-[#f1f1f1] rounded-full w-[40px] h-[40px] flex justify-center items-center"
                >
                  <svg
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    class="icon svg-icon icon-home_resouse"
                  >
                    <path
                      d="M285.866667 661.333333c-10.666667 55.466667-25.6 108.8-44.8 160 42.666667 21.333333 91.733333 32 142.933333 32s100.266667-10.666667 142.933333-32c-19.2-51.2-34.133333-104.533333-44.8-160h-196.266666zM183.466667 789.333333c14.933333-40.533333 27.733333-83.2 36.266666-128H76.8c25.6 51.2 61.866667 93.866667 106.666667 128zM183.466667 234.666667c-44.8 32-83.2 76.8-106.666667 128h142.933333c-8.533333-44.8-19.2-85.333333-36.266666-128zM584.533333 234.666667c-14.933333 40.533333-27.733333 83.2-36.266666 128h142.933333c-25.6-51.2-61.866667-93.866667-106.666667-128zM53.333333 426.666667c-6.4 27.733333-10.666667 55.466667-10.666666 85.333333s4.266667 57.6 10.666666 85.333333h177.066667c2.133333-27.733333 4.266667-55.466667 4.266667-85.333333s-2.133333-57.6-4.266667-85.333333H53.333333zM686.933333 426.666667h-149.333333c-2.133333 27.733333-4.266667 55.466667-4.266667 85.333333s2.133333 57.6 4.266667 85.333333h4.266667c19.2-76.8 74.666667-138.666667 145.066666-170.666666zM241.066667 202.666667c19.2 51.2 34.133333 104.533333 44.8 160h196.266666c10.666667-55.466667 25.6-108.8 44.8-160-42.666667-21.333333-91.733333-32-142.933333-32s-100.266667 10.666667-142.933333 32zM473.6 597.333333c-2.133333-27.733333-4.266667-55.466667-4.266667-85.333333s2.133333-57.6 4.266667-85.333333h-179.2c2.133333 27.733333 4.266667 55.466667 4.266667 85.333333s-2.133333 57.6-4.266667 85.333333h179.2zM789.333333 469.333333c-106.666667 0-192 85.333333-192 192s85.333333 192 192 192 192-85.333333 192-192-85.333333-192-192-192z m64 149.333334c-14.933333 0-29.866667-8.533333-36.266666-21.333334H746.666667v42.666667h106.666666c12.8 0 21.333333 8.533333 21.333334 21.333333v85.333334c0 12.8-8.533333 21.333333-21.333334 21.333333h-91.733333c-6.4 12.8-21.333333 21.333333-36.266667 21.333333-23.466667 0-42.666667-19.2-42.666666-42.666666s19.2-42.666667 42.666666-42.666667c14.933333 0 29.866667 8.533333 36.266667 21.333333H832v-42.666666h-106.666667c-12.8 0-21.333333-8.533333-21.333333-21.333334v-85.333333c0-12.8 8.533333-21.333333 21.333333-21.333333h91.733334c6.4-12.8 21.333333-21.333333 36.266666-21.333334 23.466667 0 42.666667 19.2 42.666667 42.666667s-19.2 42.666667-42.666667 42.666667z"
                      stroke="transparent"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1 ml-6">
                  <p class="">
                    <span>导航资源</span>
                  </p>
                  <div class="text-sm text-slate-500">
                    前端添加资源链接、通过 cheeiro 爬取网站介绍、图片、文章等。
                  </div>
                </div>
              </div>
              <div class="relative flex justify-start lg:left-[-20px] my-8">
                <div
                  class="bg-[#f1f1f1] rounded-full w-[40px] h-[40px] flex justify-center items-center"
                >
                  <svg
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    class="icon svg-icon icon-home_admin"
                  >
                    <path
                      d="M928 832a32 32 0 1 1 0 64h-832a32 32 0 1 1 0-64h832zM832 128a128 128 0 0 1 128 128v384a128 128 0 0 1-128 128H192a128 128 0 0 1-128-128V256a128 128 0 0 1 128-128h640z m0 64H192a64 64 0 0 0-63.552 56.512L128 256v384a64 64 0 0 0 56.512 63.552L192 704h640a64 64 0 0 0 63.552-56.512L896 640V256a64 64 0 0 0-56.512-63.552L832 192zM256 544h448a32 32 0 1 1 0 64H256a32 32 0 0 1 0-64z m0-128h128a32 32 0 0 1 0 64H256a32 32 0 0 1 0-64z m0-128h320a32 32 0 0 1 0 64H256a32 32 0 0 1 0-64z"
                      fill="#727272"
                      stroke="transparent"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1 ml-6">
                  <p class="">
                    <span>后台管理</span>
                  </p>
                  <div class="text-sm text-slate-500">
                    采用Vue + Axios + ElementUi 开发后台管理系统进行实时编辑。
                  </div>
                </div>
              </div>
              <div class="relative flex justify-start lg:left-[-32px] my-8">
                <div
                  class="bg-[#f1f1f1] rounded-full w-[40px] h-[40px] flex justify-center items-center"
                >
                  <svg
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    class="icon svg-icon icon-home_api"
                  >
                    <path
                      d="M735.129 609.161a29.887 29.887 0 0 1-20.431-8.039c-12.129-11.287-12.812-30.27-1.523-42.398l84.574-90.879c48.127-51.716 24.423-168.142-28.397-217.297l-1.776-1.653c-26.279-24.456-69.907-41.497-113.856-44.47-45.063-3.049-83.305 8.521-104.916 31.746L464.23 327.05c-11.288 12.129-30.27 12.812-42.399 1.524-12.129-11.288-12.812-30.27-1.524-42.399l84.574-90.879c33.982-36.517 89.708-55.01 152.889-50.734 57.916 3.918 114.246 26.502 150.683 60.412l1.776 1.653c36.437 33.908 63.006 88.472 71.072 145.957 8.799 62.71-5.646 119.62-39.628 156.137l-84.575 90.878c-5.91 6.349-13.93 9.562-21.969 9.562z"
                      stroke="transparent"
                    ></path>
                    <path
                      d="M734.291 609.706a29.892 29.892 0 0 1-20.431-8.039L421.346 329.448c-12.129-11.288-12.811-30.27-1.524-42.399 11.288-12.129 30.27-12.812 42.399-1.524l292.515 272.22c12.129 11.287 12.812 30.27 1.523 42.398-5.908 6.35-13.928 9.563-21.968 9.563zM790.216 256.34a29.892 29.892 0 0 1-20.431-8.039c-12.129-11.287-12.812-30.27-1.523-42.399l75.324-80.938c11.287-12.127 30.27-12.812 42.398-1.523 12.129 11.287 12.812 30.27 1.523 42.399l-75.324 80.938c-5.909 6.349-13.927 9.562-21.967 9.562zM396.659 893.045c-5.846 0-11.767-0.2-17.76-0.605-57.916-3.919-114.246-26.503-150.684-60.413l-1.776-1.652c-36.436-33.908-63.005-88.472-71.071-145.957-8.799-62.711 5.645-119.621 39.628-156.138l84.573-90.878c11.288-12.128 30.27-12.812 42.399-1.523 12.129 11.288 12.811 30.271 1.524 42.399l-84.573 90.878c-21.613 23.225-30.409 62.197-24.133 106.926 6.121 43.623 26.249 85.915 52.529 110.371l1.776 1.653c26.28 24.457 69.908 41.498 113.857 44.472 45.063 3.048 83.304-8.522 104.917-31.746l84.574-90.879c11.285-12.129 30.27-12.813 42.398-1.523 12.129 11.287 12.812 30.27 1.523 42.398l-84.573 90.879c-30.757 33.052-79.336 51.337-135.128 51.338z"
                      stroke="transparent"
                    ></path>
                    <path
                      d="M594.879 759.513a29.892 29.892 0 0 1-20.431-8.039L281.933 479.255c-12.129-11.288-12.812-30.27-1.524-42.399 11.287-12.128 30.271-12.811 42.399-1.524L615.324 707.55c12.129 11.288 12.812 30.271 1.523 42.399-5.909 6.351-13.928 9.564-21.968 9.564zM171.116 921.599a29.892 29.892 0 0 1-20.431-8.039c-12.129-11.287-12.812-30.27-1.524-42.398l75.323-80.938c11.287-12.129 30.271-12.813 42.399-1.523 12.129 11.287 12.812 30.27 1.524 42.398l-75.323 80.938c-5.909 6.349-13.929 9.562-21.968 9.562z"
                      stroke="transparent"
                    ></path>
                    <path
                      d="M389.723 556.667a29.896 29.896 0 0 1-20.431-8.038c-12.129-11.288-12.812-30.271-1.524-42.399l70.036-75.258c11.287-12.129 30.27-12.811 42.399-1.524 12.129 11.287 12.812 30.27 1.524 42.399l-70.036 75.258c-5.909 6.349-13.929 9.562-21.968 9.562zM528.169 685.509a29.892 29.892 0 0 1-20.431-8.039c-12.129-11.287-12.811-30.271-1.523-42.398l70.039-75.259c11.287-12.129 30.269-12.813 42.398-1.523 12.129 11.287 12.812 30.271 1.523 42.399l-70.039 75.258c-5.908 6.349-13.927 9.562-21.967 9.562z"
                      stroke="transparent"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1 ml-6">
                  <p class="">
                    <span>接口开发</span>
                  </p>
                  <div class="text-sm text-slate-500">
                    使用Java作为开发框架、基于SpringBoot/Spring
                    Security/Jwt/MySQL/Vue的前后端分离的后台管理系统。
                  </div>
                </div>
              </div>
              <div class="relative flex justify-start lg:left-[-74px] my-8">
                <div
                  class="bg-[#f1f1f1] rounded-full w-[40px] h-[40px] flex justify-center items-center"
                >
                  <svg
                    version="1.1"
                    width="24"
                    height="24"
                    viewBox="0 0 1024 1024"
                    class="icon svg-icon icon-home_chat"
                  >
                    <path
                      d="M849.724 596.322v84.322c0 4.801-1.512 9.101-3.632 13.053-0.169 0.321 0.045 0.685-0.135 1-0.601 1.046-1.585 1.67-2.299 2.608-1.187 1.563-2.339 3.041-3.817 4.323-1.372 1.192-2.844 2.075-4.396 2.968-1.552 0.899-3.047 1.732-4.767 2.328-1.849 0.636-3.71 0.893-5.655 1.141-1.169 0.146-2.198 0.685-3.407 0.685-0.591 0-1.079-0.298-1.658-0.338-1.872-0.107-3.643-0.612-5.486-1.107-1.844-0.495-3.632-0.938-5.307-1.781-0.517-0.259-1.09-0.247-1.602-0.54L619.354 596.323H456.226c-62.093 0-112.428-50.334-112.428-112.428V202.824c0-62.093 50.334-112.428 112.428-112.428h393.499c62.093 0 112.428 50.334 112.428 112.428v281.07c0 62.094-50.334 112.429-112.428 112.429z m56.214-393.499c0-31.047-25.167-56.214-56.214-56.214H456.225c-31.047 0-56.214 25.167-56.214 56.214v281.07c0 31.047 25.167 56.214 56.214 56.214H628.24l0.545 0.321c4.16 0.275 8.303 1.22 12.154 3.446l152.572 88.087v-63.747c0-15.52 12.586-28.107 28.107-28.107h28.107c31.047 0 56.214-25.167 56.214-56.214v-281.07z m-84.321 168.642c-15.52 0-28.107-12.586-28.107-28.107 0-15.52 12.586-28.107 28.107-28.107s28.107 12.586 28.107 28.107c0 15.521-12.586 28.107-28.107 28.107z m-168.642 0c-15.52 0-28.107-12.586-28.107-28.107 0-15.52 12.586-28.107 28.107-28.107 15.52 0 28.107 12.586 28.107 28.107 0 15.521-12.587 28.107-28.107 28.107z m-168.643 0c-15.52 0-28.107-12.586-28.107-28.107 0-15.52 12.586-28.107 28.107-28.107s28.107 12.586 28.107 28.107c0 15.521-12.586 28.107-28.107 28.107z m-365.391 56.213v281.071c0 31.047 25.167 56.214 56.214 56.214h28.107c15.52 0 28.107 12.586 28.107 28.107v63.747l152.572-88.087c3.85-2.227 7.994-3.171 12.154-3.446l0.545-0.321h172.015c31.047 0 56.214-25.167 56.214-56.214h56.214c0 62.093-50.334 112.428-112.428 112.428H405.526L217.315 929.84c-0.512 0.293-1.085 0.281-1.602 0.54-1.675 0.843-3.463 1.287-5.307 1.781-1.844 0.495-3.615 1-5.486 1.107-0.579 0.039-1.068 0.338-1.658 0.338-1.208 0-2.238-0.54-3.407-0.685-1.945-0.247-3.805-0.506-5.655-1.141-1.72-0.596-3.215-1.428-4.767-2.328-1.552-0.893-3.024-1.777-4.396-2.968-1.478-1.282-2.631-2.76-3.817-4.323-0.713-0.938-1.698-1.563-2.299-2.609-0.18-0.315 0.034-0.681-0.135-1-2.119-3.952-3.632-8.252-3.632-13.053v-84.322c-62.093 0-112.428-50.334-112.428-112.428V427.676c0-62.093 50.334-112.428 112.428-112.428h112.428v56.214H175.156c-31.047 0-56.214 25.167-56.214 56.214z"
                      fill=""
                      stroke="transparent"
                    ></path>
                  </svg>
                </div>
                <div class="flex-1 ml-6">
                  <p class="">
                    <span>聊天互动</span>
                  </p>
                  <div class="text-sm text-slate-500">
                    采用socker.io开发的在线互动聊天室、用于实时通信。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 找到我 -->
    <section data-wow-duration="1s" class="py-20 section-part wow animate__zoomIn">
      <div class="container relative px-3 mx-auto">
        <div class="text-2xl text-center text-white">你可以在这些场所找到我</div>
        <!---->
      </div>
      <div class="container px-3 mx-auto mt-8">
        <ul class="relative flex justify-center">
          <nuxt-link class="p-2 duration-300 border border-white rounded-full hover:scale-125">
            <BnIcon color="#fff" width="22px" name="icon-email" />
          </nuxt-link>
          <nuxt-link class="p-2 mx-4 duration-300 border border-white rounded-full hover:scale-125">
            <BnIcon color="#fff" width="22px" name="icon-home_api" />
          </nuxt-link>
          <nuxt-link class="p-2 duration-300 border border-white rounded-full hover:scale-125">
            <BnIcon color="#fff" width="22px" name="icon-a-juejincopy" />
          </nuxt-link>
        </ul>
      </div>
    </section>
    <!-- 自我介绍 -->
    <section data-wow-duration="1s" class="py-8 bg-white section-about wow animate__zoomIn">
      <div class="container px-3 mx-auto mt-4">
        <div>
          <div class="text-2xl text-center">关于我的</div>
        </div>
        <div class="mt-4 leading-8 text-center text-slate-500">
          <div class="">
            我叫小陈、你也可以称呼我为Gavin。<br />一位来自90后的前端程序员。<br />在一个偶然的机会下接触到前端这个职业、沉醉其中，直至...<br />喜欢安安静静的写代码、也喜欢痛痛快快的打游戏。
          </div>
          <div class="bike"></div>
          <div class="text">如果你也喜欢前端，<br />那么很高兴认识你~ 交个朋友吧！</div>
        </div>
      </div>
    </section>
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

    <div class="container px-3 mx-auto wow animate__zoomIn">
      <!-- <div class="">
        <BnSpecial title="友情链接" />
      </div> -->
      <BnLink title="友情链接"/>
    </div>
    <br />
  </div>
</template>

<script setup lang="ts">
// useHead({
//   title: 'My App'
// })
// if (process.browser) {
// 在这里根据环境引入wow.js

// }
// 首页轮播图
const { data: bannerPic }: any = await httpGet('/prod-api/platform/getImages', { imgTypeId: 22 })

const words = [
  { label: '日益努力', color: '#2db7f5' },
  { label: '日益努力', color: '#38B9CC' },
  { label: '日益努力', color: '#49BC8D' },
  { label: '日益努力', color: '#6bc30d' }
]
const words2 = [
  { label: 'Never', color: '#2db7f5' },
  { label: 'Never', color: '#38B9CC' },
  { label: 'Never', color: '#49BC8D' },
  { label: 'Never', color: '#6bc30d' }
]
const t = ref(0)
setInterval(() => {
  if (t.value >= 2) {
    t.value = 0
  } else {
    t.value++
  }
}, 3000)

onMounted(() => {
  console.log('Vue3生命周期：onMounted')
  // if (process.client) {
  // }
})

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

.home {
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
  .section-module {
    .section-module-img {
      // background-image: url(/_nuxt/img/logo.5f3e120.png);
      // background-position: 50%;
      // background-repeat: no-repeat;
      // background-size: 50%;
      border: 20px solid #c5c8ce;
      border-radius: 50%;
      flex: none;
      height: 200px;
      width: 200px;
    }
  }
  .section-part {
    background-attachment: fixed;
    background-image: url(@/static/images/bg1.jpg);
    background-position: 50%;
    background-size: cover;
    position: relative;
    &::before {
      backdrop-filter: blur(7px);
      background-color: rgba(0, 0, 0, 0.7);
      bottom: 0;
      content: '';
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  // 自我介绍
  @keyframes changes {
    0% {
      background-position: 0 0;
    }

    20% {
      background-position: -190px 0;
    }

    40% {
      background-position: -380px 0;
    }

    60% {
      background-position: 0 -100px;
    }

    80% {
      background-position: -190px -100px;
    }

    to {
      background-position: -380px -100px;
    }
  }
  .bike {
    animation: changes 0.5s step-start infinite;
    background: url(@/static/images/sprite-velo.png);
    height: 100px;
    margin: 50px auto;
    width: 190px;
  }
}
</style>
