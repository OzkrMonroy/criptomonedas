import React from 'react';
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src={imagen} alt="imagen criptomonedas" className="logotipo"/>
          </div>
          <div className="one-half column">
            <h1>Cotiza criptomonedas al instante</h1>
            <Formulario/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
