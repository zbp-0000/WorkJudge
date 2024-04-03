<template>
  <div class="container">
    <div class="head">
      <el-button @click="toggleDark()">切换主题</el-button>
    </div>

    <div class="xx">工作性价比：</div>

    <el-form :model="formValue" label-width="auto" style="max-width: 600px" ref="formRef">
      <template v-for="item in formData">
        <template v-if="item.type === 'input'">
          <el-form-item :label="item.label">
            <el-input v-model="formValue[item.key]" :placeholder="item.placeholder" />
          </el-form-item>
        </template>
        <template v-if="item.type === 'select'">
          <el-form-item :label="item.label">
            <el-select
              v-model="formValue[item.key]"
              :placeholder="item.placeholder"
              size="large"
              style="width: 240px"
            >
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :label="option.label"
                :value="option.value"
              />
            </el-select>
          </el-form-item>
        </template>
        <template v-if="item.type === 'switch'">
          <el-form-item :label="item.label">
            <el-switch
              v-model="formValue[item.key]"
              class="ml-2"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            />
          </el-form-item>
        </template>
      </template>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="resetForm(formRef)">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useFormData } from './useFormData'
import { data } from './config'
import type { FormInstance } from 'element-plus'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const formRef = ref<FormInstance>()

const { formData, formValue, submitHandler }: any = useFormData(data)
const onSubmit = () => {
  const value = submitHandler()
  console.log('submit', value)
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
