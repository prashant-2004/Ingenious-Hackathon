import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from '../App';

function Routess() {
  return (
      <Routes>
        <Route path='/' element={<App />}/>
    </Routes>
  )
}

export default Routess