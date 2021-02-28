import { defineComponent, PropType } from 'vue'
import NumberField from './filelds/NumberField'
// import StringField from './filelds/StringField'
import StringField from './filelds/StringField.vue'
import { Schema, SchemaTypes, FiledPropsDefine } from './type'
export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props
      const type = schema.type
      let Component: any
      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        default: {
          console.log('warn')
        }
      }
      return <Component {...props} />
    }
  },
})
