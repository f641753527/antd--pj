import { FunctionComponent, useState, createContext } from 'react'
import useClassNames from '../../hooks/useClassNames'
import { ITabs, IActiveContext } from './types'
import useRenderChildren from './hooks/useRenderChildren'
import useActiveChildComp from './hooks/useActiveChildComp'

export * from './types'
export { default as TabItem } from './TabItem'

export const ActiveContext = createContext<IActiveContext>({ activeIndex: 0,  onTabChange: (i: number) => {} })


const Tabs: FunctionComponent<ITabs> = ({ children, defaultIndex = 0, className ,  onChange }) => {
  const [activeIndex, setActive] = useState(defaultIndex)
  const classMames = useClassNames({ compDesc: 'tabs', nativeClasses: className })

  const childNodes = useRenderChildren(children)

  const activeComp = useActiveChildComp(children, activeIndex)

  const handleTabClick = (index: number) => {
    if (onChange) {
      const res: boolean = onChange(index)
      if (!res) return
    }
    setActive(index)
  }


  const activeState: IActiveContext = {
    activeIndex,
    onTabChange: handleTabClick
  }

  return (
    <ActiveContext.Provider value={ activeState }>
      <div className={ classMames }>
        <div className={'tabs--header'}>
          { childNodes }
        </div>
        <div className={'tabs--body'}>
          {activeComp}
        </div>
      </div>
    </ActiveContext.Provider>
    
  )
}

export default Tabs
