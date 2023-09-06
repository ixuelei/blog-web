<template>
  <div class=" relative bg-[linear-gradient(90deg,#2db7f5,#6bc30d)] p-6">
    <input
      v-model="inputVal"
      :placeholder="placeholder"
      class="w-full p-2 text-sm rounded-full"
      type="text"
      autocomplete="off"
      @keyup.enter="handleEnter"
    />
    <button class="absolute right-10 top-8" @click="handleSearch">
      <BnIcon width="20px" name="icon-search" />
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['on-search'])
defineProps({
  placeholder: {
      type: String,
      default: '输入您想要搜索的内容！'
    }
})
const inputVal = ref(null)


    function handleEnter() {
      handleSearch()
    }
    function handleSearch() {
      emit('on-search', inputVal.value)
    }
    // function clear() {
    //   inputVal.value = null
    // }
</script>
