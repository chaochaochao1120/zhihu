<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{'is-invalid': inputRef.error}"
      :value="inputRef.value"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    >
    <div class="invalid-feedback" v-if="inputRef.error">{{ inputRef.message }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
// 判断邮箱的正则
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface RuleProp {
  type: 'required' | 'email',
  message: string
}

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  setup (props, context) {
    const inputRef = reactive({
      value: props.modelValue || '',
      error: false,
      message: ''
    })

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.value = targetValue
      context.emit('update:modelValue', targetValue)
    }

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every((item) => {
          let passed = true
          inputRef.message = item.message
          switch (item.type) {
            case 'required':
              passed = inputRef.value.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.value)
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }

    return {
      inputRef,
      validateInput,
      updateValue
    }
  }
})
</script>

<style scoped>
. {
}
</style>
