import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import test1 from '../images/test1.jpg';
import test2 from '../images/test2.jpg';

import Carousel from 'react-bootstrap/Carousel'

class Slider extends Component {

    render() {
        return (
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={test1}
                        width = "1500px"
                        height = "600px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>New Fire Products</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={test2}
                        width = "1500px"
                        height = "600px"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Prime Video</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}


export default Slider;
