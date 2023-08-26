<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-05-03 10:49:19
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-06-21 14:25:28
 * @Description: 科室详情
-->
<template>
  <div class="department">
    <Bn-top-img title="美容整形烧伤外科" />
    <div class="info">
      <div class="title">
        <p>科室介绍</p>
      </div>
      <div class="content">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美容整形烧伤外科始建于1966年，经过五十多年的发展，已成为集医疗、教学、科研一体的四川省医学重点学科，也是国家级住院医师规范化培训基地。时至2021年，美容整形外科学团队现有医护人员23人，其中主任医师1人，副主任医师1人，副教授1人，硕士生导师2人，国际伤口治疗师3人，心理咨询师1人，硕士12人。编制床位36张，实际开放床位48张
          。
        </p>
        <br />
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;诊疗特色：慢性难愈性创面的综合诊治：如糖尿病足、淤血性溃疡、压疮等。体表良恶性肿瘤根治性切除及皮肤软组织修复。手足创伤修复，断指再植。各类美容整形手术：如瘢痕畸形整形修复，急诊颜面部美容缝合，眼综合美容（如重睑术、眼袋切除、开眼角、泪沟填充等），鼻综合美容（如隆鼻术、鼻小柱延长、鼻翼缩小等），胸部美容（隆胸术、巨乳缩小术、乳头内陷矫正术等），面部年轻化（如肉毒素、玻尿酸、水光针、线雕等），躯体塑形（如吸脂，隆臀，腹部综合瘦身，马甲线成形等）。大面积特重烧伤患者救治，MEEK皮肤移植（我科为MEEK皮肤移植技术中国中心成都分中心）。
        </p>
      </div>
    </div>
    <!-- 专家介绍 -->
    <div class="expertsBox">
      <div class="experts">
        <!-- 专家介绍 -->
        <Bn-key-discipline>
          <template #title>
            <div class="title">
              <h2>科室专家</h2>
              <p class="more">更多专家</p>
            </div>
          </template>
        </Bn-key-discipline>
      </div>
    </div>
    <!-- 科室动态 -->
    <div class="news">
      <Bn-news-2>
        <template #title>
          <div class="title">
            <h2>科室动态</h2>
            <p class="more">更多内容</p>
          </div>
        </template>
      </Bn-news-2>
    </div>
    <!-- 排班 -->
    <div class="onDuty">
      <div class="box">
        <Bn-schedule name="心血管内科" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>

