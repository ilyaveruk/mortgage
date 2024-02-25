import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import MultipleLoan from "./components/Loans/MultipleLoan";
import SingleLoan from "./components/Loans/SingleLoan";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import ContactUs from "./components/ContactUs/ContactUs";

function App() {
    return (
        <div className="App">
            {/*TODO: Here you can add your components*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard><Homepage/></Dashboard>}/>
                    <Route path="/single-loan" element={<Dashboard><SingleLoan/></Dashboard>}/>
                    <Route path="/multiple-loan" element={<Dashboard><MultipleLoan/></Dashboard>}/>
                    <Route path="/login" element={<Dashboard><Login/></Dashboard>}/>
                    <Route path="/contact-us" element={<Dashboard><ContactUs/></Dashboard>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
