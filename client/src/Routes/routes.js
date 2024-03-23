import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from '../App';
import AdminLogin from '../Pages/admin/login';
import AdminSignup from '../Pages/admin/signup';
import Dashboard from '../Pages/admin/dashboard';


import UserLogin from '../Pages/users/login';
import UserSignup from '../Pages/users/signup';

function Routess() {
  return (
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/admin-login' element={<AdminLogin />}/>
        <Route path='/admin-signup' element={<AdminSignup />}/>
        <Route path='/admin-dashboard' element={<Dashboard />}/>


        <Route path='/login' element={<UserLogin />}/>
        <Route path='/signup' element={<UserSignup />}/>
    </Routes>
  )
}

export default Routess