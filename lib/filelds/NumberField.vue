<template>
  <input type="number" :value="value" @input="handleChange" />
</template>
<script lang="ts" setup="props">
import { FiledPropsDefine, Schema } from '../type'

export default {
  props: FiledPropsDefine,
}
declare const props: {
  value: any
  onChange: (v: any) => void
  schema: Schema
}
export const handleChange = (e: any) => {
  console.log(e)
  const value = e.target.value
  const number = Number(value)
  if (Number.isNaN(number)) {
    props.onChange(undefined)
  } else {
    props.onChange(number)
  }
}
</script>
