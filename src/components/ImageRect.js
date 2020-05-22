import React, { Component } from 'react'
import '../App.css';

export default class ImageRect extends Component {
    render() {
        return (
            <div className="portfolio-rect">
                <img src={require("../img/" + this.props.imgurl)} alt='' class="portfolio-image"/>
                <p className="portfolio-summary"> <b>{this.props.topic}</b> {this.props.caption}</p>
            </div>
        )
    }
}