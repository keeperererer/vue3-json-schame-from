import { computed, defineComponent, PropType } from 'vue'
import NumberField from './filelds/NumberField'
// import NumberField from './filelds/NumberField.vue'
import StringField from './filelds/StringField'
// import StringField from './filelds/StringField.vue'
import ObjectField from './filelds/ObjectField'
import { Schema, SchemaTypes, FiledPropsDefine } from './type'

import { retrieveSchema } from './utils'
export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(props) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = props
      return retrieveSchema(schema, rootSchema, value)
    })
    return () => {
      const { schema, rootSchema, value } = props
      const retrievedSchema = retrievedSchemaRef.value
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
        case SchemaTypes.OBJECT: {
          Component = ObjectField
          break
        }
        default: {
          console.log('warn')
        }
      }
      return <Component {...props} schema={retrievedSchema} />
    }
  },
})
