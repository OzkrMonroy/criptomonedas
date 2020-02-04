import React from 'react';

import { ResultContainer, InfoContainer, PriceContainer } from './resultStyles'

const Resultado = ({resultado}) => {
  if(Object.keys(resultado).length === 0) return null

  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = resultado

  return ( 
    <ResultContainer>
      <h2>Resultado</h2>
      <PriceContainer className="precio">El precio es: <span>{PRICE}</span></PriceContainer>
      <InfoContainer>Precio más alto del día: <span>{HIGHDAY} </span></InfoContainer>
      <InfoContainer>Precio más bajo del día: <span>{LOWDAY}</span></InfoContainer>
      <InfoContainer>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR} %</span></InfoContainer>
      <InfoContainer>Última actualización: <span>{LASTUPDATE}</span></InfoContainer>
    </ResultContainer>
   );
}
 
export default Resultado;