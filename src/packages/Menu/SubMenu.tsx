import { FC, useState, MouseEvent, useContext } from "react";
import { SubMenuProps } from ".";
import useClassNames from "../../hooks/useClassNames";
import useRenderChildren from './useRenderChildren';
import { MenuContext } from '.'

const SubMenu: FC<SubMenuProps> = ({ children, className, title }) => {

  const [opened, toggleOpen] = useState(false)

  const subMenuItemclassNames = useClassNames({ compDesc: 'submenu-item menu-item', nativeClasses: className  })
  const subMenuClassManes = useClassNames({ compDesc: 'submenu', opened  })

  const { mode } = useContext(MenuContext)

  const childNodes = useRenderChildren<SubMenuProps>(children, ['MenuItem'])

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    toggleOpen(!opened)
  }

  const handleHover = (e: MouseEvent, opened: boolean) => {
    e.preventDefault()
    let timer: any = null
    timer = setTimeout(() => {
      clearTimeout(timer)
      toggleOpen(opened)
    }, 300)
  }

  const handleHoverEvents = mode === 'horizontal' ? {
    onMouseEnter: (e: MouseEvent) => handleHover(e, true),
    onMouseLeave: (e: MouseEvent) => handleHover(e, false),
  } : {}

  const handleClickEvents = mode === 'vertical' ? {
    onClick: (e: MouseEvent) => handleClick(e)
  } : {}

  return (
    <div className={subMenuItemclassNames}  { ...handleHoverEvents }>
      <div className={'submenu-title'} { ...handleClickEvents }>{ title }</div>
      <ul className={subMenuClassManes}>
        { childNodes }
      </ul>
    </div>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
