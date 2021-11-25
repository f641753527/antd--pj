import { FC, useState, createContext } from "react";
import useClassNames from "../../hooks/useClassNames";
// import MenuItem from "./MenuItem";
import { MenuProps, IMenuContext, MenuItemProps } from "./types";
import useRenderChildren from './useRenderChildren'

export * from './types';
export { default as MenuItem } from './MenuItem';
export { default as SubMenu } from './SubMenu';
export const MenuContext = createContext<IMenuContext>({activeIndex: 0})

const Menu: FC<MenuProps> = (props) => {
  const { mode, className, style, children, defauleIndex, onSelect } = props

  const [activeIndex, changeActive] = useState(defauleIndex ?? 0)

  const handleSelect = (index: number) => {
    changeActive(index)
    onSelect && onSelect(index)
  }

  const ctx: IMenuContext = {
    mode,
    activeIndex,
    onSelect: handleSelect,
  }

  const classNames = useClassNames({ compDesc: 'menu', nativeClasses: className, mode })

  const childNodes = useRenderChildren<MenuItemProps>(children, ['MenuItem', 'SubMenu'])

  return (
    <ul data-testid={'testid'} className={classNames} style={style}>
      <MenuContext.Provider value={ctx}>
        { childNodes }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defauleIndex: 0,
  mode: 'horizontal'
}

export default Menu