// html
import alertDefault from './alert-default.html'
import alertInfo from './alert-info.html'
import alertSuccess from './alert-success.html'
import alertWarning from './alert-warning.html'
import alertError from './alert-error.html'
// docs
import mdx from './alert.mdx'

export default {
  title: 'Components/Alert',
  parameters: {
    docs: { page: mdx },
  },
}

export const Default = () => alertDefault
export const Information = () => alertInfo
export const Success = () => alertSuccess
export const Warning = () => alertWarning
export const Error = () => alertError
