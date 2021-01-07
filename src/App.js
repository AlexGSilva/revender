import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../src/Routes/routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes />
      </div>  
    </BrowserRouter>
  );
}

export default App;