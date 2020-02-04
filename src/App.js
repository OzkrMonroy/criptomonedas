import React, { useState, useEffect } from 'react';
import axios from 'axios'

import imagen from './cryptomonedas.png'
import Formulario from './components/Form/Formulario'
import Spinner from './components/Spinner/Spinner'
import Resultado from './components/Resultado/Resultado'
// Styles
import { Container, Image, Heading } from './styles'

function App() {
  const [moneda, guardarMoneda] = useState('')
  const [criptomoneda, guardarCriptomoneda] = useState('')
  const [cargando, guardarCargando] = useState(false)
  const [resultado, guardarResultado] = useState({})

  useEffect(() => {

    const consultarApi = async () => {
      if(moneda === '' || criptomoneda === '') return
  
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
  
      const resultado = await axios.get(url)

      guardarCargando(true)
  
      setTimeout(() => {
        guardarCargando(false)
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda])
      }, 3000);
    }

    consultarApi()
  }, [moneda, criptomoneda])

  const component = (cargando) ? <Spinner/> : <Resultado resultado={resultado}/>

  return (
    <Container>
          <div>
            <Image src={imagen} alt="imagen criptomonedas" className="logotipo"/>
          </div>
          <div>
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
