<template>
  <div class="container">
    <div class="title">这B班上得值不值测算版</div>
    <Card>
      <div class="easily-wrapper">{{ work.easily }}</div>
    </Card>
    <div class="coefficient">
      <div>
        <span>{{ work.value }}</span>
        <p>系数</p>
      </div>
    </div>
    <button class="custom-btn btn-login" @click="visible = true">点击开始</button>
  </div>

  <Popup v-model:visible="visible" @updateEasily="updateEasily" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Popup from './components/Popup/Popup.vue'
import Card from './components/Card/Card.vue'
import type { submit } from './config'

import { renderConfetti } from './utils/my-confetti'

const visible = ref(false)

const work = ref<submit>({
  easily: 'Hello',
  value: 0
})

const updateEasily = (val: submit) => {
  work.value = val
  renderConfetti()
}
</script>

<style scoped lang="scss">
@import './assets/style/index.scss';
</style>
