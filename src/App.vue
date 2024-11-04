<template>
  <div class="container">
    <div class="title">这B班上得值不值测算版</div>
    <Card>
      <div class="easily-wrapper">{{ work.easily }}</div>
    </Card>
    <div class="coefficient">
      <div>
        <span>{{ work.value }}</span>
        <div class="coefficient-info">
          <p>系数</p>
          <el-tooltip
            placement="top-start"
          >
            <template #content>低于0.8很惨<br />0.8-1.5一般<br />高于1.5很爽<br />高于2.0爽到爆</template>
            <el-icon><QuestionFilled /></el-icon>
          </el-tooltip>
        </div>
      </div>
    </div>
    <button class="custom-btn btn-login" @click="visible = true">点击开始</button>
  </div>

  <Popup v-model:visible="visible" @updateEasily="updateEasily" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ElLoading } from 'element-plus'
import Popup from './components/Popup/Popup.vue'
import Card from './components/Card/Card.vue'
import type { submit } from './config'
import { renderConfetti } from './utils/my-confetti'
import { QuestionFilled } from '@element-plus/icons-vue'

const visible = ref(false)

const work = ref<submit>({
  easily: 'Hello',
  value: 0
})

const updateEasily = (val: submit) => {
  work.value = val
  renderConfetti()
}

onMounted(() => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  const font = new FontFace(
    'QianTuBiFengShouXieTi',
    'url(http://bopeng.top/assets/QianTuBiFengShouXieTi-2.ttf)'
  )

  // 把字体添加到 document.font（FontFaceSet）中
  document.fonts.add(font)

  // 加载字体
  font.load()

  // 等待到所有的字体都加载完毕
  document.fonts.ready.then(() => {
    loading.close()
  })
})
</script>

<style scoped lang="scss">
@import './assets/style/index.scss';
</style>
