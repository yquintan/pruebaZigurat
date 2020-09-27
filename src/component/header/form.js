import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./form.scss";

function form() {

    const dataCity=[
        {city:"-Por favor, elije-"},
        {city:"Peru"},
        {city:"Nigeria"},
        {city:"Niue"},
        {city:"Northern Mariana Islands"}
    ];
    const dataPrefijo=[
        {prefijo:"-Por favor, elije-"},
        {prefijo:"(+51) Peru"},
        {prefijo:"(+234) Nigeria"},
        {prefijo:"(+683) Niue"},
        {prefijo:"(+850) North Korea"}
    ];

     return(
         <Fragment>
             <div className="col-md-6 cont">
                <form className="col-md-12 col-sm-11  mx-auto my-10">

                     <div className="row">
                         <div className="form-group col-md-6">
                             <label className="label_as" for="name">Name</label>
                             <input type="text" class="form-control" id="name" required/>
                         </div>
                          
                         <div className="form-group col-md-6">
                                <label className="label_as" for="lastname">Apellido</label>
                                <input type="text" className="form-control" id="lastname" required/>
                         </div>                           
                      </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label className="label_as" for="selectPrefijo">Prefijo</label>
                                <select className="form-control" id="selectPrefijo">

                                    {dataPrefijo.map((item)=>(
                                            <option >{item.prefijo}</option>
                                            )
                                        )
                                        }
                                   
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <label className="label_as" for="telefono">Teléfono</label>
                                <input type="text" className="form-control" id="telefono" required/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label className="label_as" for="pais">País</label>
                                <select className="form-control" id="pais">
                                    {dataCity.map(
                                         (item)=>(
                                         <option> {item.city}</option>
                                         )
                                     )
                                     }
                                    
                                    
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="label_as" for="email">Email</label>
                                <input type="email" className="form-control" id="email" required/>
                            </div>
                        </div>

                        <div className="form-group form-check col-md-12 my-4">
                            <input type="checkbox" className="form-check-input" id="check" required/>
                            <label className="form-check-label" for="check"></label>
                            <small className="form-text d-inline">Al hacer clic en el botón, usted acepta los términos de uso, política de privacidad,política de cookies y aviso legal.</small>
                        </div>
                    
                        <button type="submit" className="btn btn-outline-dark" id="mui_btn_color">Más información</button> 
                </form>
                </div>
           
         </Fragment>
        )
          
    }

export default form;


