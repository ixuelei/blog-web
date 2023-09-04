<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-12 15:50:54
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-06-24 11:26:56
 * @Description:
-->
<template>
  <div class="p-4">
    Counter: {{ counter }} age:{{ age }}
    <div class="mt-2">
      <!-- <div @click="counter++, age++">+</div>
      <div @click="counter--, age--">-</div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
const BnApp = useStore.BnApp()
const pUser = useStore.pUser()
const { counter } = storeToRefs(BnApp)
const { age } = storeToRefs(pUser)
</script>
