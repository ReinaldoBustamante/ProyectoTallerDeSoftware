import React from 'react';
import { DropdownButton } from 'react-bootstrap';


function SeleccionarMalla(props) {

  return (
            <div className="d-flex justify-content-center mt-4 mb-3">
                <DropdownButton title="Selecciona malla" drop="right" variant="light" size="md">
                      <button className="btn btn-light">Malla Ingeniería civil Informática 2008</button>
                      <button className="btn btn-light">Malla Ingeniería civil Informática 2017</button>

                </DropdownButton>
            </div>
  );
}

export default SeleccionarMalla;
