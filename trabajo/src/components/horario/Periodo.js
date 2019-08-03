import React from 'react';
function Periodo({horario}){
    return(
        <tbody>
            <tr>
                <th className="bg-primary text-white">{horario.periodo}</th>
                <th className="text-center">{horario.ramoLunes}</th>
                <th className="text-center">{horario.ramoMartes}</th>
                <th className="text-center">{horario.ramoMiercoles}</th>
                <th className="text-center">{horario.ramoJueves}</th>
                <th className="text-center">{horario.ramoViernes}</th>
            </tr>
        </tbody>
    )
}
export default Periodo;