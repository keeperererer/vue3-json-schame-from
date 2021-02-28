<template>
  <input type="text" :value="value" @input="handleChange" />
</template>
<script lang="ts" setup="props">
import { ref } from 'vue'
import { FiledPropsDefine, Schema } from '../type'

export default {
  props: FiledPropsDefine,
}
declare const props: {
  value: string
  onChange: (v: string) => void
  schema: Schema
}
export const handleChange = (e: any) => {
  console.log(e)
  props.onChange(e.target.value)
}
</script>
