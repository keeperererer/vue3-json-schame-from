import { defineComponent } from 'vue'

import { CommonWidgetNames, FiledPropsDefine } from '../types'
import { getWidget } from '../theme'
export default defineComponent({
  name: 'StringFeild',
  props: FiledPropsDefine,
  setup(props) {
    const textWidgetRef = getWidget(CommonWidgetNames.TextWidget)
    const hanldeChange = (v: string) => {
      props.onChange(v)
    }
    return () => {
      const { schema, rootSchema, ...rest } = props
      // 组件首字母大写
      const TextWidget = textWidgetRef.value
      return <TextWidget {...rest} onChange={hanldeChange} />
    }
  },
})
