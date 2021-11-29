import React from 'react';
import Menu, { MenuItem, SubMenu } from './packages/Menu';
// import Tabs, { TabItem } from './packages/Tabs/Tabs'
import Icon from './packages/Icon'
import Alert from './packages/Alert';

function App() {

  const handleChange = (i: number): boolean => {
    return true
  }

  return (
    <div className="App">
      <Icon icon={'chevron-up'} size={'3x'} theme={'warning'} />

      {/* <Tabs defaultIndex={4} onChange={(i) => handleChange(i)}>
        <TabItem tab={'tabitem1'} index={2}>1</TabItem>
        <TabItem tab={'tabitem2'} disabled index={3}>2</TabItem>
        <TabItem tab={'tabitem3'} index={4}>3</TabItem>
      </Tabs> */}
      <Menu mode={'horizontal'}>
        <MenuItem index={0}>Menu1</MenuItem>
        <MenuItem index={1}>Menu2</MenuItem>
        <MenuItem index={2}>
          <SubMenu title="Menu3">
            <MenuItem index={3}>Menu3-1</MenuItem>
            <MenuItem index={4}>Menu3-2</MenuItem>
            <MenuItem index={5}>Menu3-3</MenuItem>
          </SubMenu>
        </MenuItem>
      </Menu>

      <hr />

      <Alert icon='times' title='title' content='content' />
    </div>
  );
}

export default App;
