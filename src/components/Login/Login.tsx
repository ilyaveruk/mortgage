import React, { useContext } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { MdMail, MdLock } from "react-icons/md";
import "./Login.css";
import { UserContext } from "../Context/UserContext"; // import the context
import { useNavigate } from "react-router-dom";

const Login = () => {
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
            console.log("error email");
            return;
        }

        setUsername(emailValue);
        localStorage.setItem("username", emailValue);

        navigate("/");
    };

    // Email validation rules
    function isValidEmail(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    return (
        <Container>
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
                  <MdMail />
                </span>
                        </div>
                        <div className="input-box">
                <span className="icon">
                  <MdLock />
                </span>
                            <FormControl
                                type="password"
                                required
                                className="custom-input"
                            />
                            <Form.Label>סיסמא*</Form.Label>
                        </div>
                        <div className="remember-forget">
                            <a href="/password-recovery">
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
                                <a href="/signup" className="register-link">
                                    {" "}
                                    הרשם
                                </a>{" "}
                            </p>
                        </div>
                    </Form>
                </div>
            </Container>
        </Container>
    );
};

export default Login;