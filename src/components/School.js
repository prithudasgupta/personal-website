import React, { Component } from 'react'
import '../App.css';

export default class School extends Component {
    render() {
        return (
            <div className="School">
                <h1>School</h1>
                <p> I am a senior at Brown University studying Computer Science and Applied Mathematics. 
                    My relevant CS coursework with their updated websites linked are listed here:
                    <ul>
                        <li><a href="https://cs.brown.edu/courses/cs019/2017/">Accelerated Introduction to Computer Science</a>: Fall 2017</li>
                        <li><a href="http://cs.brown.edu/courses/cs032/">Introduction to Software Engineering</a>: Spring 2018</li>
                        <li><a href="https://cs.brown.edu/courses/csci0220/">Introduction to Discrete Structures and Probability</a>: Spring 2018</li>
                        <li><a href="http://cs.brown.edu/courses/csci0330/">Introduction to Computer Systems</a>: Fall 2018</li>
                        <li><a href="https://cs.brown.edu/courses/csci1410/">Artificial Intelligence</a>: Fall 2018</li>
                        <li><a href="https://cs.brown.edu/courses/csci1420/">Machine Learning</a>: Spring 2019</li>
                        <li><a href="https://cs.brown.edu/courses/csci1470/">Deep Learning</a>: Fall 2019</li>
                        <li><a href="https://cs.brown.edu/courses/csci1570/">Design and Analysis of Algorithms</a>: Fall 2019</li>
                        <li><a href="http://cs.brown.edu/courses/csci1430/">Computer Vision</a>: Spring 2020</li>
                        <li><a href="http://cs.brown.edu/courses/csci1460/">Computational Linguistics</a>: Spring 2020</li>
                    </ul>
                    Student clubs that  I am apart of include Hack@Brown and 180 Degrees Consulting. 
                    I am lucky enough to have been given the opportunity to TA for classes that have very much shaped my computer 
                    science education, as I have been a teaching assistant for Introduction to Computer Systems and both a
                    teaching assistant and head teaching assistant for Introduction to Software Engineering. 
                </p>                  
            </div>
        )
    }
}