import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';


function Requisitos(props) {

  let largo_requisitos = props.requisitos.length;
  return (
      <div className="Requisitos">
          <DropdownButton title="" drop="right" variant="danger" size="sm">
              {
                largo_requisitos ?
                (props.requisitos.map((ramo, index) => <Dropdown.Item>{ramo}</Dropdown.Item>)) : <Dropdown.Item>Ninguno</Dropdown.Item>
              }
          </DropdownButton>
      </div>
  );
}

export default Requisitos;
