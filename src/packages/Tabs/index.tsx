import { FC } from 'react'
import Tabs from "./Tabs";
import TabItem from "./TabItem";
import { ITabs, ITabItem } from './types'

type TransTabsType = FC<ITabs> & {
  TabItem: FC<ITabItem>
}

const TransTabs = Tabs as TransTabsType

TransTabs.TabItem = TabItem

export default TransTabs