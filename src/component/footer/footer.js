import React from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style_foo.scss";
import Logo from "../../img/logo_footer.png";

function footer() {

    return(
        <Fragment>
            <div className="row pt-5 mui_foo">
                <div className="col-md-12 m-auto mui_pri_footer ">
                    <div className="row">
                       <div className="col-md-3 m-auto py-4">
                         <img src={Logo} alt="logo"></img>
                       </div>                        
                    </div>                    

                    <div className="row m-auto mui_cont_pri_ul">
                        <div className="col-md-12 col-sm-12 m-auto mui_cont_ul">
                            <ul className="  m-auto mui_prin_ul">
                            <li><a>www.e-zigurat.com</a></li>
                            <p>|</p>
                            <li><a>info@e-zigurat.com</a></li>
                            <p>|</p>
                            <li><a >(+34) 911 09 15 10</a></li>
                            </ul>
                        </div>
                        
                    </div>

                </div>

                <div className="col-md-12 mui_sec_footer m-auto">
                    
                    <div className="row mui_sec_cont">
                       <ul className="d-inline-flex mui_sec_ul">
                            <li><a href="https://www.e-zigurat.com/es/aviso-legal/">Aviso Legal</a></li>
                            <p>|</p>
                            <li><a href="https://www.e-zigurat.com/es/condiciones-de-uso/">Condiciones Generales</a></li>
                            <p>|</p>
                            <li><a href="https://www.e-zigurat.com/es/politica-de-privacidad/">Política de Privacidad</a></li>
                            <p>|</p>
                            <li><a href="https://www.e-zigurat.com/es/politica-de-cookies-zigurat/">Política de Cookies</a></li>
                            <p>|</p>
                            <li><a href="https://www.e-zigurat.com/wp-content/uploads/2019/03/anexo-3-poltica-de-calidad.pdf" target="_blank">Política de Calidad</a></li>
                        </ul>
                        <div className="mui_copy">
                            <spam>&copy; Zigurat Global Institute of Technology 2020</spam>
                        </div>
                                              
                    </div>
                </div>
                
            </div>
            
        </Fragment>
    )
    
}
export default footer