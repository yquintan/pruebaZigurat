import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../img/ZIGURATlogo.webp";
// importando el formulario
import Form from "./form";
import Table from "../../img/mockup-ebook_MIE.png";
import "./style.scss"


function header() {

     return(
         <Fragment>
            <header class="main-card card rounded-0">
                <div class="m-auto mui_logo">
                    <img src={Logo} alt="Logo"/>
                </div>

                <div class="m-auto text-uppercase text-center col-md-7 py-5">            
                    <h4 class="card-text mb-2">consigue el ebook de:</h4>
                    <h3 class="card-title mui_h_title font-weight-bold animacion call_func">sistema de certificacion de la sostenibilidad leed (grenn building council-gbc)</h3>                     
                </div>

                <div class="row p-5 w-100">
                    <Form/>

                    <div class="mui_cont_tab col-md-6 col-sm-4">
                        <div class="div_img aminated wow bounceInUp"
                        >
                            <img src={Table} class="img" alt=""/>
                        </div>
                    </div>

                </div>
            </header> 
       </Fragment>
       )
    
    
 
}

export default header;

