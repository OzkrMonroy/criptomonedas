import React, { useState, useEffect } from 'react';
import Criptomoneda from './Criptomoneda'
import Error from './Error'
import axios from 'axios'

function Formulario({guardarMoneda, guardarCriptomoneda}) {
  useEffect(() => {
    consultarApi()
  }, [])

  const consultarApi = async () => {
    const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD'

    const respuesta = await axios.get(url)

    console.log(respuesta.data.Data);

    guardarCriptomonedas(respuesta.data.Data);
    
  }

  const [criptomonedas, guardarCriptomonedas] = useState([])
  const [criptoCotizar, guardarCriptoCotizar] = useState('')
  const [monedaCotizar, guardarMonedaCotizar] = useState('')
  const [error, guardarError] = useState(false)

  const cotizarMoneda = e => {
    e.preventDefault()

    if(monedaCotizar === '' || criptoCotizar === '') {
      guardarError(true)
      return
    }

    guardarError(false)
    guardarMoneda(monedaCotizar)
    guardarCriptomoneda(criptoCotizar)
  }

  const mensaje = 'Todos los campos son obligatorios'
  const errorComponent = (error) ? <Error mensaje={mensaje}/> : null

  return (
    <form onSubmit={cotizarMoneda}>
      {errorComponent}
      <div className="row">
        <label htmlFor="coin">Elige tu moneda</label>
        <select name="coin" id="coin" className="u-full-width"
          onChange={ e => guardarMonedaCotizar(e.target.value)}>
          <option value="">-Elige tu moneda-</option>
          <option value="USD">Dólar americano</option>
          <option value="MXN">Peso méxicano</option>
          <option value="GTQ">Quetzal guatemalteco</option>
          <option value="GBP">Libras</option>
          <option value="EUR">Euro</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="cryptocoin">Elige tu criptomoneda</label>
        <select name="cryptocoin" id="cryptocoin" className="u-full-width"
          onChange={ e => guardarCriptoCotizar(e.target.value)}>
          <option value="">-Elige tu criptomoneda-</option>
          {criptomonedas.map((cripto, index) => (
            <Criptomoneda
              cripto={cripto}
              key={index} />
          ))}
        </select>
      </div>
      <input type="submit" className="button-primary u-full-width" value="Cotizar"/>
    </form>
  )
}

export default Formulario