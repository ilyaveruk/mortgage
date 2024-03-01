import React, {ReactNode} from "react";
import {Col, Container, Row} from "react-bootstrap";
import Divider from "../Utils/Divider";

interface MortgageProps {
    children: ReactNode;
}
const MortgagePage: React.FC<MortgageProps> = ({children}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>מעוניין לקחת משכנתא חדשה</h2>
                    <h1 className={"text-success"} >איפה הכי כדאי לי לקחת משכנתא</h1>
                    <Divider/>
                </Col>
            </Row>
            <Row>
                {children}
            </Row>
        </Container>
    );
}

export default MortgagePage;
