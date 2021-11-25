import { ReactNode } from "react";

export type onTabChange = (index: number) => boolean

export interface ITabs {
  defaultIndex: number
  onChange?: onTabChange
  className?: string
}

export interface ITabItem {
  index: number
  disabled?: boolean
  tab: ReactNode
  children: ReactNode
}

export interface IActiveContext {
  activeIndex: number
  onTabChange: (index: number) => void
}
