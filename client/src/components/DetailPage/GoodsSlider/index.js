import React, { Fragment } from 'react';
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import { classes } from "./style"

const GoodsSlider = (props) => {
    console.log(props);
    
    const {
        slider,
        imageSize
    } = classes;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
      };
    
    console.log(props);
      

    

    return (
        <Fragment>
            <Helmet>
                <link
                rel="stylesheet"
                type="text/css"
                charset="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Helmet>
            <Slider {...settings} className = {slider}>
                <img className = {imageSize} src= {props.images[1]} alt=""/>
                <img className = {imageSize} src= {props.images[2]} alt=""/>
                <img className = {imageSize} src= {props.images[3]} alt=""/>
            </Slider>
        </Fragment>
    )
}

export default GoodsSlider;