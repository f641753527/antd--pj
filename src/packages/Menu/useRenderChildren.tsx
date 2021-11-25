import { ReactNode, Children, FunctionComponentElement } from "react";

function renderChildren<T>(children: ReactNode, surpportedNames = ['MenuItem']) {
  return Children.map(children, (child) => {
    const MenuItemElement = child as FunctionComponentElement<T>
    if (MenuItemElement.type.displayName && surpportedNames.includes(MenuItemElement.type.displayName)) {
      return child
    } else {
      console.warn('SubMenu Can Only Contain MenuItem Child')
    }
  })
}

export default renderChildren;
