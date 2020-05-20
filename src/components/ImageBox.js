import React, { Component } from 'react'
import '../App.css';

export default class ImageBox extends Component {
    render() {
        return (
            <div className="portfolio-thumb">
                <img src={require("../img/" + this.props.imgurl)} alt=''/>
                <p> <b>{this.props.topic}</b> {this.props.caption}</p>
            </div>
        )
    }
}