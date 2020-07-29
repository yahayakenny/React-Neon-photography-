import React, { Component } from 'react';
import './App.css';
import about from './images/about.png';

export class Intro extends Component {
    render() {
        return (
            <div>
                <section class = "intro padding" id = "about">
                  <div class="container container-fluid">
                     <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 intro-text container-fluid container">
                             <h3>HELLO FRIENDS</h3>
                             <h1>My name is Tom Hardy</h1>
                             <h5>I can help you create positive and permanent changes in your life. High Performance Portfolio Template. Let’s Create Something new and awesome Togeather. I can help you create positive and permanent changes in your life..</h5><br/>
                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam perspiciatis magnam aliquid possimus recusandae at nisi. Aspernatur laboriosam odit iure sequi sit consequuntur voluptas vel, eos fugit perspiciatis quis.</p>       
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                            <img src={about} alt=""/>
                        </div>
                     </div>
                    </div>
           </section>
        </div>
        )
    }
}

export default Intro
