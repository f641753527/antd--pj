import { FC, Children, cloneElement, FunctionComponentElement } from 'react'
import {  Option, ISelectOptionListProps, ISelectOptionProps } from '.'


const OptionList: FC<ISelectOptionListProps> = ({  rednerOption, children }) => {

  return (
    <ul className='option--list'>
      { Children.map(children, child => {
        const OptionItem = child as FunctionComponentElement<ISelectOptionProps>
        return rednerOption ?
          cloneElement<ISelectOptionProps>(OptionItem, { label: rednerOption(OptionItem.props) }) :
          child
      }) }
    </ul>
  )
}

export default OptionList
