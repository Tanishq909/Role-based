//rfc Shortcut to put it React basic functional component
import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { Toaster } from "react-hot-toast";
import Admin from './pages/Admin';
import PublicLayouts from './Layouts/PublicLayouts';
import UserLayout from './Layouts/UserLayout';
import AdminLayouts from './Layouts/AdminLayouts';

export default function App() {
  return (
    <>
        <BrowserRouter>
          <Toaster/>
            <Routes>
              
              <Route path='/' element={<UserLayout/>} >
              <Route index element={<Home/>}/>

              </Route>
              <Route path='/admin' element={<AdminLayouts />}>
              <Route index element={<Admin/>}/>

              </Route>
              <Route path='/' element={<PublicLayouts/>}>
              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>
                   
              </Route>
            </Routes>
          </BrowserRouter>
    </>
  )
}

