<!--
 * @Author: Gavin xl@ixuelei.com
 * @Date: 2023-09-06 10:57:43
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-07 17:58:23
 * @Description:
-->
<template>
  <div
    class="inline-flex items-center px-2 py-1 border"
    :class="[theme, shapeClass]"
    :style="{ fontSize }"
  >
    <div class="flex items-center">
      <BnIcon
        v-if="icon"
        class="mr-1 relative top-[-1px]"
        :width="{ small: '12px', large: '16px', default: '18px' }[size]"
        :name="icon"
      ></BnIcon>
      <slot></slot>
    </div>
    <div></div>
    <BnIcon
      v-if="closeable"
      :width="fontSize"
      class="ml-1 cursor-pointer"
      name="icon-close"
      @click="handleClose"
    >
    </BnIcon>
  </div>
</template>

<script setup lang="ts">
import { oneOf } from '@/assets/js/tools'
const emit = defineEmits(['on-search', 'on-close'])
const props = defineProps({
  /**
   * 类型
   * 参数-'gradient', 'default', 'primary', 'info', 'success', 'warning', 'error'
   */
  theme: {
    type: String,
    validator(value) {
      return oneOf(value, ['gradient', 'default', 'primary', 'info', 'success', 'warning', 'error'])
    },
    default: 'default'
  },
  /**
   * icon 图标
   *
   */
  icon: {
    type: String,
    default: ''
  },
  /**
   * 圆角
   * 参数-'rect', 'radius', 'circle'
   */
  shape: {
    type: String,
    validator(value) {
      return oneOf(value, ['rect', 'radius', 'circle'])
    },
    default: 'radius'
  },
  /**
   * 大小
   * 参数-'small', 'large', 'default'
   */
  size: {
    type: String,
    validator(value) {
      return oneOf(value, ['small', 'large', 'default'])
    },
    default: 'default'
  },
  type: {
    type: String,
    validator(value) {
      return oneOf(value, ['border', 'dashed', 'default'])
    },
    default: 'default'
  },
  /**
   * 是否显示删除按钮
   */
  closeable: {
    type: Boolean,
    default: false
  }
})
console.log(oneOf)
// 圆角
const shapeClass = computed(() => {
  let cl = ''
  switch (props.shape) {
    case 'rect':
      cl = 'rounded-none'
      break
    case 'circle':
      cl = 'rounded-full'
      break

    default:
      cl = 'rounded'
      break
  }
  return cl
})
// 大小
const fontSize = computed(() => {
  let cl = ''
  switch (props.size) {
    case 'small':
      cl = '12px'
      break
    case 'large':
      cl = '14px'
      break

    default:
      cl = '16px'
      break
  }
  return cl
})
// const prefixCls = 'z-tag'
// const classes = computed(() => {
//   return [
//     `${prefixCls}`,
//     `${prefixCls}-${props.theme}`,
//     {
//       [`${prefixCls}-closeable`]: props.closeable,
//       [`${prefixCls}-${props.shape}`]: !!props.shape,
//       [`${prefixCls}-${props.type}`]: props.type !== 'default',
//       [`${prefixCls}-${props.size}`]: props.size !== 'default'
//     }
//   ]
// })
function handleClose(event: any) {
  emit('on-close', event)
}
</script>

<style lang="scss" scoped>
// 'gradient', 'default', 'primary', 'info', 'success', 'warning', 'error'
.gradient {
  color: $colorPrimary;
  border-color: $colorPrimary;
  background-color: transparent;
  border-image-source: linear-gradient(90deg, $colorAssist, $colorPrimary);
  border-image-slice: 1;
  &:hover {
    background-color: transparent;
    border-color: $colorPrimaryLight;
  }
}
// .default{

// }
.primary {
  color: #fff;
  border-color: $colorPrimary;
  background-color: $colorPrimary;
  &:hover {
    background-color: $colorPrimaryLight;
    border-color: $colorPrimaryLight;
  }
}
.info {
  color: #fff;
  border-color: $colorInfo;
  background-color: $colorInfo;
  &:hover {
    background-color: $colorInfoLight;
    border-color: $colorInfoLight;
  }
}
.success {
  color: #fff;
  border-color: $colorSuccess;
  background-color: $colorSuccess;
  &:hover {
    background-color: $colorSuccessLight;
    border-color: $colorSuccessLight;
  }
}
.warning {
  color: #fff;
  border-color: $colorWarning;
  background-color: $colorWarning;
  &:hover {
    background-color: $colorWarningLight;
    border-color: $colorWarningLight;
  }
}
.error {
  color: #fff;
  border-color: $colorError;
  background-color: $colorError;
  &:hover {
    background-color: $colorErrorLight;
    border-color: $colorErrorLight;
  }
}
</style>
