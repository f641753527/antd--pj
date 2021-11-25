import { Children, cloneElement, FunctionComponentElement, ReactNode } from 'react'
import { ITabItem } from '../Tabs'

export default function useRenderChildren(children: ReactNode) {
  return Children.map(children, child => {
    const ChildNode = child as FunctionComponentElement<ITabItem>
    if (ChildNode.type.displayName === 'TabItem') {
      const { index } = ChildNode.props
      return cloneElement(ChildNode, { index })
    } else {
      console.warn('Incorrect child element')
    }
  })
}
