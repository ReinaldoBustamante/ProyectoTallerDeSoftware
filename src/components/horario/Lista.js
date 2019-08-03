import React from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';

function Periodo({ramos, guardarRecargarRamos}){
    
    const eliminarRamo = async id =>{
        console.log('eliminando', id);
        //TODO: Eliminar registro
        Swal.fire({
            title: '¿Estas Seguro?',
            text: "Siempre podra agregarlo nuevamente",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar'
          }).then(async (result) => {
            if (result.value) {
                try{
                    const url = `http://localhost:4001/listaramos/${id}`
                    const resultado = await axios.delete(url);
                    if(resultado.status === 200){
                        Swal.fire(
                            'Eliminado',
                            'El ramo se ha eliminado',
                            'success'
                        )
                         // consultar api nuevamente
                        guardarRecargarRamos(true)   
                    } 
                }catch(error){
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error',
                    })
                }
            }
          })
    }

    return(

        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="font-weight-bold">
             {ramos.nombreAsignatura}
            </span>

            <div>
            <button type="button" className="btn btn-danger" onClick={() => eliminarRamo(ramos.id)}>
                Eliminar
            </button>
            </div>
        </li>
        
    )
}
export default Periodo;