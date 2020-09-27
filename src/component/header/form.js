import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./form.scss";
import { FormControl, FormLabel } from 'react-bootstrap';
import { Form, FormGroup,Button } from 'reactstrap';

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
                <Form className="col-md-12 col-sm-11  mx-auto my-10">

                     <div className="row">
                         <FormGroup className="form-group col-md-6">
                             <FormLabel className="label_as" for="name">Name</FormLabel>
                             <FormControl type="text" class="form-control" id="name" required/>
                         </FormGroup>
                          
                         <FormGroup className="form-group col-md-6">
                                <FormLabel className="label_as" for="lastname">Apellido</FormLabel>
                                <FormControl type="text" className="form-control" id="lastname" required/>
                         </FormGroup>                           
                      </div>

                        <div className="row">
                            <FormGroup className="form-group col-md-6">
                                <FormLabel className="label_as" for="selectPrefijo">Prefijo</ FormLabel>
                                <FormControl as="select" className="form-control" id="selectPrefijo">

                                    {dataPrefijo.map((item)=>(
                                            <option >{item.prefijo}</option>
                                            )
                                        )
                                        }                                   
                                </FormControl>
                            </FormGroup>

                            <FormGroup className="form-group col-md-6">
                                <FormLabel className="label_as" for="telefono">Teléfono</FormLabel>
                                <FormControl type="text" className="form-control" id="telefono" required/>
                            </FormGroup>
                        </div>

                        <div className="row">
                            <FormGroup className="form-group col-md-6">
                                <FormLabel className="label_as" for="pais">País</FormLabel>
                                <FormControl as="select" className="form-control" id="pais">
                                    {dataCity.map(
                                         (item)=>(
                                         <option> {item.city}</option>
                                         )
                                     )
                                     }                                  
                                    
                                </FormControl>
                            </FormGroup>
                            <FormGroup className="form-group col-md-6">
                                <FormLabel className="label_as" for="email">Email</FormLabel>
                                <FormControl type="email" className="form-control" id="email" required/>
                            </FormGroup>
                        </div>

                        <FormGroup className="form-group form-check col-md-12 my-4">
                            <input type="checkbox" className="form-check-input" id="check" required/>
                            <label className="form-check-label" for="check">
                            <small className="form-text d-inline">Al hacer clic en el botón, usted acepta los <span>términos de uso</span> , <span>política de privacidad</span>, <span>política de cookies</span> y <span>aviso legal</span>.</small></label>                             
                        </FormGroup>
                                            
                        <button type="submit" className="btn btn-outline-dark" id="mui_btn_color">Más información</button> 
                </Form>
                </div>
           
         </Fragment>
        )
          
    }

export default form;


