import { FC } from "react";
import { MenuItemProps } from ".";
import useClassNames from "../../hooks/useClassNames";

const MenuItem: FC<MenuItemProps> = (props) => {
  const { className, style, disabled, index, children } = props

  const classNames = useClassNames({ compDesc: 'menu-item', nativeClasses: className, disabled })


  return (
    <li className={classNames} style={style} tabIndex={index}>
      { children }
    </li>
  )
}

export default MenuItem
