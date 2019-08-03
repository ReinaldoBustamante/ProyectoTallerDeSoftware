import React from 'react';

function TasaApr(props) {

    function changeColorPercent(percent){

          if(percent > 0 && percent < 39){
              return 'danger';
          }

          else if(percent > 39 && percent < 65){
              return 'warning';
          }

          else return 'success';

    }

    return (
        <div className="TasaApr">
              <span className={`badge badge-pill badge-${changeColorPercent(props.tasa_apr)}`}>{ props.tasa_apr } %</span>
        </div>
    );
}

export default TasaApr;
