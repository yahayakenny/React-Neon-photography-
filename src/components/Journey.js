import React, { Component } from 'react';
import './App.css';
import imageTwelve from './images/imageTwelve.png'

export class Journey extends Component {
    render() {
        return (
            <div>
                <section class = "journey" id = "blog">
                    <div class="container">
                        <h5>Blog</h5>
                        <h2>My Journey</h2>
                    </div>     
                </section>
               
                <section class = "blog">
                    <div class="container-fluid container">         
                         <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                                <img src={imageTwelve} alt=""/>      
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 blog-text">
                                <h5>12 JULY 2020</h5>
                                <h3>NEON LIGHTS: How i started photographing in color</h3>
                                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat tempore dignissimos odit provident beatae doloremque laborum tenetur magni quia eaque ea, qui doloribus maxime cumque repellat commodi iusto. Tenetur.</h4><br/>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit sunt omnis autem quod. Ut saepe quisquam.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ullam perspiciatis magnam aliquid possimus recusandae at nisi. Aspernatur laboriosam odit iure sequi sit consequuntur voluptas vel, eos fugit perspiciatis quis.</p>
                            </div>
                        </div>
                    </div>
                </section>    
            </div>
        )
    }
}

export default Journey
