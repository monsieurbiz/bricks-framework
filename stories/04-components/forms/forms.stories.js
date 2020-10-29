// html
import formControl from './form-control.html'
import formSelect from './form-select.html'
import formCheck from './form-check.html'
// docs
import mdx from './forms.mdx'

export default {
  title: 'Components/Forms',
  parameters: {
    docs: { page: mdx },
  },
}

export const Default = () => formControl
export const Select = () => formSelect
export const Check = () => formCheck
