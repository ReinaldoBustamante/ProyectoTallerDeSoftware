import React from 'react';
import Data from '../Data/dataMalla';
import Semestre from './Semestre';



function Malla(props) {

    let nro_semestres = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI'];

    return (

      <div>
            
            <div className="row d-flex justify-content-center my-5">
                    {Data.map((semestre, index) =>
                        <Semestre
                            key={index}
                            posSem={nro_semestres[index]}
                            numSem={semestre.num_sem}
                            ramos={semestre.ramos}
                        />

                    )}

            </div>

      </div>
    );
}

export default Malla;
