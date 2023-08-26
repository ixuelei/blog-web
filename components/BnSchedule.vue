<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2022-06-24 10:54:53
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-10 10:32:39
 * @Description: 排班
-->

<template>
  <div class="BnWebSchedule">
    <slot name="title">
      <div class="title">
        <h2>门诊排班</h2>
        <p>
          门诊科室：<span>{{ name }}</span>
        </p>
      </div>
    </slot>
    <div class="scheduleTable">
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
            <th>日</th>
          </tr>
          <tr>
            <td>上午</td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/WZdPwbKg.html">金家贵</a>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/GRb4x1bB.html">王秋林</a>
            </td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/jneg56bw.html">李璐</a>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/BDbD9ndl.html">梁登攀</a>
            </td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/YqaQlenj.html">王沛坚</a>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/5xe771e7.html">蒲静</a>
            </td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/pnel5aKB.html">周鹏</a>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/jneg56bw.html">李璐</a>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/K9b67RdE.html">李文章</a>
            </td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/GRb4x1bB.html">王秋林</a>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/K9b67RdE.html">李文章</a>
            </td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/WZdPwbKg.html">金家贵</a>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>下午</td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/YqaQlenj.html">王沛坚</a>
            </td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/BDbD9ndl.html">梁登攀</a>
            </td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/GRb4x1bB.html">王秋林</a>
            </td>
            <td></td>
            <td>
              <a class="doctor" href="/departments_xxgnka0_mzpb/2022/5xe771e7.html">蒲静</a>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
 defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

