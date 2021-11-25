import React from 'react';
// import Menu, { MenuItem, SubMenu } from './packages/Menu';
import Tabs, { TabItem } from './packages/Tabs/Tabs'

function App() {

  const handleChange = (i: number): boolean => {
    return true
  }

  return (
    <div className="App">
      <Tabs defaultIndex={4} onChange={(i) => handleChange(i)}>
        <TabItem tab={'tabitem1'} index={2}>1</TabItem>
        <TabItem tab={'tabitem2'} disabled index={3}>2</TabItem>
        <TabItem tab={'tabitem3'} index={4}>3</TabItem>
      </Tabs>
    </div>
  );
}

export default App;
