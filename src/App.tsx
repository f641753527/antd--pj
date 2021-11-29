import React, { ChangeEvent, useState } from 'react';
import Menu, { MenuItem, SubMenu } from './packages/Menu';
// import Tabs, { TabItem } from './packages/Tabs/Tabs'
import Icon from './packages/Icon'
import Alert from './packages/Alert';
import Input, { InputSize, AutoComplete } from './packages/Input';
import Button from './packages/Button';

const Cavs = ['LeBron james', 'Jr Smith', 'Kevin Love', 'Irving', 'Richard Jefferson', 'Kyle Korver', 'Iman Shumpert', 'Tristan Thompson', 'Channing Frye']

function App() {

  // const handleChange = (i: number): boolean => {
  //   return true
  // }

  const fetchSuggestion = (keyword: string) => {
    return Cavs.filter(item => {
      return item.includes(keyword)
    })
  }

  const [value, setValue] = useState('3')

  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setValue(e.target.value)
  }

  const handleSelect = (item: string) => {
    setValue(item)
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

      <hr />
      <Input size={InputSize.Large} suffix='123' prefix='456' value={value} onChange={handleChange} />
      <Button onClick={() => setValue('777')}>Submit</Button>
      <AutoComplete value={value} onChange={handleChange} onSelect={handleSelect}  fetchSuggestion={fetchSuggestion} />
    </div>
  );
}

export default App;
