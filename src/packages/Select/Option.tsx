import React, { FC, useContext } from "react"
import { ISelectOptionProps } from "./index"
import useClassNames from "../../hooks/useClassNames"
import { SelectContext } from './Select'

const Option: FC<ISelectOptionProps> = ({ value, label, disabled, children }) => {

  const { onSelect, currentValue } = useContext(SelectContext)

  const classNames = useClassNames({ compDesc: 'option--item', disabled, active: currentValue === value })

  return (
    <li className={classNames} onClick={() => onSelect(value)}>{ label ?? children }</li>
  )
}

export default Option
