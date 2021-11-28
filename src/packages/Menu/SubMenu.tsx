import { FC, useState, MouseEvent, useContext } from "react";
import { CSSTransition } from 'react-transition-group';
import { SubMenuProps } from ".";
import useClassNames from "../../hooks/useClassNames";
import useRenderChildren from './useRenderChildren';
import { MenuContext } from '.'
import Icon from "../Icon";

const SubMenu: FC<SubMenuProps> = ({ children, className, title }) => {

  const [opened, toggleOpen] = useState(false)

  const subMenuItemclassNames = useClassNames({ compDesc: 'submenu-item menu-item', opened, nativeClasses: className  })
  const subMenuClassManes = useClassNames({ compDesc: 'submenu', opened  })

  const { mode } = useContext(MenuContext)

  const childNodes = useRenderChildren<SubMenuProps>(children, ['MenuItem'])

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    toggleOpen(!opened)
  }

  const handleHover = (e: MouseEvent, opened: boolean) => {
    e.preventDefault()
    toggleOpen(opened)
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
      <div className={'submenu-title'} { ...handleClickEvents }>
        { title }
        <Icon icon='chevron-up' />
      </div>
      <CSSTransition appear unmountOnExit in={opened} timeout={1200} classNames='submenu-transition'>
        <ul className={subMenuClassManes}>
          { childNodes }
        </ul>
      </CSSTransition>
    </div>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu
