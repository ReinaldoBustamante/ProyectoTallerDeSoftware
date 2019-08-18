import React from 'react';

import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'; 

function Periodo({ramos, guardarRecargarRamos,history, guardarRecargarHorario}){
    let i = 0;
    const eliminarRamo = async id =>{
        
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
                    const periodo = await axios.get('http://localhost:4003/periodoramos',{
                        //asignatura que se selecciono
                   });
                    console.log(ramos.nombreAsignatura)
                    if(resultado.status === 200){
                        Swal.fire(
                            'Eliminado',
                            'El ramo se ha eliminado',
                            'success'
                        )
                        while(periodo.data[i].asignatura !== ramos.nombreAsignatura){
                            i++;
                        }
                         // consultar api nuevamente
                        guardarRecargarRamos(true)  
                        history.push('/horario'); 
                        console.log(periodo.data[i+12])
                        await axios.patch( 'http://localhost:4000/horario/1',{
               
                            periodoUno: "8:10-9:40",
                            ramoLunesUno:  periodo.data[i+12].ramoLunesUno,
                            ramoMartesUno: periodo.data[i+12].ramoMartesUno,
                            ramoMiercolesUno:  periodo.data[i+12].ramoMiercolesUno,
                            ramoJuevesUno:  periodo.data[i+12].ramoJuevesUno,
                            ramoViernesUno:  periodo.data[i+12].ramoViernesUno,
        
                            periodoDos: "9:50-11:20",
                            ramoLunesDos:  periodo.data[i+12].ramoLunesDos,
                            ramoMartesDos: periodo.data[i+12].ramoMartesDos,
                            ramoMiercolesDos:  periodo.data[i+12].ramoMiercolesDos,
                            ramoJuevesDos:  periodo.data[i+12].ramoJuevesDos,
                            ramoViernesDos:  periodo.data[i+12].ramoViernesDos,
        
                            periodoTres: "11:30-13:00",
                            ramoLunesTres:  periodo.data[i+12].ramoLunesTres,
                            ramoMartesTres: periodo.data[i+12].ramoMartesTres,
                            ramoMiercolesTres:  periodo.data[i+12].ramoMiercolesTres,
                            ramoJuevesTres:  periodo.data[i+12].ramoJuevesTres,
                            ramoViernesTres:  periodo.data[i+12].ramoViernesTres,
                         
                            periodoCuatro: "13:00-14:00",
                            ramoLunesCuatro:  periodo.data[i+12].ramoLunesCuatro,
                            ramoMartesCuatro: periodo.data[i+12].ramoMartesCuatro,
                            ramoMiercolesCuatro:  periodo.data[i+12].ramoMiercolesCuatro,
                            ramoJuevesCuatro:  periodo.data[i+12].ramoJuevesCuatro,
                            ramoViernesCuatro:  periodo.data[i+12].ramoViernesCuatro,
        
                            periodoCinco: "14:10-15:40",
                            ramoLunesCinco:  periodo.data[i+12].ramoLunesCinco,
                            ramoMartesCinco: periodo.data[i+12].ramoMartesCinco,
                            ramoMiercolesCinco:  periodo.data[i+12].ramoMiercolesCinco,
                            ramoJuevesCinco:  periodo.data[i+12].ramoJuevesCinco,
                            ramoViernesCinco:  periodo.data[i+12].ramoViernesCinco,
        
                            periodoSeis: "15:50-17:20",
                            ramoLunesSeis:  periodo.data[i+12].ramoLunesSeis,
                            ramoMartesSeis: periodo.data[i+12].ramoMartesSeis,
                            ramoMiercolesSeis:  periodo.data[i+12].ramoMiercolesSeis,
                            ramoJuevesSeis:  periodo.data[i+12].ramoJuevesSeis,
                            ramoViernesSeis:  periodo.data[i+12].ramoViernesSeis,
        
                            periodoSiete: "17:30-19:00",
                            ramoLunesSiete:  periodo.data[i+12].ramoLunesSiete,
                            ramoMartesSiete: periodo.data[i+12].ramoMartesSiete,
                            ramoMiercolesSiete:  periodo.data[i+12].ramoMiercolesSiete,
                            ramoJuevesSiete:  periodo.data[i+12].ramoJuevesSiete,
                            ramoViernesSiete:  periodo.data[i+12].ramoViernesSiete,
                            

                        });

                
                        guardarRecargarHorario(true)
                    } 
                }catch(error){
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
export default withRouter(Periodo);