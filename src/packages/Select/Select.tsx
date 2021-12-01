import { createContext, FC, useEffect, useRef, useState } from "react"
import { ISelectProps, SelectContextType } from "./index"
import useClassNames from "../../hooks/useClassNames"
import Icon from '../Icon'
import Input, { InputSize } from "../Input"
import OptionList from './OptionList'
import useClickOutside from "../../hooks/useClickOutside"

export const SelectContext = createContext<SelectContextType>({
  currentValue: '',
  onSelect: (item: string) => {}
})


const Select: FC<ISelectProps> = ({ value, size, onSelect, children, rednerOption, ...restProps }) => {

  const selectRef = useRef<HTMLDivElement>(null)

  const [showOptions, setShowOptions] = useState(false)

  useClickOutside(selectRef, () => {
    setShowOptions(false)
  })


  const classNames = useClassNames({ compDesc: 'select', size, active: showOptions })

  const [selectValue, setSelectValue] = useState('')
  useEffect(() => {
    setSelectValue(value)
  }, [value])


  const handleOnSelect = (item: string) => {
    setSelectValue(item)
    onSelect(item)
    setShowOptions(false)
  }

  const store: SelectContextType = {
    currentValue: selectValue,
    onSelect: handleOnSelect
  }

  return (
    <SelectContext.Provider value={store}>
      <div className={classNames} ref={selectRef}>
        <div className='select-input' onClick={() => setShowOptions(!showOptions) }>
          <Input
            value={selectValue}
            size={size}
            disabled
            suffix={<Icon icon='chevron-up' />}
            {...restProps}
          />
        </div>
        {
          showOptions &&
          <OptionList rednerOption={rednerOption}>
          { children }
          </OptionList>
        }
      </div>
    </SelectContext.Provider>
    
  )
}

Select.defaultProps = {
  size: InputSize.Large
}

export default Select
