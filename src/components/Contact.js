import React, { Component } from 'react';
import './App.css';

export class Contact extends Component {
    render() {
        return (
            <div>
                <section class = "contact" id = "contact">
                        <div class="container-fluid container contact-form">
                             <h1 class = "text-center">GET IN <span>TOUCH</span></h1><br/>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7 contact-details" >
                                <form class = "container">
                                     <div class="form-group row">                       
                                        <input type="text" class="form-control" id="name" placeholder="Name"/>
                                     </div>
                
                                     <div class="form-group row">                                             
                                        <input type="email" class="form-control" id="email" placeholder="Email"/>                        
                                    </div>
                                    <div class="form-group row">                                         
                                        <input type="text" class="form-control" id="text" placeholder="Message"/>                      
                                     </div>            
                                </form>
                            </div><br/><br/>
                            <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 contact-info">                            
                                <h6>Phone: <span>+108942343468</span></h6> <br/>                  
                                <h6>Email: <span>Johnweller@gmail.com</span></h6>  <br/>               
                                <h6>Location: <span>29th John District New York.</span></h6>                  
                             </div>  
                            </div>
                         </div>
                </section>               
            </div>
        )
    }
}

export default Contact
