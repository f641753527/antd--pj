import { FC } from "react";
import useClassNames from "../../hooks/useClassNames";
// import MenuItem from "./MenuItem";
import { MenuProps } from "./types";

export * from './types';
export { default as MenuItem } from './MenuItem';

const Menu: FC<MenuProps> = (props) => {
  const { mode, className, style, children } = props

  const classNames = useClassNames({ compDesc: 'menu', nativeClasses: className, mode })

  return (
    <ul className={classNames} style={style}>
      { children }
    </ul>
  )
}

Menu.defaultProps = {
  defauleIndex: 0,
  mode: 'horizontal'
}

export default Menu