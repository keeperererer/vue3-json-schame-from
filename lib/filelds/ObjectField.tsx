import { defineComponent } from 'vue'
import { FiledPropsDefine } from '../type'

const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'number',
    },
  },
}

export default defineComponent({
  name: 'ObjectField',
  props: FiledPropsDefine,
  setup() {
    return () => {
      return <div>
        Object
      </div>
    }
  },
})
