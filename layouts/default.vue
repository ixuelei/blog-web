<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-03-10 11:14:19
 * @LastEditors: Gavin xl@ixuelei.com
 * @LastEditTime: 2023-08-15 16:24:54
 * @Description:
-->
<template>
  <slot name="header">
    <BnHeader />
  </slot>
  <slot/>
  <slot name="footer">
    <bn-footer class="" />
  </slot>
  <bn-back-top />
</template>
