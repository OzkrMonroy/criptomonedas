import React, { useState, useEffect } from 'react';
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'
import Spinner from './components/Spinner/Spinner'
import Resultado from './components/Resultado'
import axios from 'axios'

function App() {
  const [moneda, guardarMoneda] = useState('')
  const [criptomoneda, guardarCriptomoneda] = useState('')
  const [cargando, guardarCargando] = useState(false)
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {
    // console.log(moneda, criptomoneda)
    consultarApi()
  }, [moneda, criptomoneda])

  // Consulta la api
  const consultarApi = async () => {
    if(moneda === '' || criptomoneda === '') return

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

    const resultado = await axios.get(url)

    console.log(resultado.data.DISPLAY[criptomoneda][moneda])
    guardarCargando(true)

    setTimeout(() => {
      guardarCargando(false)
      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
    }, 3000);
  }

  const component = (cargando) ? <Spinner/> : <Resultado resultado={resultado}/>

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <img src={imagen} alt="imagen criptomonedas" className="logotipo"/>
          </div>
          <div className="one-half column">
            <h1>Cotiza criptomonedas al instante</h1>
            <Formulario
              guardarMoneda={guardarMoneda}
              guardarCriptomoneda={guardarCriptomoneda}
            />
            {component}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
