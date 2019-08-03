import React from 'react';
import BotonAsignatura from './BotonAsignatura';


function Asignatura(props) {
  return (
      <div className="nombreAsignatura_container">
            <BotonAsignatura ramo={props.ramo} />
      </div>
  );
}

export default Asignatura;
