import React from 'react';


class TipoEspecialidad extends React.Component {
    constructor(){
        super();

        this.tipoEspecialidad = this.tipoEspecialidad.bind(this);
    }

    tipoEspecialidad = (codigo) => {
        switch(codigo){
            case "BAIN":
                return "  Bachillerato en ciencias de ingeniería";

            case "INFO":
                return "  Ciencias informáticas"

            case "ELEC":
                return "  Optativo"

            case "EICI":
                return "  Formación profesional civil"

            case "DYRE":
                return "  Recreación y Acondicionamiento fisico"

            case "ADMI":
                return "  Administración"

            case "CIDI":
                return "  Idioma extranjero"

            case "IECO":
                return "  Economía"

            case "IDMI":
                return "  Formación profesional"

            case "MATM":
                return "  Bachillerato en ciencias de ingeniería"

            case "QUIM":
                return "  Quimica para ingeniería"

            case "FSCA":
                return "  Fisica para ingeniería"

            case "IOCC":
                return "  Ingeniería para Obras civiles"

            case "GEOC":
                return "  Geología"

            case "IMPT":
                return "  Fisica mecánica avanzada"

            case "ELEI":
                return "  Electricidad"

            case "ESTD":
                return "  Ciencias estadisticas"

        }
    }


    render(){
      let codigo = this.props.codigo.slice(0,4);
      return(
          <div className="TipoEspecialidad">
              { this.tipoEspecialidad(codigo) }
          </div>
      );
    }

}
export default TipoEspecialidad;