import React from 'react';
import {Carousel, Container} from "react-bootstrap";
import m1 from "../../Assets/images/mortgage1.png";
import m2 from "../../Assets/images/mortgage2.png";
import m3 from "../../Assets/images/mortgage3.png";
import bg1 from "../../Assets/images/bgImage1.jpg"
import bg2 from "../../Assets/images/bgImage2.jpg"
import bg3 from "../../Assets/images/bgImage3.jpg"
import bg4 from "../../Assets/images/bgImage4.jpg"
import bg5 from "../../Assets/images/bgImage5.jpg"
import './Homepage.css';
import Divider from "../Utils/Divider";

const Homepage = () => {
    return (
        <div>
            <Carousel interval={2500} style={{color: "#000000"}} >
                <Carousel.Item>
                    <img
                        src={bg1}
                        alt="Background 1"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={bg2}
                        alt="Background 2"
                        />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={bg3}
                        alt="Background 3"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={bg4}
                        alt="Background 4"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={bg5}
                        alt="Background 5"
                    />
                </Carousel.Item>
            </Carousel>

                <Container>
                    <h1 className="text-center p-3">ברוכים הבאים לאתר המשכנתאות שלנו</h1>
                    <Divider/>

                    <Carousel style={{color: "#000000"}} className={"w-100"}>
                        <Carousel.Item>
                            <img
                                src={m1}
                                alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={m2}
                                alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={m3}
                                alt="Third slide"/>
                        </Carousel.Item>
                    </Carousel>
                </Container>
        </div>
    );
}

export default Homepage;
