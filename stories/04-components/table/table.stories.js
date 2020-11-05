// html
import TableDefault from './table-default.html'
import TableBordered from './table-bordered.html'
import TableBorderless from './table-borderless.html'
import TableStriped from './table-striped.html'
import TableResponsive from './table-responsive.html'
// docs
import mdx from './table.mdx'

export default {
  title: 'Components/Table',
  parameters: {
    docs: { page: mdx },
  },
}

export const Default = () => TableDefault
export const Bordered = () => TableBordered
export const Borderless = () => TableBorderless
export const Striped = () => TableStriped
export const Responsive = () => TableResponsive
