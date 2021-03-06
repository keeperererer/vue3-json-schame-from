import { defineComponent } from 'vue'
import { CommonWidgetDefine, CommonWidgetPropsDefine } from '../types'

const TextWidget: CommonWidgetDefine = defineComponent({
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange(e.target.value)
    }
    return () => (
      <input type="text" value={props.value as any} onInput={handleChange} />
    )
  },
})

export default TextWidget
