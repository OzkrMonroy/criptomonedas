import React, { useState, useEffect } from 'react';
import Criptomoneda from '../Criptomoneda'
import Error from '../Error'
import axios from 'axios'
// Styles
import { Button } from './form'
import useCoin from '../../hooks/useCoin'

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

  const COINS = [
    {key: 'USD', name: 'Dólar americano'},
    {key: 'MXN', name: 'Peso mexicano'},
    {key: 'GTQ', name: 'Quétzal guatemalteco'},
    {key: 'GBP', name: 'Libras'},
    {key: 'EUR', name: 'Euro'}
  ]

  const [coin, SelectCoin, setCoin] = useCoin('Elige tu moneda', '', COINS)

  return (
    <form onSubmit={cotizarMoneda}>
      {errorComponent}
      <div className="row">
        <SelectCoin />
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
      <Button type="submit" value="Cotizar"/>
    </form>
  )
}

export default Formulario