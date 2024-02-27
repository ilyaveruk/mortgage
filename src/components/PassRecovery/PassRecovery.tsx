import React, { useContext, useState } from "react";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { MdMail, MdLock } from "react-icons/md";
import "./PassRecovery.css";
import { UserContext } from "../Context/UserContext"; // import the context
import { useNavigate } from "react-router-dom";

let errorDisplayed: boolean = false;

const PassRecovery = () => {
  const [mode, setMode] = useState("passRecovery");
  const navigate = useNavigate();

  // Validate email for password recovery form  
  const validatePassRecovery = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add your login validation logic here
    // Get email and password input elements and values:
    const emailInput = document.querySelector<HTMLInputElement>(
      'input[name="email"]'
    );
    const emailValue = emailInput?.value || "";
    // Perform validation if email and password are according to the rules.
    if (!isValidEmail(emailValue)) {
      displayError("Invalid email address", emailInput!);
      return;
    }
     // User Authentication
     if (!userMailAuthentication(emailValue)) { 
      window.alert('User email do not exists!');
  
  } else {
     //move to next window.
     setMode("newPassChange");
  }
   
  // Authentication of user
  function userMailAuthentication(email: string): boolean {
  // send user email to backend and recive respond
  //............
  return true;
  }

  };
// Validate New password change form  
  const validatePasswordChange = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Get email and password input elements and values:
    const passwordInput = document.querySelector<HTMLInputElement>('input[type="password"]');
    const passwordValue = passwordInput?.value || "";
    const confirmPassInput = document.querySelector<HTMLInputElement>('input[type="confirmPass"]');
    const confirmPassValue = confirmPassInput?.value || "";

    //TODO: send new password to backend and recive respond.
    //....
    //Returns the user to the login screen (after successfully user password changed)
    navigate("/");
  };

  // Email validation rules
  function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Display error message to user
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
