import React, { Component } from 'react'
import Professional from './Professional';
import School from './School';
import Projects from './Projects';
import Personal from './Personal';
import Contact from './Contact';
import '../App.css';

export default class Body extends Component {
    render() {
        return (
            <div className="Body">
                <Professional></Professional>
                <School></School>
                <Projects></Projects>
                <Personal></Personal>
                <Contact></Contact>
            </div>
        )
    }
}