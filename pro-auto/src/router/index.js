import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import ScreenClient from '../pages/screenClient';

export default function Router() {
 return (
    <>
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/TelaUsuario' element={<ScreenClient/>} />
            </Routes>
        </BrowserRouter>
    </>
 );
}