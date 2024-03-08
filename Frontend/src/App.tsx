import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accessibilik from 'accessibility-react-widget';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import MultipleLoan from "./components/Loans/MultipleLoan";
import SingleLoan from "./components/Loans/SingleLoan";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import ContactUs from "./components/ContactUs/ContactUs";
import {UserContext} from './components/Context/UserContext';
import MortgageTable from "./components/Mortgages/MortgageTable";
import MortgagePage from "./components/Mortgages/MortgagePage";
import MortgageForm from "./components/Mortgages/MortgageForm";
import PassRecovery from "./components/PassRecovery/PassRecovery";
import Signup from "./components/Signup/Signup";
import SingleLoanConfig from "./components/Loans/SingleLoanConfig"; // import the context


function App() {
    const [username, setUsername] = useState('');

    return (
        <UserContext.Provider value={{username, setUsername}}>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
            </style>
            <div className="App">
                <Accessibilik />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Dashboard><Homepage/></Dashboard>}/>
                        <Route path="/single-loan" element={<Dashboard><SingleLoan/></Dashboard>}/>
                        <Route path="/multiple-loan" element={<Dashboard><MultipleLoan/></Dashboard>}/>
                        <Route path="/login" element={<Dashboard><Login/></Dashboard>}/>
                        <Route path="/signup" element={<Dashboard><Signup/></Dashboard>}/>
                        <Route path="/password-recovery" element={<Dashboard><PassRecovery/></Dashboard>}/>
                        <Route path="/contact-us" element={<Dashboard><ContactUs/></Dashboard>}/>
                        <Route path="/large-loan" element={<Dashboard><ContactUs/></Dashboard>}/>
                        <Route path="/check-loan"
                               element={<Dashboard><MortgagePage><MortgageForm/></MortgagePage></Dashboard>}/>
                        <Route path="/profitability-table"
                               element={<Dashboard><MortgagePage><MortgageTable/></MortgagePage></Dashboard>}/>
                        <Route path="/single-loan-config" element={<Dashboard><SingleLoanConfig/></Dashboard>}/>

                    </Routes>
                </BrowserRouter>
            </div>
        </UserContext.Provider>
    );
}

export default App;
