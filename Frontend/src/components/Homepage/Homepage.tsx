import React from 'react';
import {Button, Carousel, Container} from "react-bootstrap";
import m1 from "../../Assets/images/mortgage1.png";
import m2 from "../../Assets/images/mortgage2.png";
import m3 from "../../Assets/images/mortgage3.png";
import bg1 from "../../Assets/images/bgImage1.jpg"
import bg2 from "../../Assets/images/bgImage2.jpg"
import bg4 from "../../Assets/images/bgImage4.jpg"
import bg5 from "../../Assets/images/bgImage5.jpg"
import './Homepage.css';
import Divider from "../Utils/Divider";

const Homepage = () => {
    return (
        <div>
            <Carousel interval={2500} style={{color: "#000000"}}>
                <Carousel.Item>
                    <img
                        className={"carousel-img"}
                        src={bg1}
                        alt="Background 1"
                    />
                    <Carousel.Caption>
                        <h1>הצטרפו היום למיליוני לקוחות שלקחו משכנתא</h1>
                        <Button className="custom-btn" href="/single-loan">להגשת בקשה</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"carousel-img"}
                        src={bg2}
                        alt="Background 2"
                    />
                    <Carousel.Caption>
                        <h1>באיזה בנק המשכנתא הכי מתאימה לכם?</h1>
                        <Button className="custom-btn" href="/check-loan">לחישוב מסלולי המשכנתא</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"carousel-img"}
                        src={bg4}
                        alt="Background 4"
                    />
                    <Carousel.Caption>
                        <h1>תהליך פשוט לקבלת המשכנתא בליווי של המומחים שלנו</h1>
                        <Button className="custom-btn" href="/contact-us">צרו קשר</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={"carousel-img"}
                        src={bg5}
                        alt="Background 5"
                    />
                    <Carousel.Caption>
                        <h1>הכירו את הפרטנרים שלנו</h1>
                        <Button className="custom-btn" onClick={() => window.scrollTo(0, 700)}>לרשימת הבנקים</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container>
                <h1 className="text-center p-3">עובדים עם כל הבנקים המובילים בישראל</h1>
                <Divider/>

                <Carousel style={{color: "#000000"}} className={"w-100"}>
                    <Carousel.Item>
                        <img
                            className={"bank-img"}
                            src={m1}
                            alt="First slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={"bank-img"}
                            src={m2}
                            alt="Second slide"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className={"bank-img"}
                            src={m3}
                            alt="Third slide"/>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default Homepage;
