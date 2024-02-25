import React, {ReactNode, useContext, useState} from 'react';
import {Navbar, Nav, NavDropdown, Offcanvas, Button} from 'react-bootstrap';
import {FaBars, FaHome, FaUser} from 'react-icons/fa';
import {Link} from "react-router-dom";
import './Dashboard.css';
import {UserContext} from "../Context/UserContext";

interface DashboardProps {
    children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({children}) => {
    // Replace this with the actual username
    const {username} = useContext(UserContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Navbar variant="light" className="p-4 shadow">
                <Button variant="primary" onClick={handleShow} style={{marginLeft: 'auto'}}>
                    <FaBars/>
                </Button>
                <Navbar.Text style={{fontSize: 18, fontWeight: "bold"}}>{username ? username : 'משתמש אנונימי'} <FaUser
                    size={24}/></Navbar.Text>
                {username ? <></> : <Button variant="outline-success" className="mx-3" href="/login">התחבר</Button>}
            </Navbar>
            <div style={{display: 'flex', flexDirection: 'row', margin: 20}}>
                <div style={{flex: 1}}>
                    {children}
                </div>
                <Offcanvas show={show} onHide={handleClose} bg="primary" placement="end">
                    <Offcanvas.Header>
                        <Offcanvas.Title>
                            <FaHome/> תפריט
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <Nav.Link href="/">דף הבית</Nav.Link>
                            <NavDropdown title="מעוניין לקחת משכנתא חדשה" id="loan-options">
                                <NavDropdown.Item href="/check-loan">רוצה לבדוק איפה הכי כדאי לי לקחת
                                    משכנתא</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="מעוניין לקחת הלוואה רגילה" id="loan-options">
                                <NavDropdown title="מעוניין לקחת הלוואה עד 100 אלף שח" id="loan-options">
                                    <NavDropdown.Item href="/single-loan">אני מעוניין לקחת הלוואה אחת</NavDropdown.Item>
                                    <NavDropdown.Item href="/multiple-loan">אני מעוניין לקחת כמה
                                        הלוואות</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown.Item href="/large-loan">מעוניין לקחת הלוואה מעל 100 אלף
                                    ש"ח</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/contact-us">צור קשר</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    );
};

export default Dashboard;