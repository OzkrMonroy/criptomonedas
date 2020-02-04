import React, { Fragment, useState } from 'react';
// Styles
import { Label, Select } from '../styles'

const useCoin = (label, initialState, coinsOptions) => {

  const [state, setState] = useState(initialState)
  
  const SelectCoin = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select 
        onChange={e => setState(e.target.value)}
        value={state}
      >
      <option value="">--Selecciona una opción--</option>
        {coinsOptions.map(option => (
          <option key={option.key} value={option.key}>{option.name}</option>
        ))}
      </Select>
    </Fragment>
  )
  
  return [state, SelectCoin, setState]
}

export default useCoin