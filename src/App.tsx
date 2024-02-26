import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import MultipleLoan from "./components/Loans/MultipleLoan";
import SingleLoan from "./components/Loans/SingleLoan";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";

function App() {
    const [username, setUsername] = useState('');

    return (
        <div className="App">
            {/*TODO: Here you can add your components*/}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard><Homepage/></Dashboard>}/>
                    <Route path="/single-loan" element={<Dashboard><SingleLoan/></Dashboard>}/>
                    <Route path="/multiple-loan" element={<Dashboard><MultipleLoan/></Dashboard>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
