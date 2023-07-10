import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./login/Login.jsx";
import NotFound from './partials/notFound/NotFound.jsx';
import Register from './register/Register.jsx'
const AuthenticationRoute = () => {
    return (
        <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    );
};

export default AuthenticationRoute;