import React, {ReactNode} from 'react';
import {Navbar, Nav, NavDropdown, Col, Row} from 'react-bootstrap';
import {FaHome, FaUser} from 'react-icons/fa';
import {Link} from "react-router-dom";
import './Dashboard.css';

interface DashboardProps {
    children: ReactNode;
}

const Dashboard: React.FC<DashboardProps> = ({children}) => {
    const username = 'ilyaveruk'; // Replace this with the actual username

    return (
        <div >
            <Navbar style={{backgroundColor: '#0D5C63'}} variant="light" className="p-5 justify-content-end shadow">
                <Navbar.Text style={{fontSize: 18, fontWeight: "bold"}}>{username} <FaUser size={24}/></Navbar.Text>
            </Navbar>
            <Row >
                <Col xs={12} sm={12} md={12} lg={2} style={{backgroundColor: '#e7e7e7'}} className="col-shadow col-sm-height">
                    <h3 className="mt-5"><FaHome size={24}/> תפריט</h3>
                    <Nav className="flex-column">
                        <Link to="/" className=" m-3 ">דף הבית</Link>
                        <NavDropdown title="מעוניין לקחת משכנתא חדשה" id="loan-options" className=" m-3 ">
                            <Link to="/check-loan" className="dropdown-item">רוצה לבדוק איפה הכי כדאי לי לקחת
                                משכנתא</Link>
                        </NavDropdown>
                        <NavDropdown title="מעוניין לקחת הלוואה רגילה" id="loan-options" className=" m-3 ">
                            <NavDropdown title="מעוניין לקחת הלוואה עד 100 אלף שח" id="loan-options">
                                <Link to="/single-loan" className="dropdown-item ">אני מעוניין לקחת הלוואה אחת</Link>
                                <Link to="/multiple-loan" className="dropdown-item ">אני מעוניין לקחת כמה הלוואות</Link>
                            </NavDropdown>
                            <Link to="/large-loan" className="dropdown-item ">מעוניין לקחת הלוואה מעל 100 אלף ש"ח</Link>
                        </NavDropdown>
                        <Link to="/contact" className=" m-3 ">צור קשר</Link>
                    </Nav>
                </Col>
                <Col md={10} style={{backgroundColor: '#FFFFFA'}}>
                    <div style={{display: 'flex', flexDirection: 'row', margin: 20}}>
                        <div style={{flex: 1}}>
                            {children}
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;