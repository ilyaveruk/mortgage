import React, {useEffect, useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import pdfFile from "../../Assets/file_pdf.pdf"
import Divider from "../Utils/Divider";
import './SingleLoan.css';
import {useNavigate} from "react-router-dom";

const SingleLoan = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [switchOn, setSwitchOn] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setUsername(localStorage.getItem('username') || '');
    }, []);

    const handleLoanAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoanAmount(Number(event.target.value));
    };

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSwitchOn(event.target.checked);
    };

    const isFormComplete = () => {
        if (!username) navigate("/login");
        return loanAmount > 0 && switchOn;
    };

    return (
        <div style={{padding: '51px 0' }}>
            <h1 className="text-center p-3">הלוואה פרטית</h1>
            <Divider/>
            <Form className="custom-form-loan">
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="m-5">
                            <Form.Label>שם בנק בו מתנהל חשבונך</Form.Label>
                            <Form.Select>
                                <option>בנק דיסקונט לישראל בע"מ</option>
                                <option>בנק הפועלים בע"מ</option>
                                <option>בנק "יהב" לעובדי המדינה בע"מ</option>
                                <option>בנק ירושלים בע"מ</option>
                                <option>בנק לאומי לישראל בע"מ</option>
                                <option>וואן זירו הבנק הדיגיטלי בע"מ</option>
                                <option>בנק מזרחי טפחות בע"מ</option>
                                <option>בנק מסד בע"מ</option>
                                <option>בנק מרכנתיל דיסקונט בע"מ</option>
                                <option>הבנק הבינלאומי הראשון לישראל בע"מ</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="m-5">
                            <Form.Label>כמה כסף אתה מעוניין להלוות ?</Form.Label>
                            <div dir={"ltr"} className="d-flex justify-content-between align-items-center">
                                <span>0</span>
                                <Form.Range min="0" max="100000" step="1000" value={loanAmount}
                                            onChange={handleLoanAmountChange}/>
                                <span>100000</span>
                            </div>

                            <div className="text-center mt-2">
                                <strong>{loanAmount + " ש\"ח"}</strong>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                    <Form.Group className="m-5">
                            <Form.Label>בחר שיטת החזר רצויה</Form.Label>
                            <Form.Select>
                                <option>ריבית פריים</option>
                                <option>ריבית קבועה צמודה למדד</option>
                                <option>ריבית קבועה לא צמודה</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group className="m-5">
                            <Form.Label>אזרחות נוכחית</Form.Label>
                            <Form.Select>
                                <option>ישראלית</option>
                                <option>אמריקאית</option>
                                <option>אירופאית</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>
                </Row>
                <Row>

                    <Col>
                        <Form.Group className="m-1">
                            <Form.Label>ידוע לי שההצעה היא רק לאומדן בלבד</Form.Label>
                            <Form.Check inline type="checkbox"/>
                        </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="m-1">
                            <Form.Label>
                                קראתי ואני מסכים
                                <a href={pdfFile} target="_blank" rel="noopener noreferrer">
                                    <span className=""> לתקנון</span>
                                </a>
                            </Form.Label>
                            <Form.Switch inline onChange={handleSwitchChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                <Button  type="submit" disabled={!isFormComplete()} className="mt-5 custom-btn-single-loan"
                        style={{width: "100px"}}>
                    חשב
                </Button>
            </Form>
        </div>
    );
}

export default SingleLoan;
