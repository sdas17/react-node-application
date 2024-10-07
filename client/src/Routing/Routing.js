import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../Component/Login/LoginPage';
import Home from '../Component/Home/Home';
import Register from '../Component/Register/Register';
import RefugeeList from '../Component/RefugeeList/RefugeeList';
import ProtectedRoute from '../Component/security/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                </Route>

            </Routes>
        </Router>
    );
};

export default App;
