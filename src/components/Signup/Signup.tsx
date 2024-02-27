import React, { useContext, useState } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { MdPerson, MdCall, MdMail, MdLock } from "react-icons/md";
import "./Signup.css";
import { UserContext } from "../Context/UserContext"; // import the context
import { useNavigate } from "react-router-dom";

let errorDisplayed: boolean = false;

const Signup = () => {
  const { setUsername } = useContext(UserContext);
  const navigate = useNavigate();

  const validateSignUp = (event: React.FormEvent<HTMLFormElement>): void => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Get email and password input elements and values:
    const emailInput = document.querySelector<HTMLInputElement>('input[name="email"]');
    const emailValue = emailInput?.value || "";
    // Perform validation if email is according to the rule.
    if (!isValidEmail(emailValue)) {
      displayError("Invalid email address", emailInput!);
      return;
    }
    //TODO: send data to backend 

    setUsername(emailValue);
    localStorage.setItem("username", emailValue);
    navigate("/");
  };

  // Email validation rules
  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Display timed error message to user
  function displayError(message: string, inputElement: HTMLElement) {
    if (!errorDisplayed) {
      const errorContainer: HTMLDivElement = document.createElement("div");
      errorContainer.classList.add("error-messages");
      errorContainer.textContent = message;
      errorContainer.style.color = "red";
      errorDisplayed = true;
  
      const parentContainer: HTMLElement | null = inputElement.parentElement;
      
      if (parentContainer) {
        parentContainer.appendChild(errorContainer);
  
        // Automatically remove the error message after 6 seconds
        setTimeout(() => {
          if (errorContainer.parentNode === parentContainer) {
            parentContainer.removeChild(errorContainer);
            errorDisplayed = false; // Reset errorDisplayed flag
          }
        }, 6000);
      }
    }
  }

  return (
    <Container>
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
