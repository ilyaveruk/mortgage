import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './MultipleLoan.css';


const MultipleLoan = () => {
    const boxTexts = ['Box 1 Text', 'Box 2 Text', 'Box 3 Text', 'Box 4 Text'];

    return (
        <div style={{padding: '51px 0' }}>
            <Row className="text-center">
                {boxTexts.map((text, index) => (
                    <Col key={index} xs={6} md={3}>
                        <div className="chart-box">{text}</div>
                    </Col>
                ))}
            </Row>
            <div className="arrow"></div> {}
        </div>
    );
}

export default MultipleLoan;