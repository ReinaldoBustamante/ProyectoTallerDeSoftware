import React, {Fragment} from 'react';
import Periodo from './Periodo';
import {Link} from 'react-router-dom';

function Horario({horario}){
    return(
        <Fragment>
            <h1 className="text-center mb-4 ">Horario</h1>
            <table className="table" >
                <thead className="bg-primary text-white">
                    <tr>
                        <th scope="col">Periodo</th>
                        <th scope="col" className="text-center">Lunes</th>
                        <th scope="col" className="text-center">Martes</th>
                        <th scope="col" className="text-center">Miercoles</th>
                        <th scope="col" className="text-center">Jueves</th>
                        <th scope="col" className="text-center">Viernes</th>
                    </tr>
                </thead>
                {horario.map(horario =>(
                    <Periodo
                        key={horario.id}
                        horario={horario}
                    />

                ))}   
            </table>
            <Link to ="/agregar-ramos" className="btn btn-primary mr-2 btn-lg  ">Agregar Ramo</Link>
            <Link to ="/lista-ramos" className="btn btn-primary mr-2 btn-lg">Ver Ramos </Link>
            
        </Fragment>
        
    )
}
export default Horario;