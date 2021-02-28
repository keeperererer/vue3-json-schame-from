// or ESM/TypeScript import
// import Ajv from 'ajv'
// Node.js require:
const Ajv = require('ajv').default
const localize = require('ajv-i18n')

const schema = {
  type: 'string',
  minLength: 10,
}
 
const ajv = new Ajv() // options can be passed, e.g. {allErrors: true}
const validate = ajv.compile(schema)
const valid = validate('zt')
if (!valid) console.log(validate.errors)
