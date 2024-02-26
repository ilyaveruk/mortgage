import React, {ChangeEvent, useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import './MortgageForm.css';
import pdfFile from "../../Assets/file_pdf.pdf";
import {Link} from "react-router-dom";

/**
 * Mortgage calculation form
 * User enters bank and personal details along with the mortgage amount
 * to calculate the best choice of bank for his mortgage
 * @constructor
 */
const MortgageForm = () => {
    //COMPONENT STATES
    const [selectedBankOption, setSelectedBankOption] = useState("");
    const [selectedPropertyOption, setSelectedPropertyOption] = useState("");
    const [selectedCitizenshipOption, setSelectedCitizenshipOption] = useState("");
    const [loanAmount, setLoanAmount] = useState(50);
    const [switchOn, setSwitchOn] = useState(false);

    //COMPONENT EVENT HANDLERS
    /**
     * Updates the selected bank
     * @param event the click event that triggered the method
     */
    const handleBankSelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedBankOption(event.target.value);
    };

    /**
     * Updates the selected property type
     * @param event the click event that triggered the method
     */
    const handlePropertySelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedPropertyOption(event.target.value);
    };

    /**
     * Updates the selected citizenship
     * @param event the click event that triggered the method
     */
    const handleCitizenshipSelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCitizenshipOption(event.target.value);
    };

    /**
     * Alters the loan amount based on the position of the Range control
     * @param event the drag event that triggered the method
     */
    const handleLoanAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoanAmount(Number(event.target.value));
    };

    /**
     * Alters the state of the T&C switch
     * @param event the click event that triggered the method
     */
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSwitchOn(event.target.checked);
    };

    /**
     * If the terms & conditions are accepted and the loan amount is valid, returns true
     */
    const isFormComplete = () => {
        return loanAmount > 0 && switchOn;
    };

    return (
        <Form>
            <Row className="mb-3 py-3">
                <Col>
                    <Form.Group controlId="formPropertyType">
                        <Form.Label>* אני מעוניין לקחת משכנתא עבור</Form.Label>
                        <Form.Select value={selectedPropertyOption} onChange={handlePropertySelect}>
                            <option disabled value={""}>
                                לחץ כדי לבחור
                            </option>
                            <option>נכס חדש</option>
                            <option>נכס משופץ</option>
                            <option>נכס בבנייה</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formBankName">
                        <Form.Label>* שם הבנק בו מתנהל חשבונך</Form.Label>
                        <Form.Select value={selectedBankOption} onChange={handleBankSelect}>
                            <option disabled value={""}>
                                לחץ כדי לבחור
                            </option>
                            <option>בנק דיסקונט לישראל</option>
                            <option>בנק הפועלים</option>
                            <option>בנק "יהב" לעובדי המדינה</option>
                            <option>בנק ירושלים</option>
                            <option>בנק לאומי לישראל</option>
                            <option>וואן זירו הבנק הדיגיטלי</option>
                            <option>בנק מזרחי טפחות</option>
                            <option>בנק מסד</option>
                            <option>בנק מרכנתיל דיסקונט</option>
                            <option>הבנק הבינלאומי הראשון לישראל</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3 py-3">
                <Col>
                    {/*TODO: alter slider to show value on cursor (make it a separate component?)*/}
                    <Form.Group controlId="formPropertyType">
                        <Form.Label>* כמה כסף אתה מעוניין להלוות?</Form.Label>
                        <div dir={"ltr"} className="d-flex justify-content-between align-items-center">
                            <span>0</span>
                            <Form.Range
                                min={"0"}
                                max={"100000"}
                                step={"1000"}
                                value={loanAmount}
                                onChange={handleLoanAmountChange}
                            />
                            <span>100000</span>
                        </div>
                        <div className="text-center mt-2">
                            <strong>{loanAmount + " ש\"ח"}</strong>
                        </div>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="formCitizenship">
                        <Form.Label>* אזרחות נוכחית</Form.Label>
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
            <Row className="mb-3 py-5">
                <Form.Group className="m-1">
                    <Form.Label>
                        קראתי ואני מסכים
                        <a href={pdfFile} target="_blank" rel="noopener noreferrer">
                            <span className=""> לתקנון</span>
                        </a>
                    </Form.Label>
                    <Form.Switch inline onChange={handleSwitchChange}/>
                </Form.Group>
            </Row>
            <Row>
                <Col>
                    <Button variant={"primary"} type={"submit"} disabled={!isFormComplete()}>
                        <Link className={"text-white text-decoration-none"} to={"/profitability-table"}>חשב</Link>
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

export default MortgageForm;