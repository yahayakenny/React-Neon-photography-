import React, { Component } from 'react';
import Navbar from "./Navbar";
import Hero from "./Hero";
import Intro from "./Intro";
import Works from "./Works";
import Journey from "./Journey";
import Contact from "./Contact";

export class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Hero/>
                <Intro/>
                <Works/>
                <Journey/>
                <Contact/>
            </div>
        )
    }
}

export default App
