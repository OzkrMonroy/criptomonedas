import React, { useState, useEffect } from 'react';
import axios from 'axios'
// Styles
import { Button } from './formStyles'
import useCoin from '../../hooks/useCoin'
import useCryptoCoin from '../../hooks/useCryptoCoin'
import Error from '../Error'

function Formulario({guardarMoneda, guardarCriptomoneda}) {

  const [cryptoCoinList, setCryptoCoinList] = useState([])
  const [error, guardarError] = useState(false)

  const COINS = [
    {key: 'USD', name: 'Dólar americano'},
    {key: 'MXN', name: 'Peso mexicano'},
    {key: 'GTQ', name: 'Quétzal guatemalteco'},
    {key: 'GBP', name: 'Libras'},
    {key: 'EUR', name: 'Euro'}
  ]

  const [coin, SelectCoin] = useCoin('Elige tu moneda', '', COINS)
  const [cryptoCoin, SelectCryptoCoin] = useCryptoCoin('Elige la criptomoneda', '', cryptoCoinList)

  
  useEffect(() => {
    const consultarApi = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=10&tsym=USD'
  
      const respuesta = await axios.get(url)
  
      setCryptoCoinList(respuesta.data.Data);
    }
    consultarApi()
  }, [])

  const cotizarMoneda = e => {
    e.preventDefault()

    if(coin === '' || cryptoCoin === '') {
      guardarError(true)
      return
    }

    guardarError(false)
    guardarMoneda(coin)
    guardarCriptomoneda(cryptoCoin)
  }

  const mensaje = 'Todos los campos son obligatorios'
  const errorComponent = (error) ? <Error mensaje={mensaje}/> : null


  return (
    <form
    onSubmit={cotizarMoneda}
    >
      {errorComponent}
      <SelectCoin />

      <SelectCryptoCoin/>

      <Button type="submit" value="Cotizar"/>
    </form>
  )
}

export default Formulario