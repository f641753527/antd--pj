import { Children, FunctionComponentElement, ReactNode } from 'react'
import { ITabItem } from '../Tabs'

export default function useRenderChildren(children: ReactNode, activeIndex: number) {
  const childNodes = Children.toArray(children)
    .map(child => child as FunctionComponentElement<ITabItem>)
    .filter(child => child.type.displayName === 'TabItem')

  if (!childNodes || !childNodes.length) return null

  const activeNode = childNodes.find(v => v.props.index === activeIndex)

  return activeNode ? activeNode.props.children : null
}
