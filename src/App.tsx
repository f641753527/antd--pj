import React from 'react';
import Menu, { MenuItem } from './packages/Menu';

function App() {

  return (
    <div className="App">
      <Menu defauleIndex={2} mode={'horizontal'}>
        <MenuItem index={1}>Link</MenuItem>
        <MenuItem className={'menu-item-test2'} index={2} disabled>Link2</MenuItem>
        <MenuItem index={3}>Link3</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
