<script setup lang="ts" name="Popup">
import { ref, computed } from 'vue'
import type { FormInstance } from 'element-plus'
import { useFormData } from '../../hooks/useFormData'
import { data } from '../../config'

const porps = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:visible'])

const dialogVisible = computed({
  get: () => porps.visible,
  set: () => emit('update:visible', false)
})

const formRef = ref<FormInstance>()

const { formData, formValue, submitHandler }: any = useFormData(data)
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const handleConfirm = () => {
  submitHandler()
  emit('update:visible', false)
}
</script>

<template>
  <el-dialog v-model="dialogVisible" width="500" align-center>
    <el-form :model="formValue" label-width="auto" style="max-width: 600px" ref="formRef">
      <template v-for="item in formData">
        <template v-if="item.type === 'input'">
          <el-form-item :label="item.label">
            <el-input v-model.number="formValue[item.key]" :placeholder="item.placeholder" />
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
              inline-prompt
              active-text="是"
              inactive-text="否"
              style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
            />
          </el-form-item>
        </template>
      </template>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button @click="resetForm(formRef)">重置</el-button>
        <el-button type="primary" @click="handleConfirm"> 确定 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss"></style>
