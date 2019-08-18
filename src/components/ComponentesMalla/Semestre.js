import React from 'react';
import Asignatura from './Asignatura';

function Semestre(props) {
    return (
      <div>
        <div className="list-group border my-4 mx-4 semestre_container">
            <li href="#" className="list-group-item list-group-item-action orange text-white mb-3 rounded-pill"><b>{props.posSem} Semestre </b></li>
            {props.ramos.map((ramo, index) =>
                  <Asignatura
                      ramo={ramo}
                  />
            )}


        </div>

      </div>
    );
}

export default Semestre;