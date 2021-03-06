import { DefineComponent, defineComponent, ExtractPropTypes, inject } from 'vue'
import { FiledPropsDefine, CommonFieldType } from '../types'
import { useVJSFContext } from '../context'
import { isObject } from '../utils'

// import SchemaItem from '../SchemaItem'
// console.log(SchemaItem)
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
  setup(props) {
    const context = useVJSFContext()
    const handleObjectFieldChange = (key: string, v: string) => {
      const value: any = isObject(props.value) ? props.value : {}
      if (v === undefined) {
        delete value[key]
      } else {
        value[key] = v
      }
      props.onChange(value)
    }
    console.log('context', context)
    return () => {
      const { schema, rootSchema, value } = props
      const { SchemaItem } = context
      const properties = schema.properties || {}
      const currentValue: any = isObject(value) ? value : {}
      return Object.keys(properties).map((k: string, index: number) => {
        return (
          <SchemaItem
            schema={properties[k]}
            rootSchema={rootSchema}
            value={currentValue[k]}
            onChange={(v: any) => handleObjectFieldChange(k, v)}
            key={index}
          />
        )
      })
    }
  },
})
