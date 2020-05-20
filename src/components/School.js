import React, { Component } from 'react'
import '../App.css';

export default class School extends Component {
    render() {
        return (
            <div className="School">
                <h1>School</h1>
                <p class="school-summary"> I am a rising senior at Brown University studying Computer Science and Applied Mathematics.  
                    I also have worked as a teaching assistant for Introduction to Computer Systems,
                    as both a teaching assistant and head teaching assistant for Introduction to Software Engineering, 
                    and an as organizing lead for Hack@Brown on their sponsorship team. 
                    My relevant CS coursework with their webpages linked are listed below:</p>
                    <div class="timeline">
                    <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                        <h2>Fall 2017</h2>
                        <p><a href="https://cs.brown.edu/courses/cs019/2017/" className="class_links">Accelerated Introduction to Computer Science</a></p>
                        </div>
                    </div>
                    <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                        <h2>Spring 2018</h2>
                        <p><a href="http://cs.brown.edu/courses/cs032/" className="class_links">Introduction to Software Engineering</a></p>
                        <p><a href="https://cs.brown.edu/courses/csci0220/" className="class_links">Introduction to Discrete Structures and Probability</a></p>
                        </div>
                    </div>
                    <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                        <h2>Fall 2018</h2>
                        <p><a href="http://cs.brown.edu/courses/csci0330/" className="class_links">Introduction to Computer Systems</a></p>
                        <p><a href="https://cs.brown.edu/courses/csci1410/" className="class_links">Artificial Intelligence</a></p>
                        </div>
                    </div>
                    <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                        <h2>Spring 2019</h2>
                        <p><a href="https://cs.brown.edu/courses/csci1420/" className="class_links">Machine Learning</a></p>
                        </div>
                    </div>
                    <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                        <h2>Fall 2019</h2>
                        <p><a href="https://cs.brown.edu/courses/csci1470/" className="class_links">Deep Learning</a></p>
                        <p><a href="https://cs.brown.edu/courses/csci1570/" className="class_links">Design and Analysis of Algorithms</a></p>
                        </div>
                    </div>
                    <div class="timeline-container timeline-right">
                        <div class="timeline-content">
                        <h2>Spring 2020</h2>
                        <p><a href="http://cs.brown.edu/courses/csci1430/" className="class_links">Computer Vision</a></p>
                        <p><a href="http://cs.brown.edu/courses/csci1460/" className="class_links">Computational Linguistics</a></p>
                        </div>
                    </div>
                    </div>    
            </div>
        )
    }
}