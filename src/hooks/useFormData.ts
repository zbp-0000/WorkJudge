import { reactive } from 'vue'
import type { dataType, submit } from '../config'

export function useFormData(data: dataType[]): Object {
  const formData: dataType[] = reactive([])
  const formValue: any = reactive({})
  data.forEach((item) => formData.push(item))
  data.forEach((item) => (formValue[item.key] = item.value))

  const submitHandler = (): submit => {
    const {
      beOnDuty,
      dailyWage,
      workingHours,
      commuting,
      slackOff,
      education,
      surroundings,
      isomerism,
      simulRelation
    } = formValue
    const duty = beOnDuty ? 0.95 : 1
    const value =
      (dailyWage * (duty * surroundings * isomerism * simulRelation)) /
      (35 * (workingHours + commuting - 0.5 * slackOff) * education)

    /**
       * 低于0.8很惨
       * 0.8-1.5一般
         高于1.5很爽
         高于2.0爽到爆
       */
    const fixedVal = Number(value.toFixed(2))
    const easily =
      fixedVal < 0.8 ? '很惨' : fixedVal < 1.5 ? '一般' : fixedVal < 2.0 ? '很爽' : '爽到爆'
    return {
      value: fixedVal,
      easily: easily
    }
  }
  return {
    formData,
    formValue,
    submitHandler
  }
}
