import React from 'react';
import styled from '@emotion/styled'

const ErrorContainer = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: #FFF;
  font-size: 30px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
`

const Error = ({mensaje}) => {
  return ( 
    <ErrorContainer className="error">
      {mensaje}
    </ErrorContainer>
   );
}
 
export default Error;