import { CSSProperties, ReactElement } from 'react'

export type MenuMode = 'vertical' | 'horizontal'

export interface MenuProps {
  mode?: MenuMode
  className?: string
  style?: CSSProperties
  defauleIndex?: number
  children: ReactElement<MenuItemProps>[]
  onSelect?: (index: number) => void
}

export interface MenuItemProps {
  index?: number
  className?: string
  style?: CSSProperties
  children: ReactElement | string
  disabled?: boolean
}
