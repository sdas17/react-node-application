import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);


  const isAuthenticated = user && user.token;
  console.log(isAuthenticated)

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
