import { FC, useState, createContext, Children, FunctionComponentElement } from "react";
import useClassNames from "../../hooks/useClassNames";
// import MenuItem from "./MenuItem";
import { MenuProps, IMenuContext, MenuItemProps } from "./types";

export * from './types';
export { default as MenuItem } from './MenuItem';

export const MenuContext = createContext<IMenuContext>({activeIndex: 0})

const Menu: FC<MenuProps> = (props) => {
  const { mode, className, style, children, defauleIndex, onSelect } = props

  const [activeIndex, changeActive] = useState(defauleIndex ?? 0)

  const handleSelect = (index: number) => {
    changeActive(index)
    onSelect && onSelect(index)
  }

  const ctx: IMenuContext = {
    activeIndex,
    onSelect: handleSelect,
  }

  const classNames = useClassNames({ compDesc: 'menu', nativeClasses: className, mode })

  function renderChildren() {
    return Children.map(children, (item) => {
      const MenuItemElement = item as FunctionComponentElement<MenuItemProps>
      if (MenuItemElement.type.displayName === 'MenuItem') {
        return item
      } else {
        console.warn('Menu 组件只能包含MenuItem 子组件')
      }
    })
  }

  return (
    <ul data-testid={'testid'} className={classNames} style={style}>
      <MenuContext.Provider value={ctx}>
        { renderChildren() }
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defauleIndex: 0,
  mode: 'horizontal'
}

export default Menu