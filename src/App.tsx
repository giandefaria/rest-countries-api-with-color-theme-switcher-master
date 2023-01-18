import React from 'react';
import logo from './logo.svg';

import {Routes, Route} from 'react-router-dom'

import Main from './components/main/main';
import CountryInfo from './components/country-info/country-info';




function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={ <Main />} />
          <Route path='/' element={ <CountryInfo />} />
      </Routes> 
    </div>
  );
}

export default App;
