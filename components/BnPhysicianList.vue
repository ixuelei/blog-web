<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-25 10:10:50
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:32:14
 * @Description: 专家列模板
-->
<template>
  <div class="bn_physician_list">
    <!-- <el-row :gutter="20">
      <el-col :span="6" v-for="item in 10" :key="item">
        <NuxtLink :to="'./physician/' + item" class="li">
          <div class="info_box">
            <img src="https://upload.cyfyy.cn/2019/1219/thumb_90_120_20191219042715456.jpg" />
            <div class="info">
              <strong>王沛坚</strong>
              <dl>
                <dt>科室：</dt>
                <dd>
                  <u title="心血管内科">心血管内科</u>
                </dd>
              </dl>
              <dl>
                <dt>职称：</dt>
                <dd><u>教授/主任医师</u></dd>
              </dl>
            </div>
          </div>
          <p>
            <small>擅长：</small>
            擅长复杂冠脉病变介入治疗、左心耳封堵、经导管主动脉瓣置换术（TAVR）等；主导开展的肾上腺静脉采血主导开展的肾上腺静脉采血
          </p>
        </NuxtLink>
      </el-col>
    </el-row> -->
  </div>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#000'
  },
  width: {
    type: String,
    default: '2em'
  },
  height: {
    type: String,
    default: ''
  }
})

</script>
<style lang="scss" scoped>

</style>
