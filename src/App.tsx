import React from 'react';
import logo from './logo.svg';

import {Routes, Route} from 'react-router-dom' //instalo npm install react-router-dom. Importo essas duas funções para adicionar as rotas

import Main from './components/main/main'; //pagina principal do react. Vou atrelar ao caminho '/' que significa principal
import { CountryInfo } from './components/country-info/country-info'; //pagina com as informações de cada país. Vou atrelar ao caminho 'countryinfo'




function App() {
  return (
    //adiciono as rotas dentro do routes. Indico o path (caminho no endereço html) e qual página (element) será executada
    //indico o valor variável dentro do path, adicionando dois ponto ':' antes do valor variável
    //busco esse valor na página utilizando o hook useParams. Ver arquivo country-info.tsx
    <div className="App"> 
      <Routes>
          <Route path="/" element={ <Main />} />
          <Route path="/countryinfo/:country" element={ <CountryInfo />} />
      </Routes> 
    </div>
  );
}

export default App;
