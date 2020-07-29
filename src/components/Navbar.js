import React, { Component } from 'react';
import "./App.css"

export class Navbar extends Component {
    render() {
        return (
          <div>           
               <nav class="navbar navbar-expand-lg navbar-dark">
                    <a class="navbar-brand" href="#">NEON</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                       </button>
                 <div class="collapse navbar-collapse" id="navbarNav">
                     <ul class="nav navbar-nav ml-auto">
                         <li class="nav-item active">
                           <a class="nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#about">About Me</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#portfolio">Portfolio</a>
                         </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                         <a class="nav-link" href="#contact">Contact</a>
                        </li>
                     </ul>
                  </div>
                </nav>          
         </div>
        )
    }
}

export default Navbar
