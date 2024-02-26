import React from 'react';
import {Carousel, Container} from "react-bootstrap";
import m1 from "../../Assets/images/mortgage1.jpg";
import m2 from "../../Assets/images/mortgage2.jpg";
import m3 from "../../Assets/images/mortgage3.jpg";
import './Homepage.css';
import Divider from "../Utils/Divider";

const Homepage = () => {
    return (
        <Container>
            <h1 className="text-center p-3">ברוכים הבאים לאתר המשכנתאות שלנו</h1>
            <Divider/>
            <Carousel style={{color:"#000000" }}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={m1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={m2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={m3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>


        </Container>
    );
}

export default Homepage;