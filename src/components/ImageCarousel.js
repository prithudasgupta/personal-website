import React, { Component } from 'react'

export default class ImageCarousel extends Component {
    constructor (props) {
        super(props);
    
        this.state = {
          currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
      }

    previousSlide () {
        const lastIndex = this.props.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide () {
        const lastIndex = this.props.imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        return (
            <div>
            <div className="carousel">
                <CarouselArrow
                direction="left"
                clickFunction={ this.previousSlide }
                glyph="&#706;" />

                <ImageSlide url={ this.props.imgUrls[this.state.currentImageIndex] } />

                <CarouselArrow
                direction="right"
                clickFunction={ this.nextSlide }
                glyph="&#707;" />
            </div>
            <p>{ this.props.captions[this.state.currentImageIndex] } </p>
            </div>
        )
    }
}

const CarouselArrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slide-arrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
);

const ImageSlide = ({ url }) => {
    // // let fullPath = {"../img/" + url};
    // // console.log(fullPath)
    // const styles = {
    //     // backgroundImage: `url(${url})`,
    //     backgroundImage: `url("../img/projects/light.png")`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center'
    // };

    return (
        <img src={require("../img/" + url)} className="slide"/>
    )

    // return (
    //     <div style={styles}></div>
    // );
}