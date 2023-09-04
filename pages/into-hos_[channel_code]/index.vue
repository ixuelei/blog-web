<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-05-29 09:14:45
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-16 14:54:08
 * @Description:医院简介
-->
<template>
  <div class="bg-[#f3f4f6]">
    <BnTopImg :images="[37,38]" />
    <!-- 二级导航  -->
    <BnSubnav class="max-md:hidden" :nav-data="navAll[0]" active="xxgk" />
    <!-- listBox style start -->
    <div class="bg-[url('@/static/images/static_page/into_hos/hospital.jpg')] bg-cover bg-center">
      <div class="container flex items-center justify-end px-2 mx-auto">
        <ul
          class="my-20 max-w-xl text-white max-sm:bg-[#33333350] max-sm:p-4 max-md:bg-[#33333350] max-md:p-4"
        >
          <div class="">
            <h1 class="text-2xl py-2.5">
              <strong class="text-2xl text-white">成都医学院第一附属医院</strong>
              <small class="pl-2 text-sm">国家公立三级甲等综合医院</small>
            </h1>
            <p class="text-base leading-8 indent-[2em]">
              成都医学院
              第一附属医院坐落于成都市北部，毗邻新都区宝光寺。医院始建于1948年5月，是四川省卫生健康委员会直属的一所集医疗、教学、科研、急救、预防、保健和康复于一体的三级甲等综合医院。医院前身为中国人民解放军第47医院、第三军医大学成都军医学院附属医院，2004年9月随成都医学院由军队整体移交四川省。先后荣获“中华全国总工会抗震救灾工人先锋号”、“四川省卫生系统先进集体”、“四川省脱贫攻坚先进集体”及“四川省援外医疗工作先进集体”等荣誉称号。
            </p>
          </div>
        </ul>
      </div>
    </div>
    <div class="container px-3 mx-auto">
      <p class="text-base leading-8 indent-[2em] mt-4">
        医院占地面积148亩,开放床位1520张，设有一线科室41个，拥有uRT-linac
        506c医用直线加速器、高强度聚焦超声消融肿瘤治疗系统、3.0T超高端科研型磁共振扫描仪等先进设备，设备总价值约4亿元。医疗服务主要覆盖新都区、彭州市、青白江区、金堂县等成都市东北部县（区），以及德阳市部分地区。
      </p>
      <p class="text-base leading-8 indent-[2em] mt-4">
        医院现有职工总人数
        1578人，专业技术职称人员1429人，其中高级职称专家216人，中级职称360人，硕博士436人。享受国务院特殊津贴专家4人，省及省卫健委学术技术带头人16人、后备人选30人，全国卫生计生系统先进工作者1人，“天府名医“2人、省卫生健康首席专家1人，领军人才7人，省卫健委有突出贡献中青年专家3人。
      </p>
      <div class="container mx-auto overflow-auto">
        <div class="flex justify-around px-2 py-6 my-4 text-center min-w-max bg-slate-200">
          <li class="mr-2">
            <p><strong class="text-2xl text-primary">1800</strong><sub class="ml-2 text-stone-700">张</sub></p>
            <p class="text-stone-700">开放床位</p>
          </li>
          <li class="mr-2">
            <p><strong class="text-2xl text-primary">42</strong><sub class="ml-2 text-stone-700">个</sub></p>
            <p class="text-stone-700">一线科室</p>
          </li>
          <li class="mr-2">
            <p><strong class="text-2xl text-primary">1563</strong><sub class="ml-2 text-stone-700">人</sub></p>
            <p class="text-stone-700">医院现有职工</p>
          </li>
          <li class="mr-2">
            <p><strong class="text-2xl text-primary">3</strong><sub class="ml-2 text-stone-700">人</sub></p>
            <p class="text-stone-700">国务院特殊津贴</p>
          </li>
          <li class="mr-2">
            <p><strong class="text-2xl text-primary">208</strong><sub class="ml-2 text-stone-700">人</sub></p>
            <p class="text-stone-700">卫生高级职称</p>
          </li>
          <li>
            <p><strong class="text-2xl text-primary">406</strong><sub class="ml-2 text-stone-700">人</sub></p>
            <p class="text-stone-700">博士后、博士、硕士</p>
          </li>
        </div>
      </div>
    </div>
    <div class="bg-[url('@/static/images/static_page/into_hos/exprtsbg.jpg')] bg-auto">
      <div class="container px-3 mx-auto my-4">
        <div class="py-8 text-white">
          <h2 class="text-2xl py-2.5 text-center">学科建设与技术水平</h2>
          <p class="text-base leading-8 indent-[2em] mt-2">
            坚持创建“院有品牌、科有特色、人有专长”的发展格局，以学科建设为载体，推动医院医疗技术水平和服务能力提升。医院现有首批四川省省级临床重点专科3个（麻醉科、肿瘤科、妇产科），14个省医学重点学科（消化内科学、医学影像学、烧伤外科学、呼吸内科学、心血管内科学、临床检验诊断学、肾脏病学、内分泌代谢病学、神经病学、风湿病学与自体免疫病学、胃肠外科学、骨科学、儿科学、麻醉学），1个省中医药管理局重点专科（肛肠科），3个省高校重点实验室（消化系肿瘤与微循环、衰老与血管稳态、老年呼吸病），康复医学科为四川省康复医学会疼痛与瘫痪康复中心。医院形成了大面积烧创伤的救治、CAR-T细胞治疗终末期肿瘤、呼吸疾病介入治疗、呼吸危重症救治等一批具有区域影响力的技术项目，其中呼吸疾病介入治疗技术达到全国先进水平；风湿免疫科、消化内科、骨科实力居全省前列。
          </p>
        </div>
        <div class="py-4">
          <BnDepartment />
        </div>
      </div>
    </div>
    <!-- 教育教学 -->
    <div class="bg-[url('@/static/images/static_page/into_hos/edubg.jpg')] bg-auto">
      <div class="container p-3 mx-auto">
        <h2 class="py-4 text-2xl text-center">教育教学</h2>
        <div class="flex flex-col items-center xl:flex-row">
          <div class="pr-4 min-w-6/10">
            <img src="../../static/images/demo/education.png" alt="" />
          </div>
          <div class="flex-1">
            <p class="indent-[2em] leading-10">
              医院承担了研究生、本科生、规培生及继续教育等教学任务,是临床医学专业硕士学位授权点、临床医学专业科学学位授权点；医院开设有临床医学、医学影像学、麻醉学、儿科学、康复治疗学、中医学、临床医学（农村免费订单定向）、中医学（农村免费订单定向）8个本科专业，其中6个专业为一本招生，临床医学专业是国家级一流本科专业建设点、省级应用示范型专业，临床医学、医学影像是省级一流本科专业建设点;医院共有国家级住院医师规范化培训基地23个，其中国家级重点专业基地3个；是国家级临床医学实验教学示范中心、国家级全科医生临床培养基地，和国家级临床药师培训基地。
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 科研水平 -->
    <div class="bg-[#208195] relative text-white">
      <h2 class="absolute w-full py-4 text-2xl text-center">科研水平</h2>
      <div class="container grid grid-cols-3 px-3 mx-auto max-sm:grid-cols-1 max-md:grid-cols-1">
        <div class="bg-[#299fb9] px-8 flex flex-col items-center py-14">
          <BnIcon class="mb-4" name="bn_icon_university-full" color="#ffffff50" />
          <p class="text-base indent-[2em]">
            近年来，医院获批各级科研课题777项，其中国家自然科学基金项目28项，省部级、厅局级项目358项。发表科技学术论文2084篇，其中SCI收录191篇。获中华医学会、教育部、四川省人民政府等科技进步和成果奖39项。主编参编出版专著89部；授权专利39项；成功举办138项国家级及省级继续医学教育项目。
          </p>
        </div>
        <div class="bg-[#208195] px-8 flex flex-col items-center py-14">
          <BnIcon class="mb-4" name="bn_icon_jiangbei" color="#ffffff50" />

          <p class="text-base indent-[2em]">
            医院强化科研管理制度建设，鼓励科技成果转化，不断完善科研激励机制。近年来，医院获批各级科研课题897项，其中国家自然科学基金项目31项，省部级、厅局级项目358项，获中华医学会、教育部、四川省人民政府等科技进步和成果奖46项；发表科技学术论文1671篇，其中被SCI收录258篇；主编参编出版专著148部；授权专利76项。
          </p>
        </div>
        <div class="bg-[#2b879a] px-8 flex flex-col items-center py-14">
          <BnIcon class="mb-4" name="bn_icon_edu-s" color="#ffffff50" />
          <p class="text-base indent-[2em]">
            主编参编出版教材、专著67部；获批专利35项；获批109项国家级及省级继续医学教育项目。
          </p>
        </div>
      </div>
    </div>
    <!-- 新院区建设 -->
    <div class="container p-3 mx-auto">
      <div class="text-center">
        <h2 class="py-4 text-2xl">新院区建设</h2>
        <img src="../../static/images/demo/map.png" alt="" />
        <p class="text-left indent-[2em]">
          医院立足三甲医院和大学附属医院功能定位，按照建设“成北区域医疗中心”的发展总思路，开展新院区建设。新院区建设地址位于成都市新都区鸿运大道和绕城大道交汇处西侧地块，占地面积共计约273亩。以建设现代化、智慧化、园林式的区域医疗中心为目标，打造医教研综合医学平台，新院区规划总建筑面积约57.9万平方米，主体医疗建筑面积将近23.7万平方米，规划编制床位2000张。
        </p>
        <br />
        <p class="text-left indent-[2em]">
          新院区整体完工并投入使用后，将促进成都北部地区整体医疗实力和服务效率进一步提升，在医联体建设、学科共建、设备共享、慢病管理体系建设、老年疾病诊疗、医养结合、联合科研等方面发挥引领作用，充分彰显医疗卫生、教育教学两方面公益性，更好地服务区域经济社会发展。
        </p>
        <h2 class="py-4 text-2xl">社会公益职责</h2>
        <p class="text-left indent-[2em]">
          认真贯彻落实党中央、国务院、四川省委省政府关于脱贫攻坚重大决策部署，根据四川省卫健委安排，切实组织实施精准帮扶凉山州普格县螺髻山镇德育村、凉山彝族自治州盐源县前所乡、马尔康市脚木足乡蒲市口村和广元市昭化区太公镇白头村，定点帮扶凉山州盐源县盐塘镇西沟村。以党建为抓手，产业帮扶为核心，卫生指导和教育支持为重点，共计选派扶贫干部6人、驻村干部2人，其中5人多次获得省级、市级荣誉奖项和称号。转制以来，我院累计选派323名专家对口支援马尔康市人民医院、松潘县人民医院、雅安市名山区人民医院等26家贫困地区和服务薄弱地区医疗机构，通过理论讲座、诊疗示范、手术示教、教学查房、案例分析，免费接收受援机构工作人员来院进修等方式，精准传帮带，切实帮助受援医院提高医疗技术水平和服务能力。
        </p>
        <br />
        <p class="text-left indent-[2em]">
          医院历年来在处置重大突发性公共卫生事件，在援外医疗，在“5.12”汶川大地震、“4.20”芦山地震的抗震救灾、伤员转运、伤员救治等方面始终以高度的使命感和责任感不惧危险、冲锋在前，发挥着三级甲等综合医院、教学医院的重要作用，受到广大人民群众、政府和卫生行政部门的好评。新冠肺炎疫情爆发以来，我院累计选派33名医务人员驰援湖北、北京、新疆、云南等地，援鄂医疗队荣获四川省抗击新冠疫情先进集体、10人荣获四川省抗击新冠肺炎疫情先进个人及优秀党员、四川省先进工作者等称号。
        </p>
        <br />
        <p class="text-left indent-[2em]">
          健康所系、性命相托。全体成医附院人继承和发扬着军队优良传统，秉承“崇道尚德
          自强不息”的医院精神，尊崇“精诚为术
          仁爱为医”的医院院训，坚持以病人中心，努力为广大群众提供更加优质的医疗服务。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const BnApp = useStore.BnApp()
const { navAll } = storeToRefs(BnApp)
</script>
