<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-10 11:14:19
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-09-05 14:23:55
 * @Description:
-->
<template>
  <slot name="header">
    <BnHeader />
    <div class=" w-full h-[64px]"></div>
  </slot>
  <slot />
  <slot name="footer">
    <BnFooter class="" />
  </slot>
  <bn-back-top />
</template>
