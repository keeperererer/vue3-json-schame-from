import { computed, defineComponent, PropType } from 'vue'
import NumberField from './filelds/NumberField'
import StringField from './filelds/StringField'
import ObjectField from './filelds/ObjectField'
import ArrayField from './filelds/ArrayField'
import { Schema, SchemaTypes, FiledPropsDefine } from './types'

import { retrieveSchema } from './utils'
export default defineComponent({
  name: 'SchemaItem',
  props: FiledPropsDefine,
  setup(porps) {
    const retrievedSchemaRef = computed(() => {
      const { schema, rootSchema, value } = porps
      return retrieveSchema(schema, rootSchema, value)
    })
    return () => {
      const { schema, rootSchema, value } = porps
      const retrievedSchema = retrievedSchemaRef.value
      const type = schema.type
      let ComPonent: any
      switch (type) {
        case SchemaTypes.STRING: {
          ComPonent = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          ComPonent = NumberField
          break
        }
        case SchemaTypes.OBJECT: {
          ComPonent = ObjectField
          break
        }
        case SchemaTypes.ARRAY: {
          ComPonent = ArrayField
          break
        }
        default: {
          console.warn(`{type} is not supported`)
        }
      }
      return <ComPonent {...porps} schema={retrievedSchema} />
    }
  },
})
