import React, { useState } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import {  MdMail, MdLock } from "react-icons/md";
import "./PassRecovery.css";
import { useNavigate } from "react-router-dom";

const PassRecovery = () => {
    const [mode, setMode] = useState("passRecovery");
    const navigate = useNavigate();

    const validatePassRecovery = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your login validation logic here
        //...
        setMode("newPassChange");
    };

    const validatePasswordChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your login validation logic here

        //Returns the user to the login screen (after successfully user password changed)
        //setUsername(emailValue);
        //localStorage.setItem("username", emailValue);
        navigate("/");
    };


    return (
        <Container  style={{padding: '65px 0' }}>
            {mode === "passRecovery" && (
                <Container id="passRecoverWrapper" className="wrapper">
                    <div className="form-box recover">
                        <h1>שחזור סיסמה</h1>
                        <Form className="form-group" onSubmit={validatePassRecovery}>
                            <div className="input-box">
                <span className="icon">
                  <MdMail />
                </span>
                                <FormControl
                                    type="email"
                                    name="email"
                                    required
                                    className="custom-input"
                                />
                                <Form.Label>דואר אלקטרוני*</Form.Label>
                            </div>
                            <Button type="submit" className="btn-login">
                                שחזר סיסמה
                            </Button>
                        </Form>
                    </div>
                </Container>
            )}

            {mode === "newPassChange" && (
                <Container id="passChangeWrapper" className="wrapper">
                    <div className="form-box change">
                        <h1>שינוי סיסמה</h1>
                        <Form className="form-group" onSubmit={validatePasswordChange}>
                            <div className="input-box">
                <span className="icon">
                  <MdLock />
                </span>
                                <FormControl
                                    type="password"
                                    name="password"
                                    required
                                    className="custom-input"
                                />
                                <Form.Label>סיסמא*</Form.Label>
                            </div>

                            <div className="input-box">
                <span className="icon">
                  <MdLock />
                </span>
                                <FormControl
                                    type="password"
                                    name="confirmPass"
                                    required
                                    className="custom-input"
                                />
                                <Form.Label>אישור סיסמא*</Form.Label>
                            </div>

                            <Button type="submit" className="btn-login">
                                שמור
                            </Button>
                        </Form>
                    </div>
                </Container>
            )}
        </Container>
    );
};

export default PassRecovery;
