import React from 'react';
import * as Style from './AppStyle';

function App() {
  return (
    <div>
      <Style.Title>Welcome to React App</Style.Title>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;
