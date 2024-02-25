import React, {useContext, useState} from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { FaLock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { MdPerson, MdCall, MdMail, MdLock } from "react-icons/md";
import "./Login.css";
import { UserContext } from '../Context/UserContext'; // import the context
import { useNavigate } from "react-router-dom";




const Login = () => {
    const [mode, setMode] = useState("login");
    const { setUsername } = useContext(UserContext);
    const navigate = useNavigate();

    const validateLogin = (event: React.FormEvent<HTMLFormElement>): void => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get email and password input elements and values:
        const emailInput = document.querySelector<HTMLInputElement>(
            'input[name="email"]'
        );
        const emailValue = emailInput?.value || "";
        const passwordInput = document.querySelector<HTMLInputElement>(
            'input[type="password"]'
        );
        const passwordValue = passwordInput?.value || "";

        // Check if email or password is empty (let the form handle it).
        if (!emailValue || !passwordValue) return;

        // Perform validation if email and password are according to the rules.
        if (!isValidEmail(emailValue)) {
            //displayError("Invalid email address", emailInput!);
            console.log('error email');
            return;
        }

        setUsername(emailValue);

        navigate("/");


    };

    const validateSignUp = (event: React.FormEvent<HTMLFormElement>) => {
        // Add your login validation logic here
        event.preventDefault();
    };

    const validatePasswordRecover = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your login validation logic here
        //...
        setMode("passwordChange");
    };

    const validatePasswordChange = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your login validation logic here

        //Returns the user to the login screen (after successfully user password changed)
        setMode("login");
    };

    // Email validation rules
    function isValidEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    const recoverPassword = () => {
        setMode("passwordRecover");
    };
    const displaySignUp = () => {
        setMode("signUp");
    };
    const displayLogin = () => {
        setMode("login");
    };

    return (
        <Container>
            {mode === "login" && (
                <Container id="loginWrapper" className="wrapper">
                    <div className="form-box login">
                        <h1>כניסה לחשבון שלי</h1>
                        <Form onSubmit={validateLogin}>
                            <div className="input-box">
                                <FormControl
                                    type="text"
                                    name="email"
                                    required
                                    className="custom-input"
                                />
                                <Form.Label>דואר אלקטרוני*</Form.Label>
                                <span className="icon">
                  <IoIosMail />
                </span>
                            </div>
                            <div className="input-box">
                <span className="icon">
                  <FaLock />
                </span>
                                <FormControl
                                    type="password"
                                    required
                                    className="custom-input"
                                />
                                <Form.Label>סיסמא*</Form.Label>
                            </div>
                            <div className="remember-forget">
                                <a href="#" onClick={recoverPassword}>
                                    {" "}
                                    שיחזור סיסמא
                                </a>
                                <Form.Check type="checkbox" label="זכור אותי" />
                            </div>

                            <Button type="submit" className="btn-login">
                                כניסה
                            </Button>

                            <div className="endForm-div">
                                <p>
                                    {" "}
                                    עדיין לא רשום?{" "}
                                    <a href="#" onClick={displaySignUp} className="register-link">
                                        {" "}
                                        הרשם
                                    </a>{" "}
                                </p>
                            </div>
                        </Form>
                    </div>
                </Container>
            )}

            {mode === "signUp" && (
                <Container id="signUpWrapper" className="signup-wrapper">
                    <div className="form-box signin">
                        <h1>משתמש חדש</h1>
                        <Form onSubmit={validateSignUp}>
                            <div className="input-box">
                <span className="icon">
                  <MdPerson />
                </span>
                                <FormControl
                                    type="text"
                                    name="name"
                                    required
                                    className="custom-input"
                                />
                                <Form.Label>שם מלא*</Form.Label>
                            </div>

                            <div className="input-box">
                <span className="icon">
                  <MdCall />
                </span>
                                <FormControl
                                    type="number"
                                    inputMode="numeric"
                                    name="phone"
                                    required
                                    className="custom-input"
                                />
                                <Form.Label>מספר טלפון נייד*</Form.Label>
                            </div>

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
                                יצירת חשבון חדש
                            </Button>

                            <div className="endForm-div">
                                <p>
                                    כבר רשום?{" "}
                                    <a href="#" className="register-link" onClick={displayLogin}>
                                        התחברות
                                    </a>
                                </p>
                            </div>
                        </Form>
                    </div>
                </Container>
            )}

            {mode === "passwordRecover" && (
                <Container id="passRecoverWrapper" className="wrapper">
                    <div className="form-box recover">
                        <h1>שחזור סיסמה</h1>
                        <Form className="form-group" onSubmit={validatePasswordRecover}>
                            <div className="input-box">
                <span className="icon">
                  <IoIosMail />
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

            {mode === "passwordChange" && (
                <Container id="passChangeWrapper" className="wrapper">
                    <div className="form-box change">
                        <h1>שינוי סיסמה</h1>
                        <Form className="form-group" onSubmit={validatePasswordChange}>
                            <div className="input-box">
                <span className="icon">
                  <FaLock />
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
                  <FaLock />
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

export default Login;