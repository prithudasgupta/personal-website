import React, { Component } from 'react'
import ImageRect from './ImageRect';
import '../App.css';

export default class Professional extends Component {
    render() {
        return (
            <div className="Professional">
                <h1>Professional</h1>
                <h4 class="block-summary"> I have always been an aspiring software engineer and here are some of the amazing experiences I have had in the field! </h4>
                <ImageRect topic="Facebook: Summer 2020" caption="Because of the COVID-19 Pandemic, my internship at Facebook for the summer of 2020, which would 
                    have been hosted in Menlo Park, was remote. I worked on the Video Ranking Team on a offline evaluation framework for candidate generation." imgurl="professional/facebook.png"></ImageRect>

                <ImageRect topic="Google: Summer 2019" caption="As an Engineering Practicum intern, I worked on the Shasta team within Google Ads in the Sunnyvale, CA
                    office. My team worked on writing a learning algorithm to reduce cache misses when advertisement requests were queried." imgurl="professional/google.png"></ImageRect>
                <ImageRect topic="Vistaprint: Summer 2018" caption="After my freshmen year, I worked at Vistaprint in Waltham, MA as a software engineering intern. 
                    I worked on the Hatchery team to create a Facebook messenger bot that customers can use to build custom phone cases. " imgurl="professional/vistaprint.png"></ImageRect>

                <ImageRect topic="Boston University: Summer 2016" caption="Before my senior year of high school, I worked within a Human-Computer Interaction research group at Boston University to 
                    create an adaptable email interface for users with disabilities using the Gmail API." imgurl="professional/bu.png"></ImageRect>
            </div>
        )
    }
}