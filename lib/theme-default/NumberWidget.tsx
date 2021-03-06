import { defineComponent } from 'vue'
import { CommonWidgetDefine, CommonWidgetPropsDefine } from '../types'

const NumberWidget: CommonWidgetDefine = defineComponent({
  props: CommonWidgetPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      console.log(e)
      props.onChange(e.target.value)
    }
    return () => (
      <input type="number" value={props.value as any} onInput={handleChange} />
    )
  },
})

export default NumberWidget
