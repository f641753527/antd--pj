import { CSSProperties } from 'react'

export type MenuMode = 'vertical' | 'horizontal'

type onSelect = (index: number) => void

export interface MenuProps {
  mode?: MenuMode
  className?: string
  style?: CSSProperties
  defauleIndex?: number
  onSelect?: onSelect
}

export interface MenuItemProps {
  index: number
  className?: string
  style?: CSSProperties
  disabled?: boolean
}

export interface SubMenuProps {
  className?: string
  title: string
}

export interface IMenuContext {
  mode?: MenuMode
  activeIndex: number
  onSelect?: onSelect
}
