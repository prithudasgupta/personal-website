import React, { Component } from 'react'
import ImageCarousel from './ImageCarousel';

export default class Personal extends Component {
    render() {
        return (
            <div className="Personal">
                <h1>Personal</h1>
                <p>Here are some photos from my recent travels that I would like to share with you! </p>
                <ImageCarousel imgUrls={
                    ["personal/chapel-bridge.jpg", "personal/boston-harbor.jpg", "personal/cancun-sunrise.jpg", "personal/effiel.jpg", "personal/lake-lucerne.jpg", "personal/standing-glaciers.jpg", "personal/vienna.jpg", "personal/trevi-fountain.jpg", "personal/golden-gate.jpg", "personal/swiss-train.jpg", "personal/venice-cruise.jpg", "personal/montreux-sunset.jpg"]} 
                    captions={["Chapel Bridge in Lucerne, Switzerland", "View of Boston over Charles River", "Sunrise in Cancun, Mexico", "Eiffel Tower", "Lake Lucerne", "Glaciers in Switzerland", "Streets of Vienna", "Trevi Fountain in Rome", "Golden Gate Bridge", "Swiss train ride through the Alps", "Nighttime gondola ride in Venice", "Sunset on Lake Geneva in Montreux"]}></ImageCarousel>
            </div>
        )
    }
}