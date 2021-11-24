import { FC, useContext } from "react";
import { MenuItemProps, MenuContext } from ".";
import useClassNames from "../../hooks/useClassNames";

const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, style, disabled, index, children } = props

  const { activeIndex, onSelect } = useContext(MenuContext)


  const classNames = useClassNames({ compDesc: 'menu-item', nativeClasses: className, disabled, active: activeIndex === index })

  const handleClick = () => {
    if (!disabled && activeIndex !== index) {
      onSelect && onSelect(index)
    }
  }



  return (
    <li className={classNames} style={style} onClick={ () => handleClick() }>
      { children }
    </li>
  )
}

MenuItem.displayName = 'MenuItem'

export default MenuItem
