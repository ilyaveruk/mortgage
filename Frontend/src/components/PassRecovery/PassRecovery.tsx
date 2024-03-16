import React, {useState} from "react";
import {Container, Form, FormControl, Button} from "react-bootstrap";
import {MdMail, MdLock} from "react-icons/md";
import "./PassRecovery.css";
import {useNavigate} from "react-router-dom";
import {isValidEmail, displayError} from "../../utils/utils";
import axios from "axios";


const PassRecovery = () => {
    const [mode, setMode] = useState("passRecovery");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    let errorDisplayed: boolean = false;
    // Validate email for password recovery form
    const validatePassRecovery = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add your login validation logic here
        // Get email and password input elements and values:
        const emailInput = document.querySelector<HTMLInputElement>(
            'input[name="email"]'
        );
        const emailValue = emailInput?.value || "";
        setEmail(emailValue);
        // Perform validation if email and password are according to the rules.
        if (!isValidEmail(emailValue)) {
            displayError("Invalid email address", emailInput!, errorDisplayed);
            return;
        }

        // Send data to backend
        axios.post(`${process.env.BACKEND_URL}/recovery`, {
            email: emailValue
        })
            .then(() => {

                setMode("newPassChange");
            })
            .catch(error => {
                displayError("Sorry..This user does not exist", emailInput!, errorDisplayed);
            });

    };
// Validate New password change form
    const validatePasswordChange = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        // Get password and confirmation password input elements and values:
        const passwordInput = document.querySelector<HTMLInputElement>('input[name="password"]');
        const passwordValue = passwordInput?.value || "";
        const confirmPassInput = document.querySelector<HTMLInputElement>('input[name="confirmPass"]');
        const confirmPassValue = confirmPassInput?.value || "";

        // Check if the new password and the confirmation password are the same
        if (passwordValue !== confirmPassValue) {
            displayError("Passwords do not match", confirmPassInput!, errorDisplayed);
            return;
        }

        // Send new password to backend
        axios.post(`${process.env.BACKEND_URL}/change-password`, {
            email: email,
            password: passwordValue
        })
            .then(() => {
                // Returns the user to the login screen (after successfully user password changed)
                console.log("Password changed successfully");
                navigate("/");
            })
            .catch(error => {
                displayError("Error changing password", passwordInput!, errorDisplayed);
            });
    };

    // Display error message to user


    return (
        <Container  style={{padding: '65px 0' }}>
            {mode === "passRecovery" && (
                <Container id="passRecoverWrapper" className="wrapper">
                    <div className="form-box recover">
                        <h1>שחזור סיסמה</h1>
                        <Form className="form-group" onSubmit={validatePassRecovery}>
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
