    import React, {useState,Fragment} from 'react';
import Form from './Form';
import {Link} from 'react-router-dom';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'; 

function AgregarRamos({ramosdisp, guardarRecargarRamos, horario, periodoRamos, history, guardarRecargarHorario}){
    //state
    const [nombreAsignatura, guardarRamo] = useState('');
    
    const [error, guardarError] = useState(false);
    const agregarRamo = async e =>{
        e.preventDefault();
        if(nombreAsignatura === '' ){
            guardarError(true);
            return;
        }
        guardarError(false);
        //crear el nuevo producto
        try{
            const resultado = await axios.post('http://localhost:4001/listaramos',{
                nombreAsignatura, //asignatura que se selecciono
            });
            const periodo = await axios.get('http://localhost:4003/periodoramos',{
                 //asignatura que se selecciono
            });
        
            if(resultado.status === 201){
                Swal.fire(
                    'Se agrego un nuevo ramo',
                    'Se ha agregado correctamente su ramo',
                    'success'
                )
                //redirige al usuario si se crea el producto
                guardarRecargarRamos(true);
                history.push('/horario');
                //cambia valores en el horario
                console.log(periodo.data[0].hora)
                await axios.put( `http://localhost:4000/horario/${periodo.data[0].periodo}`,{
                    periodo: periodo.data[0].hora,
                    ramoLunes:  periodo.data[0].ramoLunes,
                    ramoMartes: periodo.data[0].ramoMartes,
                    ramoMiercoles:  periodo.data[0].ramoMiercoles,
                    ramoJueves:  periodo.data[0].ramoJueves,
                    ramoViernes:  periodo.data[0].ramoViernes
                });
                guardarRecargarHorario(true)
                
                
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
    return(
       <Fragment>
           <Link to ="/horario" className="btn btn-primary mr-2 btn-sm  ">volver</Link>
           <div className="col-md-8 mx-auto">
            <h1 className="text-center">Agregar Ramo</h1>
            {(error) ? <Error mensaje='Es necesario que seleccione un ramo'/> : null}
            <form className="mt-5" onSubmit={agregarRamo}>
                <div className="form-group">
                    <label>Ramos Disponibles</label>
                    <select multiple  className="form-control" onChange={e =>guardarRamo(e.target.value)}>
                        {ramosdisp.map(ramosdisp =>(
                            <Form 
                            key={ramosdisp.id}
                            ramosdisp={ramosdisp}
                            />
                        ))} 
                    </select>
                    <input type = "submit" className="font-weight-bold text-uppercase mt-5 btn
                    btn-primary btn-block py-2" value="Agregar Ramo"></input>
                    
                </div>
            </form>

        </div>
        
       </Fragment> 

    )
}
export default withRouter(AgregarRamos);