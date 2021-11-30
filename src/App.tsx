import React, { ChangeEvent, useState } from 'react';
import Menu, { MenuItem, SubMenu } from './packages/Menu';
// import Tabs, { TabItem } from './packages/Tabs/Tabs'
import Icon from './packages/Icon'
import Alert from './packages/Alert';
import Input, { InputSize, AutoComplete, SelectItemType } from './packages/Input';
import Button from './packages/Button';

interface Player {
  value: string
  number?: number
  age?: number
}

interface GithubUser {
  value: string
  repos_url?: string
}

const Cavs: SelectItemType<Player>[] = [
  { number: 6, value: 'LeBron james', age: 37 },
  { number: 5, value: 'Jr Smith', age: 33 },
  { number: 0, value: 'Kevin Love', age: 31 },
  { number: 2, value: 'Irving', age: 27 },
  { number: 33, value: 'Richard Jefferson', age: 38 },
  { number: 26, value: 'Kyle Korver', age: 40 },
  { number: 4, value: 'Iman Shumpert', age: 33 },
  { number: 13, value: 'Tristan Thompson', age: 30 },
  { number: 8, value: 'Channing Frye', age: 40 },
]
function App() {

  // const handleChange = (i: number): boolean => {
  //   return true
  // }

  // const fetchSuggestion: (ky: string) => SelectItemType<Player>[] = (keyword) => {
  //   return Cavs.filter(item => {
  //     return item.value.includes(keyword)
  //   })
  // }
  const fetchSuggestion: (keyword: string) => Promise<SelectItemType<GithubUser>[]> = (keyword) => {
    return fetch(`https://api.github.com/search/users?q=${keyword}`).then(res => res.json()).then(res => {
      console.log(res.items)
      return res.items.map((v: any) => ({ value: v.login, ...v }))
    }).catch(() => ([]))
  }

  const [value, setValue] = useState('3')

  const handleChange: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
    setValue(e.target.value)
  }

  const handleSelect: (item: SelectItemType) => void = (item) => {
    setValue(item.value)
  }

  const renderItem = (item: SelectItemType<GithubUser>) => {
    // const GItem = item as SelectItemType<Player>
    return (
      <>
        <h6>Name: {item.value}</h6>
        <p>Number: {item.repos_url}</p>
      </>
    )
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
      <AutoComplete
        value={value}
        onChange={handleChange}
        onSelect={handleSelect}
        fetchSuggestion={fetchSuggestion}
        renderItem={renderItem}
      />
    </div>
  );
}

export default App;
