import React, { Component } from 'react'
import ImageRect from './ImageRect';
import '../App.css';

export default class Professional extends Component {
    render() {
        return (
            <div className="Professional">
                <h1>Professional</h1>
                <h4 class="block-summary"> I have always been an aspiring software engineer and here are some of the amazing experiences I have had in the field! </h4>
                <ImageRect topic="Meta: Summer 2021 - Present" caption="I have worked as a Software Engineer on the Probability IG Ranking team. Our team tunes several
                Instagram ranking models and researches techniques to decide the best posts and order in which to show them to the user." imgurl="professional/meta.png"></ImageRect>

                <ImageRect topic="Facebook: Summer 2020" caption="As a Software Engineering intern, I worked with the Video Ranking team on an offline evaluation framework for video recommendations in the candidate generation stage." imgurl="professional/facebook.png"></ImageRect>

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