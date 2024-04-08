<template>
  <div class="container">
    <div class="head">
      <el-switch
        v-model="isDark"
        @change="toggleDark"
        :active-action-icon="Moon"
        :inactive-action-icon="Sunny"
        style="--el-switch-on-color: #2c2c2c; --el-switch-off-color: #f2f2f2"
      />
    </div>
  </div>
  <button @click="visible = true">点击开始</button>
  <Card>很爽</Card>
  <Popup v-model:visible="visible" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useDark, useToggle } from '@vueuse/core'
import confetti from 'canvas-confetti'
import Popup from './components/Popup/Popup.vue'
import Card from './components/Card/Card.vue'

const visible = ref(false)

const isDark = useDark()
const toggleDark = useToggle(isDark)

let end = 0
end = Date.now() + 2 * 1000
frame()

var colors = ['#bb0000', '#ffffff']

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  })
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  })

  if (Date.now() < end) {
    requestAnimationFrame(frame)
  }
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .head {
    width: 100%;
    height: 60px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
