import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import axios from 'axios'

import Navbar from './components/layout/Navbar';
import Inicio from './components/inicio/Inicio';
import Malla from './components/ComponentesMalla/Malla';
import AgregarRamos from './components/horario/AgregarRamos';
import Horario from './components/horario/Horario';
import ListaRamos from './components/horario/ListaRamos';

function App() {

  //lista del horario
  const [horario, guardarHorario] = useState([]);
  const [recargarHorario, guardarRecargarHorario] = useState(true);
  //const [recargarHorario, guardarRecargarHorario] = useState(true);

  //lista de ramos
  const [ramos, guardarRamos] = useState([]);
  const [recargarRamos, guardarRecargarRamos] = useState(true);

  //Lista Ramos Disponibles
  const [ramosdisp, guardarRamosDisp] = useState([]);

  //periodo ramos
  const [periodoRamos, guardarPeriodoRamos] = useState([]);


  useEffect(()=>{

    if(recargarHorario){
      const consultarApi = async()=>{
        //consultar la api de json-server comando en cosola json-server horario.json -p 4000
        const resultado = await axios.get('http://localhost:4000/horario');
        guardarHorario(resultado.data)
      }
      consultarApi();
      guardarRecargarHorario(false);
    }
   

    if(recargarRamos) {
      const consultarApi2 = async()=>{
        //consultar la api de json-server cosola json-server listaramos.json -p 4001
        const resultado = await axios.get('http://localhost:4001/listaramos');
        guardarRamos(resultado.data)
      }
      consultarApi2();
      //cambiar a false la recarga de los productos
      guardarRecargarRamos(false);
    }

    const consultarApi3 = async()=>{
      //consultar la api de json-server
      const resultado = await axios.get('http://localhost:4002/ramosdisp');
      guardarRamosDisp(resultado.data)
    }
    consultarApi3();

    const consultarApi4 = async()=>{
      //consultar la api de json-server
      const resultado = await axios.get('http://localhost:4003/periodoramos');
      guardarPeriodoRamos(resultado.data)
    }
    consultarApi4();
  },[recargarRamos, recargarHorario])
  return (
    <Router>
      <Navbar/>
      <main className="container mt-4">
        <Switch>
          <Route exact path="/" component = {Inicio}/>
          <Route path='/malla' exact component={ Malla } />
          <Route exact path="/horario" 
          render={ () => (
            <Horario horario={horario}/>
          )}
          />

          <Route exact path="/agregar-ramos"
          render={() =>(
            <AgregarRamos ramosdisp={ramosdisp}
            guardarRecargarRamos={guardarRecargarRamos} horario={horario} periodoRamos={periodoRamos}
            guardarRecargarHorario={guardarRecargarHorario}/>
          )}
          />

          <Route exact path="/lista-ramos"
          render={() =>(
            <ListaRamos ramos={ramos} guardarRecargarRamos={guardarRecargarRamos}/>
          )}
          />
          <Route exact path="/horario/:id"
           render={(props)=> {
            //tomar el id del ramo
            console.log(props.match.params.id);
          }}
          />

        </Switch>
      </main>
      <p className="mt-4 p2 text-center">Todos los derechos Reservados &copy;</p>
    </Router>
  );
}

export default App;
