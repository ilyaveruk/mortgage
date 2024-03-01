import React, {ReactNode, useEffect, useState} from 'react';
import {Navbar, Nav, NavDropdown, Offcanvas, Button, OverlayTrigger, Tooltip} from 'react-bootstrap';
import {FaBars, FaHome, FaUser} from 'react-icons/fa';
import './Dashboard.css';
import {useLocation} from "react-router-dom";


interface DashboardProps {
    children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({children}) => {
    // Replace this with the actual username
    let username = localStorage.getItem('username');
    const [show, setShow] = useState(false);
    const location = useLocation();


    useEffect(() => {
        username = localStorage.getItem('username');
    }, [username]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleLogout = () => {
        localStorage.removeItem('username');
        window.location.reload();
    };

    const renderTooltip = (props: React.PropsWithChildren<any>) => (
        <Tooltip id="button-tooltip" {...props}>
            אומדן בלבד.פרטי ההלואה הסופיים הם הקובעים
        </Tooltip>
    );

    const containerStyle: React.CSSProperties =
        location.pathname !== '/'
            ? { display: 'flex', flexDirection: 'row', marginTop: 50 }
            : { display: 'flex', flexDirection: 'row' };

    return (
        <div>
            <Navbar className="p-1 custom-navbar" sticky={"top"}>
                <Button onClick={handleShow} className="custom-nav-btn">
                    <FaBars/>
                </Button>
                <Navbar.Text style={{fontSize: 18, fontWeight: "bold"}}>{username ? username
                    : 'משתמש אנונימי'} <FaUser
                    size={24}/>
                </Navbar.Text>
                <Button
                    className="login-btn mx-3"
                    onClick={username ? handleLogout : undefined}
                    href={!username ? "/login" : undefined}
                >
                    {username ? "התנתק" : "התחבר"}
                </Button>
            </Navbar>

                <div style={containerStyle}>

                <div style={{flex: 1}}>
                    {children}
                </div>
                <Offcanvas show={show} onHide={handleClose} bg="primary" placement="end">
                    <Offcanvas.Header className="custom-nav-title">
                        <Offcanvas.Title className="text-icon">
                            <FaHome/> תפריט
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="flex-column">
                            <Nav.Link className="custom-nav-link" href="/">דף הבית</Nav.Link>
                            <NavDropdown className="custom-nav-link" title="מעוניין לקחת משכנתא חדשה" id="loan-options">
                                <NavDropdown.Item href="/check-loan">רוצה לבדוק איפה הכי כדאי לי לקחת
                                    משכנתא</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="custom-nav-link" title="מעוניין לקחת הלוואה רגילה"
                                         id="loan-options">
                                <NavDropdown title="מעוניין לקחת הלוואה עד 100 אלף שח" id="loan-options">
                                    <OverlayTrigger
                                        placement="left"
                                        delay={{show: 250, hide: 400}}
                                        overlay={renderTooltip}>
                                        <NavDropdown.Item href="/single-loan">אני מעוניין לקחת הלוואה
                                            אחת</NavDropdown.Item>
                                    </OverlayTrigger>
                                    <OverlayTrigger
                                        placement="left"
                                        delay={{show: 250, hide: 400}}
                                        overlay={renderTooltip}>
                                        <NavDropdown.Item href="/multiple-loan">אני מעוניין לקחת כמה
                                            הלוואות</NavDropdown.Item>
                                    </OverlayTrigger>
                                </NavDropdown>
                                <NavDropdown.Item href="/large-loan">מעוניין לקחת הלוואה מעל 100 אלף
                                    ש"ח</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="custom-nav-link" href="/contact-us">צור קשר</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    );
};

export default Dashboard;
