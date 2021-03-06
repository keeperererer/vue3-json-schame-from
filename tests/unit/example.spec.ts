import { mount } from '@vue/test-utils'
import { defineComponent, h } from 'vue'
import { NumberField } from '../../lib'
// import HelloWorld from '@/components/HelloWorld'
import TestComponent from './utils/TestComponent'

describe('HelloWorld.tsx', () => {
  it('should render corret number field', async () => {
    let value = ''
    const wrapper = mount(TestComponent, {
      props: {
        schema: {
          type: 'number',
        },
        value: value,
        onChange: (v: any) => {
          value = v as string
        },
      },
    })

    const numberFiled = wrapper.findComponent(NumberField)
    expect(numberFiled.exists()).toBeTruthy()
    // await numberFiled.props('onChange')('123')
    const input = numberFiled.find('input')
    input.element.value = '123'
    input.trigger('input')
    expect(value).toBe(123)
  })
})
