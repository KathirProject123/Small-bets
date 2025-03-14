import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard"; // Ensure this import is correct

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/dashboard" element={<Dashboard />} /> {/* Make sure Dashboard is imported correctly */}
            </Routes>
        </Router>
    );
}

export default App;
