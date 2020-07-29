import React, { Component } from 'react';
import './App.css';
import imageOne from './images/imageOne.png'
import imageTwo from './images/imageTwo.png'
import imageThree from './images/imageThree.png'
import imageFour from './images/imageFour.png'
import imageFive from './images/imageFive.png'
import imageSix from './images/imageSix.png'
import imageSeven from './images/imageSeven.png'
import imageEight from './images/imageEight.png'
import imageNine from './images/imageNine.png'
import imageTen from './images/imageTen.png'
import imageEleven from './images/imageEleven.png'

export class Works extends Component {
    render() {
        return (
            <div>
                <section class = "services" id = "portfolio">
                    <div class="container">
                         <h5>Services</h5>
                        <h2>Photography</h2>
                     </div>     
                </section>  

                <section class = "works ">
                    <div class="container-fluid container">
                        <div class="row">
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 no-padding hide">
                                <img src={imageOne} alt="" class = "one"/><br/>
                                <img src={imageTwo} alt=""/>         
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 no-padding hide">
                                <img src={imageThree}alt="" class = "long-img " />
                            </div>
                            <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 no-padding">
                                 <img src={imageFour}alt="" class = "one"/><br/>
                                 <img src={imageFive} alt=""/>
                             </div>
                         </div>
                    </div>
                    <div class="container-fluid container bottom">
                        <div class="row">
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 no-padding">
                                <img src={imageSix} alt=""/>                 
                            </div>
                            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 no-padding">
                                <img src={imageSeven}alt="" />
                             </div>
                     </div>
                    </div>     
                </section>

                <section class = "item-img">
                    <div class="container container-fluid hide">
                        <div class="row">
                             <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 no-padding">
                                <img src={imageEight} alt="" class = "one"/>         
                             </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3  no-padding">
                                <img src={imageNine}alt=""/>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 no-padding">
                                <img src={imageEleven}alt=""/>
                            </div>
                            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 no-padding ">
                                <img src={imageTen} alt="" class = "last"/>
                            </div>
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}

export default Works
