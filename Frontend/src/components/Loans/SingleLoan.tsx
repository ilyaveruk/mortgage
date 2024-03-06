import React, { useState} from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import pdfFile from "../../Assets/file_pdf.pdf"
import Divider from "../Utils/Divider";
import {useNavigate} from "react-router-dom";
import "./SingleLoanConfig";
import "./SingleLoan.css";

const SingleLoan = () => {
    const [loanAmount, setLoanAmount] = useState(0);
    const [switchOn, setSwitchOn] = useState(false);
    const [selectedBank, setSelectedBank] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [selectedCitizenshipOption, setSelectedCitizenshipOption] = useState("");

    const username = localStorage.getItem('username') || '';

    const navigate = useNavigate();


    const handleLoanAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoanAmount(Number(event.target.value));
    };

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSwitchOn(event.target.checked);
    };
    const handleBankSelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedBank(event.target.value);
    };const handlePaymentMethod = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPaymentMethod(event.target.value);
    };
    const handleCitizenshipSelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCitizenshipOption(event.target.value);
    };


    const isFormComplete = () => {
        if ( !username|| username.length === 0){ navigate("/login"); return; }
        if (!switchOn) {alert("אנא אשר את תנאי השימוש");return;}
        if (loanAmount === 0) {alert("אנא בחר סכום הלוואה");return;}
        if (selectedBank === "") {alert("אנא בחר בנק");return;}
        if (paymentMethod === "") {alert("אנא בחר שיטת החזר");return;}
        if (selectedCitizenshipOption === "") {alert("אנא בחר אזרחות");return;}
        navigate("/single-loan-config");
    };

    return (
        <div>

            <h2 className="text-center mt-3">מעוניין לקחת הלוואה רגילה</h2>
            <h2 className="text-center">מעוניין לקחת הלוואה עד 100 אלף ש"ח</h2>
            <h1 className="text-success mb-2">אני מעוניין לקחת הלוואה אחת</h1>
            <Divider/>
            <Form className="custom-form-loan">
            <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="m-5">
                            <Form.Label>שם בנק בו מתנהל חשבונך</Form.Label>
                            <Form.Select value={selectedBank} onChange={handleBankSelect}>
                                <option disabled value={""}>
                                    לחץ כדי לבחור
                                </option>
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
                            <Form.Select value={paymentMethod} onChange={handlePaymentMethod}>
                                <option disabled value={""}>
                                    לחץ כדי לבחור
                                </option>
                                <option>ריבית פריים</option>
                                <option>ריבית קבועה צמודה למדד</option>
                                <option>ריבית קבועה לא צמודה</option>
                            </Form.Select>
                        </Form.Group>

                    </Col>
                    <Col>
                        <Form.Group className="m-5">
                            <Form.Label>אזרחות נוכחית</Form.Label>
                            <Form.Select value={selectedCitizenshipOption} onChange={handleCitizenshipSelect}>
                                <option disabled value={""}>
                                    לחץ כדי לבחור
                                </option>
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
                <Button type="submit" onClick={isFormComplete} className="mt-5 custom-btn-single-loan"
                        style={{width: "100px"}}>
                    חשב
                </Button>
            </Form>
        </div>
    );
}

export default SingleLoan;
