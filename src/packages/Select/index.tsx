import { FC } from 'react'
import Select from './Select'
import Option from './Option'

import { ISelectProps, ISelectOptionProps } from './types'

export { default as Option } from './Option'

export * from './types'

type SelectType = FC<ISelectProps> & {
  Option: FC<ISelectOptionProps>
}

const TransSelect = Select as SelectType

TransSelect.Option = Option

export default TransSelect
