import React from 'react';
import Menu, { MenuItem } from './packages/Menu';

function App() {

  return (
    <div className="App">
      <Menu>
        <MenuItem index={1}>Link</MenuItem>
        <MenuItem className={'menu-item-test2'} index={2} disabled>Link2</MenuItem>
      </Menu>
    </div>
  );
}

export default App;
