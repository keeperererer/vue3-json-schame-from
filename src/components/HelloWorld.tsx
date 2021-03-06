import { defineComponent } from 'vue'
const PropsType = {
  msg: String,
} as const
export default defineComponent({
  props: PropsType,
  setup(props) {
    return () => {
      ;<div>{props.msg}</div>
    }
  },
})
