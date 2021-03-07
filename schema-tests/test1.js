// or ESM/TypeScript import
// import Ajv from 'ajv'
// Node.js require:
const Ajv = require('ajv')
const schema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      format: 'test',
      // minLength: 10,
    },
    age: {
      type: 'number',
    },
    pets: {
      type: 'array',
      items: {
        type: 'string',
      },
    },
    isWorker: {
      type: 'boolean',
    },
  },
  required: ['name', 'age'],
}
const data = {
  name: 'haha',
  age: 18,
  // pets: ['mimi', 'mama'],
  isWorker: true,
}
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
ajv.addFormat('test', (data) => {
  console.log(data, '________')
  return data === 'haha'
})
const validate = ajv.compile(schema)
const valid = validate(data)
if (!valid) console.log(validate.errors)
