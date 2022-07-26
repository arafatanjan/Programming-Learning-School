import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './About.css'

const About = () => {
    return (
        <Container className='about-container w-50'>
            <Carousel className='carousel-container '>
                <Carousel.Item style={{ width: '38rem' }}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2017/01/23/09/21/learn-2001838_960_720.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='carousel-text'>First slide label</h3>
                        <p className='carousel-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carousel-container' style={{ width: '38rem' }}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2020/05/02/12/38/homeschooling-5121262_960_720.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='carousel-text'>Second slide label</h3>
                        <p className='carousel-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item style={{ width: '38rem' }}>
                    <img
                        className="d-block w-100"
                        src="https://cdn.pixabay.com/photo/2019/04/01/21/01/beebot-4096410_960_720.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='carousel-text'>Third slide label</h3>
                        <p className='carousel-text'>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
};

export default About;