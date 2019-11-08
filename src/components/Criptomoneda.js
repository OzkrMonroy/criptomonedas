import React from 'react';

const Criptomoneda = ({cripto}) => {
  const {Name, FullName} = cripto.CoinInfo

  return (
    <option value={Name}>{FullName}</option>
   );
}
 
export default Criptomoneda;