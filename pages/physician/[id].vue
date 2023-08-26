<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-05-03 10:49:19
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-06-21 14:09:20
 * @Description: 专家详情
-->
<template>
  <div class="details">
    <BnTopImg>
      <template #title>
        <div class="title">
          <div class="img">
            <img src="https://upload.cyfyy.cn/2019/1219/20191219042715456.jpg" alt="" />
          </div>
          <div class="info">
            <h2>王沛坚</h2>
            <p>教授/主任医师</p>
            <p>所在科室：<NuxtLink to="#">心血管内科</NuxtLink></p>
          </div>
        </div>
      </template>
    </BnTopImg>
    <div class="more_info">
      <div class="info">
        <p><span>专业方向：</span>心血管内科</p>
        <p><span>导师类别：</span>硕士生导师</p>
        <p>
          <span>擅长：</span>
          擅长复杂冠脉病变介入治疗、左心耳封堵、经导管主动脉瓣置换术（TAVR）等；主导开展的肾上腺静脉采血（AVS）、选择性肾上腺动脉栓塞（SAAE）、肾动脉去交感消融（RDN）等高血压微创诊疗处于国内先进水平。
        </p>
      </div>
    </div>
    <article class="profile">
      <h2 class="title">个人简介</h2>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;教授/主任医师/博士后/硕导，现任成都医学院第一附属医院临床医学系主任兼心血管内科主任，四川省老年医学临床医学研究中心副主任，第五届全国“白求恩式好医生”，四川省杰出青年基金获得者，四川省学术与技术带头人（后备人选），四川省卫健委学术与技术带头人（后备人选）。擅长复杂冠脉病变介入治疗、左心耳封堵、经导管主动脉瓣置换术（TAVR）等；主导开展的肾上腺静脉采血（AVS）、选择性肾上腺动脉栓塞（SAAE）、肾动脉去交感消融（RDN）等高血压微创诊疗处于国内先进水平。担任中国医师协会高血压专业委员会第三届委员会高血压相关代谢工作组委员、中国优生优育协会心血管结构与代谢专业委员会常务委员、中国心胸血管麻醉学会基层心血管病分会全国委员、四川省老年医学会心血管专业委员会常务委员、四川省康复医学会第三届心血管病专业委员会常务委员、四川省国际医学交流促进会心律专业委员会常务委员、四川省老年医学学会动脉硬化专业委员会副主任委员兼秘书。主持国家自然科学基金青年基金及面上项目、四川省杰出青年基金、四川省科技厅、四川省教育厅等各类科研项目30余项。主持及参与国内临床研究10余项，发表SCI论文50余篇，累计影响因子超过200，被引用2000余次，H指数17。任多种SCI及国内期刊审稿人。获四川省科技进步奖、四川省医学科技奖、军队科技进步奖二等奖以上奖励4项，国家级专利5项，出版专著3部。
      </p>
    </article>

    <div class="expertsBox">
      <div class="experts">
        <!-- 专家介绍 -->
        <Bn-key-discipline>
          <template #title>
            <div class="title">
              <h2>同科室医生</h2>
              <p class="more">更多专家</p>
            </div>
          </template>
        </Bn-key-discipline>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
