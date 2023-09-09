<!--
 * @Author: Gavin xl@ckcck.com
 * @Date: 2023-09-09 15:33:37
 * @LastEditors: Gavin xl@ckcck.com
 * @LastEditTime: 2023-09-09 17:04:12
 * @Description:
-->
<template>
  <div
    :style="styles"
    :class="['markdown-body', { bg: isBgShow }]"
    class=""
    v-html="articleHtml"
  ></div>
</template>

<script setup lang="ts">
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'

// import 'github-markdown-css/github-markdown.css'
// import 'highlight.js/styles/atom-one-dark.css'
import 'github-markdown-css/github-markdown-light.css'
import 'highlight.js/styles/atom-one-dark.css'
const props = defineProps({
  content: {
    type: String,
    default: ''
  },
  padding: {
    type: [String, Number],
    default: '10px'
  },
  isBgShow: {
    type: Boolean,
    default: false
  }
})
const marked = new Marked(
  markedHighlight({
    langPrefix: 'Gavin language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return hljs.highlight(code, { language }).value
    }
  })
)

const articleHtml = computed(() => {
  return marked.parse(props.content) || ''
})

const styles = computed(() => {
  return {
    padding: typeof props.padding === 'number' ? `${props.padding}px` : props.padding
  }
})
</script>
