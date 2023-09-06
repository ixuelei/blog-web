<template>
  <div :ref="($event) => setRef($event)" :style="{ width: width || '' }" class="rotating-text">
    <p v-for="(word, i) in words" :key="`${word}-${i}`" class="rotating-text-word">
      <span
        v-for="(letter, j) in word.label || word"
        :key="`${letter}-${j}`"
        :style="{ color: word.color || '' }"
        class="rotating-text-letter"
        >{{ letter }}</span
      >
    </p>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  words: {
    type: Array<any>,
    default() {
      return []
    }
  },
  interval: {
    type: Number,
    default: 4000
  },
  width: {
    type: String,
    default: '2em'
  },
  color: {
    type: String,
    default: '#fff'
  }
})
const timer = ref()
const divRef = ref()
const setRef = (e: any) => {
  divRef.value = e
}
const currentWordIndex = ref(0)
const maxWordIndex = ref(0)
const wordsDom = ref()

function start() {
  timer.value = setTimeout(() => {
    rotateText()
    start()
  }, props.interval)
}
function rotateText() {
  const currentWord = wordsDom.value[currentWordIndex.value]
  const nextWord =
    currentWordIndex.value === maxWordIndex.value
      ? wordsDom.value[0]
      : wordsDom.value[currentWordIndex.value + 1]
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter: any, i) => {
    setTimeout(() => {
      letter.className = 'rotating-text-letter out'
    }, i * 80)
  })
  // reveal and rotate in letters of next word
  nextWord.style.opacity = '1'
  Array.from(nextWord.children).forEach((letter: any, i) => {
    letter.className = 'rotating-text-letter behind'
    setTimeout(() => {
      letter.className = 'rotating-text-letter in'
    }, 340 + i * 80)
  })
  currentWordIndex.value =
    currentWordIndex.value === maxWordIndex.value ? 0 : currentWordIndex.value + 1
}
onMounted(() => {
  if (process.client) {
    console.log(divRef.value, 'jsetId')
    maxWordIndex.value = props.words.length - 1
    wordsDom.value = divRef.value.querySelectorAll('.rotating-text-word')
    start()
    rotateText()
  }
})
// 卸载
onBeforeUnmount(() => {
  timer.value && clearTimeout(timer.value)
})
</script>
<style lang="scss">
.rotating-text {
  display: inline-flex;
  margin: 0;
  vertical-align: top;
  justify-content: center;

  &-word {
    position: absolute;
    display: flex;
    opacity: 0;
  }
  &-letter {
    // transform-origin: center center 25px;
    font-weight: bold;
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  }
  &-letter.out {
    transform: rotateX(90deg);
    transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
  }
  &-letter.in {
    transition: 0.38s ease;
  }
  &-letter.behind {
    transform: rotateX(-90deg);
  }
}
</style>
