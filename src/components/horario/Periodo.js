import React from 'react';
function Periodo({horario}){
    return(
        <tbody>
            <tr>
                <th className="bg-primary text-white">{horario.periodoUno}</th>
                <th className="text-center">{horario.ramoLunesUno}</th>
                <th className="text-center">{horario.ramoMartesUno}</th>
                <th className="text-center">{horario.ramoMiercolesUno}</th>
                <th className="text-center">{horario.ramoJuevesUno}</th>
                <th className="text-center">{horario.ramoViernesUno}</th>
            </tr>
            <tr>
                <th className="bg-primary text-white">{horario.periodoDos}</th>
                <th className="text-center">{horario.ramoLunesDos}</th>
                <th className="text-center">{horario.ramoMartesDos}</th>
                <th className="text-center">{horario.ramoMiercolesDos}</th>
                <th className="text-center">{horario.ramoJuevesDos}</th>
                <th className="text-center">{horario.ramoViernesDos}</th>
            </tr>
            <tr>
                <th className="bg-primary text-white">{horario.periodoTres}</th>
                <th className="text-center">{horario.ramoLunesTres}</th>
                <th className="text-center">{horario.ramoMartesTres}</th>
                <th className="text-center">{horario.ramoMiercolesTres}</th>
                <th className="text-center">{horario.ramoJuevesTres}</th>
                <th className="text-center">{horario.ramoViernesTres}</th>
            </tr>
            <tr>
                <th className="bg-primary text-white">{horario.periodoCuatro}</th>
                <th className="text-center">{horario.ramoLunesCuatro}</th>
                <th className="text-center">{horario.ramoMartesCuatro}</th>
                <th className="text-center">{horario.ramoMiercolesCuatro}</th>
                <th className="text-center">{horario.ramoJuevesCuatro}</th>
                <th className="text-center">{horario.ramoViernesCuatro}</th>
            </tr>
            <tr>
                <th className="bg-primary text-white">{horario.periodoCinco}</th>
                <th className="text-center">{horario.ramoLunesCinco}</th>
                <th className="text-center">{horario.ramoMartesCinco}</th>
                <th className="text-center">{horario.ramoMiercolesCinco}</th>
                <th className="text-center">{horario.ramoJuevesCinco}</th>
                <th className="text-center">{horario.ramoViernesCinco}</th>
            </tr>
            <tr>
                <th className="bg-primary text-white">{horario.periodoSeis}</th>
                <th className="text-center">{horario.ramoLunesSeis}</th>
                <th className="text-center">{horario.ramoMartesSeis}</th>
                <th className="text-center">{horario.ramoMiercolesSeis}</th>
                <th className="text-center">{horario.ramoJuevesSeis}</th>
                <th className="text-center">{horario.ramoViernesSeis}</th>
            </tr>
            <tr>
                <th className="bg-primary text-white">{horario.periodoSiete}</th>
                <th className="text-center">{horario.ramoLunesSiete}</th>
                <th className="text-center">{horario.ramoMartesSiete}</th>
                <th className="text-center">{horario.ramoMiercolesSiete}</th>
                <th className="text-center">{horario.ramoJuevesSiete}</th>
                <th className="text-center">{horario.ramoViernesSiete}</th>
            </tr>
        </tbody>
    )
}
export default Periodo;