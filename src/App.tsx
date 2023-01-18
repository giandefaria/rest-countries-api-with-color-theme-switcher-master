import React from 'react';
import logo from './logo.svg';
import Main from './components/main/main';

import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={ <Main />} />
      </Routes> 
    </div>
  );
}

export default App;
