import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from '../App';
import AdminLogin from '../Pages/admin/login';
import AdminSignup from '../Pages/admin/signup';

function Routess() {
  return (
      <Routes>
        <Route path='/' element={<App />}/>
        {/* <Route path='/login' element={<AdminLogin />}/> */}
        <Route path='/signup' element={<AdminSignup />}/>
    </Routes>
  )
}

export default Routess