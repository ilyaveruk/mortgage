import React, {useContext} from "react";
import {Container, Form, FormControl, Button} from "react-bootstrap";
import {MdMail, MdLock} from "react-icons/md";
import "./Login.css";
import {UserContext} from "../Context/UserContext"; // import the context
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {displayError} from "../../utils/utils";
const Login = () => {
    const {setUsername} = useContext(UserContext);
    const navigate = useNavigate();
    let errorDisplayed: boolean = false;

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

        console.log(emailValue, passwordValue);
        // Send data to backend
        axios.post(`${process.env.BACKEND_URL}/login`, {
            email: emailValue,
            password: passwordValue

        })
            .then((result) => {
                setUsername(emailValue);
                localStorage.setItem("username", emailValue);
                localStorage.setItem("userID", result.data.userId)
                navigate("/");
            })
            .catch(error => {
                displayError("Sorry..This user does not exist", passwordInput!, errorDisplayed);
            });
    };



    return (
        <Container  style={{padding: '65px 0' }}>
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
                <MdMail/>
              </span>
                        </div>
                        <div className="input-box">
              <span className="icon">
                <MdLock/>
              </span>
                            <FormControl type="password" required className="custom-input"/>
                            <Form.Label>סיסמא*</Form.Label>
                        </div>
                        <div className="remember-forget">
                            <a href="/password-recovery"> שיחזור סיסמא</a>
                            <Form.Check type="checkbox" label="זכור אותי"/>
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
