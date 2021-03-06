import { defineComponent, reactive, Ref, ref, watchEffect } from 'vue'
import MonacoEditor from './components/monacoEditor'
import { createUseStyles } from 'vue-jss'
import demos from './demos'
import SchemaForm, { ThemeProvider } from '../lib'
import themeDefualt from '../lib/theme-default'
// TODO: 在lib中export
type Schema = any
type UISchema = any

function toJson(data: any) {
  return JSON.stringify(data, null, 2)
}
const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '1200px',
    margin: '0 auto',
  },
  menu: {
    marginBottom: 20,
  },
  code: {
    width: 700,
    flexShrink: 0,
  },
  codePanel: {
    minHeight: 400,
    marginBottom: 20,
  },
  uiAndValue: {
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      width: '46%',
    },
  },
  content: {
    display: 'flex',
  },
  form: {
    padding: '0 20px',
    flexGrow: 1,
  },
  menuButton: {
    appearance: 'none',
    borderWidth: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'inline-block',
    padding: 15,
    borderRadius: 5,
    '&:hover': {
      background: '#efefef',
    },
  },
  menuSelected: {
    background: '#337ab7',
    color: '#fff',
    '&:hover': {
      background: '#337ab7',
    },
  },
})
const obj = { name: 'jaymo' }
const A = defineComponent({
  setup() {
    // debugger
    const state = reactive(obj)
    console.log(state)
    return () => {
      debugger
      ;<div>{state.name}</div>
    }
  },
})
export default defineComponent({
  setup() {
    return () => [<A />]
  },
})
