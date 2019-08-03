import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import Lista from './Lista'

function ListaRamo({ramos, guardarRecargarRamos}){
    return(
        <Fragment>
            <Link to ="/horario" className="btn btn-primary mr-2 btn-sm  ">volver</Link>
            <h1 className="text-center">Lista Ramo</h1>
            <ul className = "list-group mt-5">
                {ramos.map(ramos =>(
                    <Lista
                    key={ramos.id}
                    ramos={ramos}
                    guardarRecargarRamos={guardarRecargarRamos}
                    />
                ))}  
            </ul>
            
        </Fragment>
        
    )
}
export default ListaRamo;