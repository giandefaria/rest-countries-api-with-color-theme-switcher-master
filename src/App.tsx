import {Routes, Route} from 'react-router-dom' //instalo npm install react-router-dom. Importo essas duas funções para adicionar as rotas

import Main from './pages/main/main'; //pagina principal do react. Vou atrelar ao caminho '/' que significa principal
import { CountryInfo } from './pages/country-info/country-info'; //pagina com as informações de cada país. Vou atrelar ao caminho 'countryinfo'
import { setStyle } from './components/change-light-mode/change-light-mode';
import './pages/global-style/global-style.css'
import IndexLightOrDarkProvider from './context/light-or-dark';




function App() {
  setStyle();
  return (
    //adiciono as rotas dentro do routes. Indico o path (caminho no endereço html) e qual página (element) será executada
    //indico o valor variável dentro do path, adicionando dois ponto ':' antes do valor variável
    //busco esse valor na página utilizando o hook useParams. Ver arquivo country-info.tsx
    <IndexLightOrDarkProvider> 
    <div className="App"> 
      <Routes>
          <Route path="/" element={ <Main />} />
          <Route path="/countryinfo/:country" element={ <CountryInfo />} />
      </Routes> 
    </div>
    </IndexLightOrDarkProvider>
  );
}

export default App;
