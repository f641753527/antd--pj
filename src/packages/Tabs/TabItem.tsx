import { FunctionComponent, useContext } from 'react'
import useClassNames from '../../hooks/useClassNames'
import { ITabItem } from './types'
import { ActiveContext } from './Tabs'

export * from './types'

const TabItem: FunctionComponent<ITabItem> = ({ tab, index, disabled }) => {

  const { activeIndex, onTabChange } = useContext(ActiveContext)


  const classNames = useClassNames({ compDesc: 'tab-item', active: index === activeIndex, disabled })

  const handleClick = (index: number) => {
    if (disabled || index === activeIndex) return
    onTabChange(index)
  }



  return (
    <div className={classNames} onClick={() => handleClick(index)}>
      { tab }
    </div>
  )
}

TabItem.displayName = 'TabItem'

export default TabItem
