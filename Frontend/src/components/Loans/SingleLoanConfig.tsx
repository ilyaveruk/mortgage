import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SingleLoanConfig = () => {
    const boxTexts = ['יש ליצור קשר עם  <a href="#">דוגמא לבנק יהב</a>', 'נא לספק ת.ז., פרטי חשבון בנק,פרטים נוספים לפי הצורך', 'יש לשלוח 3 משכורות אחרונות', 'הכסף מתקבל בחשבון'];
    const randomText = 'מחפש נותן שירות או צריך עזרה בתהליך? ';
    const clickableWord = 'פנה אלינו לפרטים';
    const additionalLines = ['עליות משוערות', 'פתיחת תיק: 1000 ש"ח', 'עמלת ביצוע פעולה: 0.1%'];

    return (
        <Container fluid style={{  minHeight: '40vh', paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Row xs={12} className="justify-content-md-center text-center">
                {boxTexts.map((text, index) => (
                    <React.Fragment key={index}>
                        <Col xs={12} md={2} className="mb-4">
                            <div className="p-3" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                                <div dangerouslySetInnerHTML={{ __html: text }} />
                            </div>
                        </Col>
                        {index < boxTexts.length - 1 && (
                            <Col xs={12} md={1} className="d-flex justify-content-center align-items-center">
                                <div style={{ fontSize: '2em' }}>🡄</div>
                            </Col>
                        )}
                    </React.Fragment>
                ))}
                <Col xs={12} md={8} className="mb-4">
                    <p>{randomText}<a href="#">{clickableWord}</a></p>
                    {additionalLines.map((line, lineIndex) => (
                        <p key={lineIndex}>{lineIndex === 0 ? <strong>{line}</strong> : line}</p>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default SingleLoanConfig