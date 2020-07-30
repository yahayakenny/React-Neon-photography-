import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

export class Hero extends Component {
    render() {
        return (
            <div>
                <section class="hero">
                   <div class="container">
                        <div class="hero-text container-fluid ">

                            <ScrollAnimation animateIn='bounceInRight'
                                animateOut='bounceOutLeft'>
                                    <h1>Cyber</h1>
                                    <h2>Photography</h2>
                            </ScrollAnimation>
                            
                            <ScrollAnimation animateIn='wobble'
                                    initiallyVisible={true}>
                                    <button type="button" class="btn btn-outline-secondary btn-lg" >Book Now</button>
                            </ScrollAnimation>                              
                        </div>
                     </div>   
                </section>              
            </div>
        )
    }
}

export default Hero