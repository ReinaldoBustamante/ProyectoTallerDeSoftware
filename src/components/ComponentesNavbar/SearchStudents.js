import React, {Component} from 'react';
import Data from '../Data/dataEstudiante';
import Swal from 'sweetalert2';
import Malla from '../ComponentesMalla/Malla';

function isFound(code)
{
    let size_code = Data[0].codigo_estudiante.length;

    if(code.length !== size_code){ return false; }

    for(let i = 0; i < Data.length; ++i){
        if(code === Data[i].codigo_estudiante){
            return true;
        }
    }
    return false;
}

class SearchStudents extends Component {

    constructor(){
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            code: ''
        };
    }

    handleSubmit = (e) => {
        const code = this.state.code;
        const logIn = false;

        if(isFound(code))
        {
            Swal.fire({
                type: 'success',
                title: 'Bienvenido',
                text: 'Ahora accede a tus datos personales',
            })
            return <Malla
                        loggeado={!logIn}
                    />
        }
        else
        {
            Swal.fire({
                type: 'error',
                title: 'Estudiante no registrado',
                text: '',
            })
            this.setState({ code: '' })
            e.preventDefault();
        }
    }

    handleChange = e => {
          e.preventDefault();
          const valor = e.target.value;
          const nombre = e.target.name;
          this.setState({
              [nombre]: valor
          }, () => console.log(this.state));
    }

    handleClick = () => {
        Swal.fire(
            'Consejo!!!',
            'Puedes ingresar tu codigo estudiantil para acceder a datos personalizados',
            'question'
          )

    }

    render(){
      return (
        <div className="d-flex">
            <form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
                <input
                       className="form-control mr-sm-2"
                       type="text"
                       placeholder="Ingresar codigo"
                       onChange={this.handleChange}
                       name="code">

                </input>

                <button
                      className="ml-3 btn orange text-white my-2 my-sm-0"
                      type="submit">
                      Buscar
                </button>
            </form>
            <button className="ml-3 btn orange text-white my-2 my-sm-0" onClick={this.handleClick}>?</button>
        </div>

      );
    }

 }

export default SearchStudents;
