import React from 'react';

const Error = ({mensaje}) => {
  return ( 
    <div className="error">
      {mensaje}
    </div>
   );
}
 
export default Error;