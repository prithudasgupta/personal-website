import React, { Component } from 'react'
import ImageCarousel from './ImageCarousel';

export default class Personal extends Component {
    render() {
        return (
            <div className="Personal">
                <h1>Personal</h1>
                <h4 class="block-summary">Here are some photos from my recent travels that I would like to share with you! </h4>
                <ImageCarousel imgUrls={
                    ["personal/swiss-train.jpg", "personal/boston-harbor.jpg", "personal/cancun-sunrise.jpg", "personal/effiel.jpg", "personal/santorini.png", "personal/lake-lucerne.jpg", "personal/standing-glaciers.jpg", "personal/vienna.jpg", "personal/trevi-fountain.jpg", "personal/golden-gate.jpg", "personal/chapel-bridge.jpg", "personal/venice-cruise.jpg", "personal/montreux-sunset.jpg"]} 
                    captions={["Swiss train ride through the Alps", "View of Boston over Charles River", "Sunrise in Cancun, Mexico", "Eiffel Tower", "Sunset in Santorini", "Lake Lucerne", "Glaciers in Switzerland", "Streets of Vienna", "Trevi Fountain in Rome", "Golden Gate Bridge", "Chapel Bridge in Lucerne, Switzerland", "Nighttime gondola ride in Venice", "Sunset on Lake Geneva in Montreux"]}></ImageCarousel>
            </div>
        )
    }
}