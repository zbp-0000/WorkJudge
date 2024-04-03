<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="container">
    <div class="head">
      <el-button @click="toggleDark()">切换主题</el-button>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
