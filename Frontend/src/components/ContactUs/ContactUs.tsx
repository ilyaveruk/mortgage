import React, {useEffect, useState} from "react";
import Divider from "../Utils/Divider";
import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import "./ContactUs.css";

const ContactUs: React.FC = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [info, setInfo] = useState("");
    const [reason, setReason] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [checkMail, setCheckMail] = useState(false);
    const [errorMail, setErrorMail] = useState(false);
    const location = useLocation();
    const username = localStorage.getItem("username");
    const navigate = useNavigate();
    useEffect(() => {
        setDisabled(validation());
    }, [firstName, lastName, mail, phone, reason, info]);

    const validation = () => {
        if (!username) navigate("/login");
        if (
            firstName === "" ||
            lastName === "" ||
            mail === "" ||
            phone === "" ||
            reason === "" ||
            info === ""
        ) {
            return true;
        }
        return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail);


    };
    const handleReasonSelect = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setReason(event.target.value);
    }

    const sendMail = () => {

        const userId = localStorage.getItem("userID");
        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                mail: mail,
                phone: phone,
                option: reason,
                info: info,
                userId: userId
            }),
        };
        fetch(`${process.env.BACKEND_URL}/sendmail`, requestOptions)
            .then((response) => response)
            .then(() => setCheckMail(true))
            .catch(() => {
                setErrorMail(true);
            });
    };

    if (errorMail) {
        return (
            <Alert variant="danger" dismissible className="m-5">
                <Alert.Heading>אופס! נראה שאירעה שגיאה..</Alert.Heading>
                <p>
                    נסה שוב מאוחר יותר
                </p>
            </Alert>
        );
    }

    if (checkMail) {
        return (
            <Alert variant="success" className="m-5">
                <Alert.Heading>תודה רבה! בקשתך התקבלה!</Alert.Heading>
                <p>
                    ברגע שנטפל בבקשתך נחזור אליך, המשך יום טוב!
                </p>
            </Alert>
        );
    }
    return (
        <div    >
            {location.pathname === '/large-loan' && <h1 className=" text-success">נא ליצור קשר</h1>}
            {location.pathname === '/large-loan' ? <h1>טופס יצירת קשר</h1> : <h1 className="p-3">טופס יצירת קשר</h1>}
            <Divider/>
            <div>
                <Form className="custom-form">
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Form.Group className="mx-5 my-4 text-right">
                                <Form.Label
                                    className="text-right "
                                    style={{
                                        position: "relative",
                                        textAlign: "right",
                                        display: "block",
                                        marginRight: "2px",
                                    }}
                                >
                                    שם משפחה{" "}
                                    <div
                                        style={{
                                            color: "red",
                                            position: "absolute",
                                            right: "-10px",
                                            top: "2px",
                                        }}
                                    >
                                        *
                                    </div>
                                </Form.Label>

                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="שם משפחה"
                                    dir="rtl"
                                    onChange={(event) => {
                                        setLastName(event.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group className="mx-5 my-4">
                                <Form.Label
                                    className="text-right "
                                    style={{
                                        position: "relative",
                                        textAlign: "right",
                                        display: "block",
                                        marginRight: "2px",
                                    }}
                                >
                                    שם פרטי
                                    <div
                                        style={{
                                            color: "red",
                                            position: "absolute",
                                            right: "-10px",
                                            top: "2px",
                                        }}
                                    >
                                        *
                                    </div>
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="שם פרטי"
                                    dir="rtl"
                                    onChange={(event) => {
                                        setFirstName(event.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Form.Group className="mx-5 my-4">
                                <Form.Label
                                    className="text-right "
                                    style={{
                                        position: "relative",
                                        textAlign: "right",
                                        display: "block",
                                        marginRight: "2px",
                                    }}
                                >
                                    דואר אלקטרוני
                                    <div
                                        style={{
                                            color: "red",
                                            position: "absolute",
                                            right: "-10px",
                                            top: "2px",
                                        }}
                                    >
                                        *
                                    </div>
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="דואר אלקטרוני"
                                    dir="rtl"
                                    onChange={(event) => {
                                        setMail(event.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group className="mx-5 my-4">
                                <Form.Label
                                    className="text-right "
                                    style={{
                                        position: "relative",
                                        textAlign: "right",
                                        display: "block",
                                        marginRight: "2px",
                                    }}
                                >
                                    מספר טלפון נייד
                                    <div
                                        style={{
                                            color: "red",
                                            position: "absolute",
                                            right: "-10px",
                                            top: "2px",
                                        }}
                                    >
                                        *
                                    </div>
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="phone"
                                    placeholder="מספר טלפון נייד"
                                    dir="rtl"
                                    onChange={(event) => {
                                        setPhone(event.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mx-5 my-4">
                                <Form.Label
                                    className="text-right "
                                    style={{
                                        position: "relative",
                                        textAlign: "right",
                                        display: "block",
                                        marginRight: "2px",
                                    }}
                                >
                                    נושא הפנייה
                                    <div
                                        style={{
                                            color: "red",
                                            position: "absolute",
                                            right: "-10px",
                                            top: "2px",
                                        }}
                                    >
                                        *
                                    </div>
                                </Form.Label>
                                <Form.Select
                                    dir="rtl"
                                    onChange={handleReasonSelect}
                                    value={reason}
                                >
                                    <option disabled value={""}>
                                        לחץ כדי לבחור
                                    </option>
                                    <option>זקוק להמלצה איזה בנק הכי כדאי לי</option>
                                    <option>שעות פעילות</option>
                                    <option>שאלה כללית</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group
                                className="mx-5 my-4"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label
                                    className="text-right "
                                    style={{
                                        position: "relative",
                                        textAlign: "right",
                                        display: "block",
                                        marginRight: "2px",
                                    }}
                                >
                                    פרטים נוספים
                                    <div
                                        style={{
                                            color: "red",
                                            position: "absolute",
                                            right: "-10px",
                                            top: "2px",
                                        }}
                                    >
                                        *
                                    </div>
                                </Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    placeholder=" פרטים נוספים "
                                    dir="rtl"
                                    onChange={(event) => {
                                        setInfo(event.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button
                        className="custom-btn-contact"
                        disabled={disabled}
                        onClick={() => {
                            sendMail();
                        }}
                        style={{width: "100px"}}
                    >
                        שלח
                    </Button>
                </Form>
            </div>
        </div>
    );
};
export default ContactUs;
