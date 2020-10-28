// html
import buttonDefault from './button-default.html'
import buttonReversed from './button-reversed.html'
import buttonLink from './button-link.html'
import buttonLoading from './button-loading.html'
import buttonDisabled from './button-disabled.html'
// docs
import mdx from './button.mdx'

export default {
  title: 'Components/Button',
  parameters: {
    docs: { page: mdx },
  },
}

export const Default = () => buttonDefault
export const Reversed = () => buttonReversed
export const Link = () => buttonLink
export const Loading = () => buttonLoading
export const Disabled = () => buttonDisabled
