// html
import boxDefault from './box-default.html'
import boxBordered from './box-bordered.html'
// docs
import mdx from './box.mdx'

export default {
  title: 'Objects/Box',
  parameters: {
    docs: { page: mdx },
  },
}

export const Default = () => boxDefault
export const Bordered = () => boxBordered
