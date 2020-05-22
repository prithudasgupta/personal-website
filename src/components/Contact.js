import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <h1>Connect</h1>
                <h4 class="block-summary">Thank you for visiting my portfolio website! </h4>
                <div class="contact-row">
                <a href="mailto:prithu_dasgupta@brown.edu" class="contact"><img src={require("../img/contact/gmail.png")}/></a>
                <a href="https://www.linkedin.com/in/prithu-dasgupta-0378ba150/" class="contact"><img src={require("../img/contact/linkedin.png")}/></a>
                <a href="https://github.com/prithudasgupta" class="contact"><img src={require("../img/contact/github.png")}/></a>
                </div>
            </div>
        )
    }
}