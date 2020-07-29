import React, { Component } from 'react'

export class Hero extends Component {
    render() {
        return (
            <div>
                <section class="hero">
                   <div class="container">
                        <div class="hero-text container-fluid ">
                             <h1>Cyber</h1>
                             <h2>Photography</h2>
                             <button type="button" class="btn btn-outline-secondary btn-lg">Book Now</button>
                        </div>
                     </div>   
                </section>              
            </div>
        )
    }
}

export default Hero
