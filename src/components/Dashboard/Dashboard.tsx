import React, { ReactNode, useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button, NavDropdown } from 'react-bootstrap';
import {FaBars, FaHome} from 'react-icons/fa';

interface DashboardProps {
    children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({ children }) => {
    const username = 'ilyaveruk'; // Replace this with the actual username
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Navbar bg="primary" variant="light" className="mb-5">
                <Container>

                    <Button variant="primary" onClick={handleShow}>
                        <FaBars/>
                    </Button>
                    <Navbar.Text>{username}</Navbar.Text>
                </Container>
            </Navbar>
            <div style={{ display: 'flex', flexDirection: 'row' , margin: 20}}>
                <div style={{ flex: 1 }}>
                    {children}
                </div>
                <Offcanvas show={show} onHide={handleClose} bg="primary" placement="end">
                    <Offcanvas.Header closeButton >
                        <Offcanvas.Title >
                            <FaHome/> תפריט
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <Nav.Link href="#home">דף הבית</Nav.Link>
                            <NavDropdown title="מעוניין לקחת משכנתא חדשה" id="loan-options">
                                <NavDropdown.Item href="#new-loan">רוצה לבדוק איפה הכי כדאי לי לקחת משכנתא</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="מעוניין לקחת הלוואה רגילה" id="loan-options">
                                <NavDropdown title="מעוניין לקחת הלוואה עד 100 אלף שח" id="loan-options">
                                    <NavDropdown.Item href="#single-loan">אני מעוניין לקחת הלוואה אחת</NavDropdown.Item>
                                    <NavDropdown.Item href="#multiple-loan">אני מעוניין לקחת כמה הלוואות</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown.Item href="#new-loan">מעוניין לקחת הלוואה מעל 100 אלף ש"ח</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#pricing">צור קשר</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    );
};

export default Dashboard;