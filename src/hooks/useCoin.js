import React, { Fragment, useState } from 'react';

const useCoin = ({label, initialState, coinsOptions}) => {

  const [state, setState] = useState(initialState)
  
  const SelectCoin = () => (
    <Fragment>
      <input>{label}</input>
      <select 
        onChange={e => setState(e.target.value)}
        value={state}
      >
      <option value="">--Selecciona una opción--</option>
        {coinsOptions.map(option => (
          <option key={option.key} value={option.key}>{option.name}</option>
        ))}
      </select>
    </Fragment>
  )
  
  return [state, SelectCoin, setState]
}

export default useCoin