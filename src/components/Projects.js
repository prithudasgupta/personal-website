import React, { Component } from 'react'
import ImageBox from './ImageBox';

export default class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <h1>Projects</h1>
                <h4 class="block-summary">Be sure to check out some of my past programming projects on GitHub.</h4>

                <div className="portfolio-row">
                <ImageBox topic="Tanks" caption="Inspired by Wii Tanks, an online game written in Java and JavaScript where a user controlled tank must destroy AI enemy tanks." imgurl="projects/tanks.png"></ImageBox>

                <ImageBox topic="License Plate Detector" caption="Given the picture of a car, OpenCV edge detection finds a bounding box of the car's license plate and a neural network then read the characters of that plate." imgurl="projects/license.png"></ImageBox>
                </div>
                <div className="portfolio-row">
                <ImageBox topic="Music Genre Classification" caption="Fully connected, convolutional, and recurrent neural networks were trained in Tensorflow to identify the genre of a five second music clip. " imgurl="projects/music.png"></ImageBox>

                <ImageBox topic="Fantasy Game Bot" caption="BERT and GPT2 were trained in PyTorch to model fantasy game agents that could reasonably speak, act, and emote in a game world." imgurl="projects/light.png"></ImageBox>
                </div>

            </div>
        )
    }
}