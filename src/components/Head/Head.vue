<script setup lang="ts" name="Head">
const data = [
  {
    title: 'Github',
    href: 'https://github.com/yu-yu-yu-yu/vue-work-meas',
    icon: 'github',
    // 事件处理
    handle: () => {
      console.log('跳转github')
    }
  },
  {
    title: 'Github',
    href: 'https://github.com/yu-yu-yu-yu/vue-work-meas',
    icon: 'github',
    // 事件处理
    handle: () => {
      console.log('跳转github')
    }
  }
]
</script>

<template>
  <div class="head-container">
    <el-row :gutter="20">
      <el-col v-for="item in data" :span="6"> {{ item.title }}</el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.head-container {
  width: 100%;
  height: 130px;
  padding: 34px 0;
}
</style>
