import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import TasaApr from './TasaApr';
import Requisitos from './Requisitos';

class BotonAsignatura extends React.Component {
    constructor(){
        super();

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
        };
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }

    render(){
        let tasa_aprobacion = Math.ceil((1 - this.props.ramo.tasa_repr) * 100);
        return(
            <React.Fragment>
                <Button href="#" variant="light" className="container my-1 list-group-item list-grou-item-action border border-secondary rounded rounded-pill" onClick={this.handleShow}>
                    { this.props.ramo.nombre }
                </Button>

                {/* Información de de asignatura */}
                <Modal show={this.state.show} onHide={this.handleClose} size="sm">
                    <Modal.Header>
                      <Modal.Title> {this.props.ramo.nombre}  </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="font-weight-bold">Codigo: {this.props.ramo.codigo}</p>
                        <p className="font-weight-bold">Creditos: {this.props.ramo.creditos}</p>
                        <p className="font-weight-bold d-flex">Tasa de Aprobación:  <TasaApr tasa_apr={tasa_aprobacion} /> </p>
                        <p className="font-weight-bold d-flex">Requisitos <Requisitos requisitos={this.props.ramo.requisitos}/></p>
                    </Modal.Body>
                    <Modal.Footer>
                      <div className="text-center">
                          <button className="btn btn-danger" onClick={this.handleClose}>Cerrar</button>
                      </div>

                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }

}

export default BotonAsignatura;
