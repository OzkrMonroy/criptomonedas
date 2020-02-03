import React, { useState, useEffect } from 'react';
import axios from 'axios'

import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'
import Spinner from './components/Spinner/Spinner'
import Resultado from './components/Resultado'
// Styles
import { Container, Image, Heading } from './styles'

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
    <Container>
          <div className="one-half column">
            <Image src={imagen} alt="imagen criptomonedas" className="logotipo"/>
          </div>
          <div className="one-half column">
            <Heading>Cotiza criptomonedas al instante</Heading>
            <Formulario
              guardarMoneda={guardarMoneda}
              guardarCriptomoneda={guardarCriptomoneda}
            />
            {component}
          </div>
    </Container>
  );
}

export default App;
