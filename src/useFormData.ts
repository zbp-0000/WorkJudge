import { reactive } from 'vue'
import type { dataType } from './config'

export function useFormData(data: dataType[]): Object {
  const formData: dataType[] = reactive([])
  const formValue: any = reactive({})
  data.forEach((item) => formData.push(item))
  data.forEach((item) => (formValue[item.key] = item.value))

  const submitHandler = () => {
    console.log(formValue)
    const {
      dailyWage,
      workingHours,
      commuting,
      slackOff,
      education,
      surroundings,
      isomerism,
      simulRelation
    } = formValue
    const value =
      (dailyWage * (1 * surroundings * isomerism * simulRelation)) /
      (35 * (workingHours + commuting - 0.5 * slackOff) * education)
    return value
  }
  return {
    formData,
    formValue,
    submitHandler
  }
}
