import React, {useState,Fragment} from 'react';
import Form from './Form';
import {Link} from 'react-router-dom';
import Error from './Error';
import axios from 'axios';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'; 


function AgregarRamos({ramosdisp, guardarRecargarRamos,history, guardarRecargarHorario, ramos}){
    //state
    const [nombreAsignatura, guardarRamo] = useState('');
    var nombreAgregado = "";
    let i = 0;
    let j = 0;
    let k =0;
    let b = true;
    let code = ""
    const [error, guardarError] = useState(false);
    const agregarRamo = async e =>{
        e.preventDefault();
        if(nombreAsignatura === '' ){
            guardarError(true);
            return;
        }
        while(ramosdisp[j].ramo !== nombreAsignatura){
            j++;
        } 
        code = ramosdisp[j].code
        
        guardarError(false);
        //crear el nuevo producto
        
        try{
            const resultado = await axios.post('http://localhost:4001/listaramos',{
                nombreAsignatura, //asignatura que se selecciono
                code,
            });
            const periodo = await axios.get('http://localhost:4003/periodoramos',{
                 //asignatura que se selecciono
            });
            nombreAgregado=resultado.data.nombreAsignatura
         
            while(periodo.data[i].asignatura !== nombreAgregado){
                i++;
            }
            for(k=0 ; k<ramos.length ; k++){
                if(ramos[k].code === periodo.data[i].code){
                    b=false;
                }
            }
            if(b){
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
                    console.log(periodo.data[i])
                    await axios.patch( 'http://localhost:4000/horario/1',{
                   
                        periodoUno: "8:10-9:40",
                        ramoLunesUno:  periodo.data[i].ramoLunesUno,
                        ramoMartesUno: periodo.data[i].ramoMartesUno,
                        ramoMiercolesUno:  periodo.data[i].ramoMiercolesUno,
                        ramoJuevesUno:  periodo.data[i].ramoJuevesUno,
                        ramoViernesUno:  periodo.data[i].ramoViernesUno,
    
                        periodoDos: "9:50-11:20",
                        ramoLunesDos:  periodo.data[i].ramoLunesDos,
                        ramoMartesDos: periodo.data[i].ramoMartesDos,
                        ramoMiercolesDos:  periodo.data[i].ramoMiercolesDos,
                        ramoJuevesDos:  periodo.data[i].ramoJuevesDos,
                        ramoViernesDos:  periodo.data[i].ramoViernesDos,
    
                        periodoTres: "11:30-13:00",
                        ramoLunesTres:  periodo.data[i].ramoLunesTres,
                        ramoMartesTres: periodo.data[i].ramoMartesTres,
                        ramoMiercolesTres:  periodo.data[i].ramoMiercolesTres,
                        ramoJuevesTres:  periodo.data[i].ramoJuevesTres,
                        ramoViernesTres:  periodo.data[i].ramoViernesTres,
                     
                        periodoCuatro: "13:00-14:00",
                        ramoLunesCuatro:  periodo.data[i].ramoLunesCuatro,
                        ramoMartesCuatro: periodo.data[i].ramoMartesCuatro,
                        ramoMiercolesCuatro:  periodo.data[i].ramoMiercolesCuatro,
                        ramoJuevesCuatro:  periodo.data[i].ramoJuevesCuatro,
                        ramoViernesCuatro:  periodo.data[i].ramoViernesCuatro,
    
                        periodoCinco: "14:10-15:40",
                        ramoLunesCinco:  periodo.data[i].ramoLunesCinco,
                        ramoMartesCinco: periodo.data[i].ramoMartesCinco,
                        ramoMiercolesCinco:  periodo.data[i].ramoMiercolesCinco,
                        ramoJuevesCinco:  periodo.data[i].ramoJuevesCinco,
                        ramoViernesCinco:  periodo.data[i].ramoViernesCinco,
    
                        periodoSeis: "15:50-17:20",
                        ramoLunesSeis:  periodo.data[i].ramoLunesSeis,
                        ramoMartesSeis: periodo.data[i].ramoMartesSeis,
                        ramoMiercolesSeis:  periodo.data[i].ramoMiercolesSeis,
                        ramoJuevesSeis:  periodo.data[i].ramoJuevesSeis,
                        ramoViernesSeis:  periodo.data[i].ramoViernesSeis,
    
                        periodoSiete: "17:30-19:00",
                        ramoLunesSiete:  periodo.data[i].ramoLunesSiete,
                        ramoMartesSiete: periodo.data[i].ramoMartesSiete,
                        ramoMiercolesSiete:  periodo.data[i].ramoMiercolesSiete,
                        ramoJuevesSiete:  periodo.data[i].ramoJuevesSiete,
                        ramoViernesSiete:  periodo.data[i].ramoViernesSiete,
                    });
                    guardarRecargarHorario(true)  

                }
            }
            else{
                Swal.fire({
                    type: 'error',
                    title: 'Error. ya agrego este ramo',
                    text: 'si desea agregar este ramo o un grupo en paralelo. eliminelo e intente nuevamente',
                })
                guardarRecargarRamos(true);
                const url = `http://localhost:4001/listaramos/${ramos.length+1}`
                await axios.delete(url);
            }
           
        }catch(error){
            Swal.fire({
                type: 'error',
                title: 'Error',
                text: 'Hubo un error',
              })
        }
    }
    return(
       <Fragment>
           <Link to ="/horario" className="btn btn-warning mr-2 btn-sm  ">volver</Link>
           <div className="col-md-8 mx-auto">
            <h1 className="text-center">Agregar Ramo</h1>
            {(error) ? <Error mensaje='Es necesario que seleccione un ramo'/> : null}
            <form className="mt-5" onSubmit={agregarRamo}>
                <div className="form-group">
                    <label>Ramos Disponibles</label>
                    <select multiple  className="form-control" id="exampleFormControlSelect2" onChange={e =>guardarRamo(e.target.value)}>
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