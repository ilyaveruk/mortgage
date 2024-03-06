import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MultipleLoan.css';

const MultipleLoan = () => {
    const boxTexts = ['הגשת בקשה פרטנית בבנק', 'הבנק בודק את הבקשה', 'החלטה של הבנק האם לאשר הלוואה פרטנית'];
    const randomText = 'מחפש עזרה בתהליך? ';
    const clickableWord = 'פנה אלינו לפרטים';
    const additionalLines = ['עליות משוערות', 'פתיחת בקשה פרטנית: 500 ש"ח'];

    return (
        <Container fluid style={{  minHeight: '40vh', paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Row xs={12} className="justify-content-md-center text-center">
                <p style={{color: 'red'}}><strong>אין לך אפשרות לקחת כמה הלוואות עבור סכום הקטן מ100 אלף ש"ח</strong>
                </p>
                <p><strong>אופציות אחרות</strong></p>

                {boxTexts.map((text, index) => (
                    <React.Fragment key={index}>
                        <Col xs={12} md={2} className="instruction-text-box-container">
                            <div className="p-3 instruction-text-box" style={{backgroundColor: '#fff', borderRadius: '10px'}}>
                                <div dangerouslySetInnerHTML={{__html: text}}/>
                            </div>
                        </Col>
                        {index < boxTexts.length - 1 && (
                            <Col xs={12} md={2} className="d-flex justify-content-center align-items-center arrow">
                                <div className={"d-none d-md-flex"} style={{fontSize: '2em'}}>🡄</div>
                                <div className={"d-flex d-md-none"} style={{fontSize: '2em'}}>🡇</div>
                            </Col>
                        )}
                    </React.Fragment>
                ))}
                <Col xs={12} md={8} className="mb-4">
                    <p>{randomText}<a href="/contact-us">{clickableWord}</a></p>
                    {additionalLines.map((line, lineIndex) => (
                        <p key={lineIndex}>{lineIndex === 0 ? <strong>{line}</strong> : line}</p>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default MultipleLoan;
