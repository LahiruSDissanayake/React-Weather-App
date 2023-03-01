import React from 'react';
import {BrowserRouter , Route, Routes} from "react-router-dom";
import Login from '../Pages/Login';
import Home from '../Pages/Home';

function Units() {
  return (

    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/home" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Units
