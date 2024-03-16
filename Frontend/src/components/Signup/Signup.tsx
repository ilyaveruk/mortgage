import React, {useContext} from "react";
import {Container, Form, FormControl, Button} from "react-bootstrap";
import {MdPerson, MdCall, MdMail, MdLock} from "react-icons/md";
import "./Signup.css";
import {UserContext} from "../Context/UserContext"; // import the context
import {useNavigate} from "react-router-dom";
import {displayError,isValidEmail} from "../../utils/utils";
import axios from "axios";

let errorDisplayed: boolean = false;

const Signup = () => {
    const {setUsername} = useContext(UserContext);
    const navigate = useNavigate();

    const validateSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get form input elements and values:
        const nameInput = document.querySelector<HTMLInputElement>('input[name="name"]');
        const nameValue = nameInput?.value || "";

        const phoneInput = document.querySelector<HTMLInputElement>('input[name="phone"]');
        const phoneValue = phoneInput?.value || "";

        const emailInput = document.querySelector<HTMLInputElement>('input[name="email"]');
        const emailValue = emailInput?.value || "";

        const passwordInput = document.querySelector<HTMLInputElement>('input[name="password"]');
        const passwordValue = passwordInput?.value || "";

        const confirmPassInput = document.querySelector<HTMLInputElement>('input[name="confirmPass"]');
        const confirmPassValue = confirmPassInput?.value || "";

        // Perform validation if email is according to the rule.
        if (!isValidEmail(emailValue)) {
            displayError("Invalid email address", emailInput!, errorDisplayed);
            return;
        }

        // Check if passwords match
        if (passwordValue !== confirmPassValue) {
            displayError("Passwords do not match", confirmPassInput!, errorDisplayed);
            return;
        }

        // Send data to backend
        axios.post(`${process.env.BACKEND_URL}/register`, {
            name: nameValue,
            phone: phoneValue,
            email: emailValue,
            password: passwordValue
        })
            .then(() => {
                setUsername(emailValue);
                localStorage.setItem("username", emailValue);
                navigate("/");
            })
            .catch(error => {
                console.error('Error registering user', error);
            });
    };

    // Display timed error message to user

    return (
        <Container  style={{padding: '65px 0' }}>
            <Container id="signUpWrapper" className="signup-wrapper">
                <div className="form-box signin">
                    <h1>משתמש חדש</h1>
                    <Form onSubmit={validateSignUp}>
                        <div className="input-box">
              <span className="icon">
                <MdPerson/>
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
                <MdCall/>
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
                <MdMail/>
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
                <MdLock/>
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
                <MdLock/>
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
                                <a href="/login" className="register-link">
                                    התחברות
                                </a>
                            </p>
                        </div>
                    </Form>
                </div>
            </Container>
        </Container>
    );
};

export default Signup;
