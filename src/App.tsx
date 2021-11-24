import React from 'react';
import Alert, { AlertType } from './packages/Alert'

function App() {

  return (
    <div className="App">
      <Alert type={AlertType.Danger} header={'123'} showClose={false} />
      <Alert type={AlertType.Warn} header={'456'}/>
      <Alert type={AlertType.Success} header={'456'} content={'这是更详细的描述'} />
      <Alert header={'456'}/>
    </div>
  );
}

export default App;
