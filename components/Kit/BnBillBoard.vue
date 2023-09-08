<template>
  <div
    :class="['billboard', isHomePage ? 'billboard-homepage' : '', isPage ? 'billboard-page' : '']"
    :style="wrapStyles"
  >
    <div :style="posterStyles" class="billboard-poster"></div>
    <div class="billboard-box">
      <div class="billboard-inner">
        <h1 v-if="title" class="billboard-inner-slogan">{{ title }}</h1>
        <p v-if="titleSub" class="billboard-inner-slogan-sub">{{ titleSub }}</p>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import first from '@/static/images/bg/banner_111.gif'
const props = defineProps({
  title: {
    type: String,
    default: () => ''
  },
  titleSub: {
    type: String,
    default: () => ''
  },
  height: {
    type: [Number, String],
    default: '250px'
  },
  posterBlue: {
    type: [Number, String],
    default: '15px'
  },
  poster: {
    type: String,
    default: () => ''
  },
  sticky: Boolean,
  isHomePage: Boolean,
  isPage: Boolean
})
const bgSrc = computed(() => {
  return props.poster || first
})
const wrapStyles: any = computed(() => {
  return {
    position: props.sticky ? 'sticky' : 'relative',
    height: typeof props.height === 'number' ? `${props.height}px` : props.height
  }
})
const posterStyles: any = computed(() => {
  return {
    backgroundImage: `url(${bgSrc.value})`,
    filter:
      typeof props.height === 'number'
        ? `blur(${props.posterBlue}px)`
        : `blur(${props.posterBlue})`,
    top: typeof props.height === 'number' ? `-${props.posterBlue}px` : `-${props.posterBlue}`,
    bottom: typeof props.height === 'number' ? `-${props.posterBlue}px` : `-${props.posterBlue}`,
    left: typeof props.height === 'number' ? `-${props.posterBlue}px` : `-${props.posterBlue}`,
    right: typeof props.height === 'number' ? `-${props.posterBlue}px` : `-${props.posterBlue}`
  }
})
// function getDate() {
//   const now = new Date()
//   return `${now.getMonth()}${now.getDate()}`
// }
</script>

<style lang="scss" scoped>
// @billboardHeight: 250px;
.billboard {
  position: relative;
  top: 0;
  width: 100%;
  height: 250px;
  overflow: hidden;
  &-poster {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-size: cover;
    background-repeat: no-repeat;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0);
    }
  }
  &-homepage {
    // padding-top: @heightHeader;
    .billboard-poster {
      background-position: center bottom;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }

  &-box {
    position: relative;
    display: inline-table;
    width: 100%;
    height: 100%;
    padding: 20px;
  }

  &-inner {
    width: 100%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }
  &-inner-slogan {
    font-size: 28px;
    font-weight: normal;
    margin-bottom: 5px;
    color: #fff;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
  &-inner-slogan-sub {
    display: inline-block;
    color: #fff;
    font-size: 14px;
    padding: 2px 8px;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }
  &-page {
    .billboard-inner-slogan {
      padding: 60px 30px 0;
      font-size: 36px;
      font-weight: normal;
      margin-bottom: 5px;
      color: #fff;
      text-shadow: 0 4px 8px rgba(7, 17, 27, 0.4);
      letter-spacing: 5px;
      user-select: none;
    }
    .billboard-inner-slogan-sub {
      // font-family: Roboto;
      font-size: 28px;
      color: #fff;
      background: transparent;
      text-shadow: 0 4px 8px rgba(7, 17, 27, 0.4);
      letter-spacing: 5px;
      user-select: none;
    }
  }
}
</style>
