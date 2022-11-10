import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <h1>Connect</h1>
                <h4 class="block-summary">Thank you for visiting my portfolio website! </h4>
                <div class="contact-row">
                <a href="https://github.com/prithudasgupta" class="contact"><img src={require("../img/contact/github-icon.png")} alt='GitHub'/></a>
                <a href="mailto:prithudasgupta@gmail.com" class="contact"><img src={require("../img/contact/email-icon.png")} alt='Email'/></a>
                <a href="https://www.linkedin.com/in/prithu-dasgupta-0378ba150/" class="contact"><img src={require("../img/contact/linkedin-icon.png")} alt='LinkedIn'/></a>
                </div>
            </div>
        )
    }
}