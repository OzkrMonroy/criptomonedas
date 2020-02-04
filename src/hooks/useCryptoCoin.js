import React, { useState, Fragment } from 'react'
// Styles
import { Label, Select } from '../styles'

const useCryptoCoin = (label, initialState, coinsOptions) => {

  const [state, setState] = useState(initialState)
  
  const SelectCryptoCoin = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select 
        onChange={e => setState(e.target.value)}
        value={state}
      >
      <option value="">--Selecciona una opción--</option>
        {coinsOptions.map(option => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
        ))}
      </Select>
    </Fragment>
  )
  
  return [state, SelectCryptoCoin, setState]
}

export default useCryptoCoin
