import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import { Button, Col, Form, Row } from "react-bootstrap";
import { log } from "console";

const ContactUs: React.FC = () => {
  const header: string = "נא ליצור קשר";
  const contactHeader: string = "טופס יצירת קשר";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [option, setOption] = useState("");
  const [info, setInfo] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [checkMail, setCheckMail] = useState(false);
  const [errorMail, setErrorMail] = useState(false);

  useEffect(() => {
    setDisabled(validation());
    console.log(firstName, lastName, option, phone, mail, info);

    console.log(disabled);
  }, [firstName, lastName, mail, phone, option, info]);

  const validation = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      mail === "" ||
      phone === "" ||
      option === "" ||
      info === ""
    ) {
      return true;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(mail)) {
      return true;
    }

    return false;
  };

  const sendMail = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        mail: mail,
        phone: phone,
        option: option,
        info: info,
      }),
    };
    fetch("http://localhost:3002/sendmail", requestOptions)
      .then((response) => response)
      .then((data) => setCheckMail(true))
      .catch(() => {
        setErrorMail(true);
      });
  };

  if (errorMail) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  if (checkMail) {
    return (
      <div>
        <h1>. בקשתך התקבלה ניצור איתך קשר בהקדם</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{header}</h1>
      <Divider></Divider>
      <h2>{contactHeader}</h2>
      <div>
        <Form>
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
                  onChange={(event) => {
                    setOption(event.target.value);
                  }}
                >
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
            variant="primary"
            disabled={disabled}
            onClick={() => {
              sendMail();
            }}
          >
            שלח
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default ContactUs;
