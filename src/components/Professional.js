import React, { Component } from 'react'
import ImageBox from './ImageBox';
import '../App.css';

export default class Professional extends Component {
    render() {
        return (
            <div className="Professional">
                <h1>Professional</h1>
                <p> I have always been an aspiring software engineer and here are some of the amazing experiences I have had in the field! </p>
                
                <ImageBox topic="Facebook: Summer 2020" caption="Because of the COVID-19 Pandemic, my software engineering internship at Facebook for the summer of 2020, which would 
                    have been hosted in Menlo Park, is now remote." imgurl="professional/facebook.png"></ImageBox>

                <ImageBox topic="Google: Summer 2019" caption="As an Engineering Practicum intern, I worked on the Shasta team within Google Ads in the Sunnyvale, CA
                    office. My team worked on writing a learning algorithm to reduce cache misses when advertisement requests were queried. " imgurl="professional/google.png"></ImageBox>

                <ImageBox topic="Vistaprint: Summer 2018" caption="After my freshmen year, I worked at Vistaprint in Waltham, MA as a software engineering intern. 
                    I worked on the Hatchery team to create a Facebook messenger bot that customers can use to build custom phone cases. " imgurl="professional/vistaprint.png"></ImageBox>

                <ImageBox topic="BU: Summer 2016" caption="Before my senior year of high school, I worked within a Human-Computer Interaction research group at Boston University to 
                    create an adaptable email interface for users with disabilities using the Gmail API." imgurl="professional/bu.png"></ImageBox>
            </div>
        )
    }
}