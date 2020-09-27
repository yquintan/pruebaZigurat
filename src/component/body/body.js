import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.scss"

function body() {
    return(
    <Fragment>
        <div className="row mui_body">
          <div className="col-md-12">

            <div className="row">
                <h3 className="col-md-12 font-weight-bold">SINOPSIS</h3>
            </div>

            <div  className="row mb-4">
                <div className="mui_separa_sinops"></div>
            </div>

            <div className="row">
                <div className="col-md-6 mui_parr">
                    <div>
                        <p>El concepto de sostenibilidad se define como la capacidad de permanecer, cualidad por la que un elemento o sistema se puede mantener activo durante el transcurso del tiempo, sin sobrepasar los umbrales que puedan perjudicar a nuestro medio ambiente. De forma resumida, un desarrollo sostenible será aquél capaz de satisfacer las necesidades actuales sin comprometer los recursos naturales y posibilidades de las futuras generaciones. </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <p>El desarrollo sostenible, aplicado a la construcción, requiere del uso de sistemas o herramientas que permitan analizar y evaluar la alteración, aprovechamiento y consumo de los recursos naturales de todos los procesos constructivos que intervienen en el ciclo de vida de una determinada construcción.
                        <br/><br/>

                    Si nos centramos en el ámbito de la edificación, la capacidad de alteración del medio natural es especialmente significativa en el caso de los procesos constructivos de las edificaciones.</p>
                </div>
                </div>
            </div> 
        </div>
    </Fragment>
    )
    
}

export default body